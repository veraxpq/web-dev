import posts from "./data/tweets.json"

const tweets = (state = posts, action) => {
    switch (action.type) {
        case 'fetch-all-tweets':
            return(
                action.tweets
            )
            break;
        case 'create-tweet':
                return ([
                        action.tweet,
                        ...state,
                    ]
                );
            break;

        case 'delete-tweet':
            return state
                .filter(tweet => tweet._id !== action.tweet._id);
            break;
        case 'like-tweet':
            return state.map(tweet => {
                if(tweet._id === action.id) {
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
            break;
        default:
            return(state);
    }
};

export default tweets;