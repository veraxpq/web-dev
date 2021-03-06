import {useDispatch} from "react-redux";
import {likeTweet} from "../../../../services/twitterService";

const TweetStats = ({tweet}) => {
    const dispatch = useDispatch();
    const likeClickHandler = () => {
        likeTweet(dispatch, tweet);
    };
    return (
        <div className="row mt-2">
            <div className="col"
                 onClick={likeClickHandler}>
                {
                    tweet.liked && <i className="fas fa-heart me-2"
                                      style={{color: tweet.liked ? "red": "white"}}></i>
                }
                {
                    !tweet.liked && <i className="far fa-heart me-2"></i>
                }
                {tweet.stats.likes}
            </div>
        </div>
        );
    }
    export default TweetStats;
