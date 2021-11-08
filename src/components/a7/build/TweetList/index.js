import React from "react";
import {useSelector} from "react-redux";
import TweetListItem from "./TweetListItem";

const selectAllTweets = (state) => {
    return state.tweets;
}

const TweetList = () => {
    const tweets = useSelector(selectAllTweets);
    return(
        <ul className="list-group">
            {
                tweets.map(tweet =>
                    <TweetListItem tweet={tweet}/>
                )
            }
        </ul>
    )
};

export default TweetList;
