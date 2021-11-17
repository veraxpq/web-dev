import posts from "./data/tweets.json"

const tweets = (state = posts, action) => {
    switch (action.type) {
        case 'fetch-all-tweets':
            return(
                action.tweets
            )
            break;
        case 'create-tweet':
            const tweet = {
                _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                ...action.tweet,
                "avatar-image": "../../../images/react.png",
                "logo-image": "../../../images/react.png",
                "stats": {
                    "comments": 123,
                    "retweets": 234,
                    "likes": 345
                },
            };
            // console.log("state" , state.tweets)
                return ([
                        tweet,
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