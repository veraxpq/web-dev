// const TWEET_API = 'http://localhost:4000/api/tweets';
// const PROFILE_API = 'http://localhost:4000/api/profile';
const TWEET_API = 'http://web-dev-node2123.herokuapp.com/api/tweets';
const PROFILE_API = 'http://web-dev-node2123.herokuapp.com/api/profile';

export const fetchAllTweets = (dispatch) =>
    fetch(TWEET_API)
        .then(response => response.json())
        .then(tweets =>
            dispatch({
                type: 'fetch-all-tweets',
                tweets
            })
        );

export const postNewTweet = (dispatch, newTweet) =>
    fetch(TWEET_API, {
        method: 'POST',
        body: JSON.stringify(newTweet),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(tweet =>
            dispatch({
                type: 'create-tweet',
                tweet
            })
        );

export const deleteTweet = (dispatch, tweet) =>
    fetch(`${TWEET_API}/${tweet._id}`, {
        method: 'DELETE'
    }).then(response => dispatch({
        type: 'delete-tweet',
        tweet
    }));

export const likeTweet = (dispatch, tweet) => {
    fetch(`${TWEET_API}/${tweet._id}/like`, {
        method: 'PUT'
    })
        .then(() =>
            dispatch({
                type: 'like-tweet',
                id: tweet._id
            }));
    // console.log("like:", tweet);
}


export const getCurrentProfile = (dispatch) => {
    fetch(PROFILE_API, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(body => {
            dispatch({
                type: 'get-current-profile',
                profile: body
            })
        });
}


export const updateCurrentProfile = (dispatch, profile) => {
    // console.log("service:" , profile);
    fetch(PROFILE_API, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(() =>
            dispatch({
                type: 'update-profile',
                profile
            }));

}

