import {useDispatch} from "react-redux";
import {likeTweet} from "../../../../../services/twitterService";
import React from "react";

const selectTweetStats = (state) => state.tweets
const TweetStats = ({tweet}) => {
    const dispatch = useDispatch();
    const likeClickHandler = () => {
        likeTweet(dispatch, tweet);
    };
    console.log("tweet.stats.like", tweet);
    return (
        <div className="row mt-2">
            <div className={"col-3"}>
                <i className="far fa-comment"></i>
                {tweet.stats.comments}
            </div>
            <div className="col-3">
                <i className="fas fa-retweet"></i>
                {tweet.stats.retweets}
            </div>
            <div className="col-3"
                 onClick={likeClickHandler}>
                {
                    tweet.stats.liked && <i className="fas fa-heart me-2"
                                      style={{color: tweet.stats.liked ? "red": "white"}}></i>
                }
                {
                    !tweet.stats.liked && <i className="far fa-heart me-2"></i>
                }
                {tweet.stats.likes}
            </div>
            <div className={"col-3"}>
                <i className="fas fa-share-square"></i>
            </div>
        </div>
        );
    }
    export default TweetStats;
