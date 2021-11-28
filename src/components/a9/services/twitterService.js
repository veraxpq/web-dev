const TWEET_API = 'http://localhost:4000/api/tweets';
const PROFILE_API = 'http://localhost:4000/api/profile';
const WHO_API = 'http://localhost:4000/api/who'
// const TWEET_API = 'https://web-dev-node2123.herokuapp.com/api/tweets';
// const PROFILE_API = 'https://web-dev-node2123.herokuapp.com/api/profile';

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
        .then(tweet => {
                dispatch({
                    type: 'create-tweet',
                    tweet
                })
                console.log(tweet)
        });

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
        .then(response => response.json())
        .then((tweet) =>
            dispatch({
                type: 'like-tweet',
                tweet: tweet[0]
            }));
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

export const getAllPeople = (dispatch) =>
    fetch(WHO_API)
    .then(response => response.json())
    .then(who => {
        dispatch({
            type: 'getAllPeople',
            who
        })
        console.log(who)
    });