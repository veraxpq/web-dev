import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TweetListItem from "./TweetListItem";
import {fetchAllTweets} from "../../services/twitterService";

const selectAllTweets = (state) => state.tweetsA9;

const TweetList = () => {
    const tweets = useSelector(selectAllTweets);
    console.log("tweets", tweets)
    const dispatch = useDispatch();
    useEffect(() => fetchAllTweets(dispatch), []);
    console.log("tweet", tweets);

    return(
        <ul className="list-group">
            {
                tweets && tweets.map(tweet =>
                    <TweetListItem tweet={tweet}/>
                )
            }
        </ul>
    )
};

export default TweetList;
