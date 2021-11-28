const tweetsA9 = (state = '', action) => {
    switch (action.type) {
        case 'fetch-all-tweets':
            return(
                action.tweets
            )
        case 'create-tweet':
                return ([
                        action.tweet,
                        ...state,
                    ]
                );

        case 'delete-tweet':
            return state
                .filter(tweet => tweet._id !== action.tweet._id);
        case 'like-tweet':
            return state.map(tweet => {
                if(tweet._id === action.tweet._id) {
                    if(tweet.stats.liked === true) {
                        tweet.stats.liked = false;
                        tweet.stats.likes--;
                    } else {
                        tweet.stats.liked = true;
                        tweet.stats.likes++;
                    }
                    return tweet;
                } else {
                    return tweet;
                }
            });
        default:
            return(state);
    }
};

export default tweetsA9;