import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {postNewTweet} from "../../../../../services/twitterService";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tweetClickHandler = () => {
        postNewTweet(dispatch, {
            tweet: whatsHappening
        });
    }

    return(
        <>
            <div className={"row"}>
                <div className={"col-2"}>
                    <img className={"ms-2"} style={{"width":"80%"}} src={"../../images/elon.png"}/>
                </div>
                <div className={"col-10"}>
                    <textarea className={"wd-what-post"} style={{"width":"100%"}} value={whatsHappening}
                              onChange={(event) =>
                                  setWhatsHappening(event.target.value)} >
                    </textarea>
                    <div className={"row"}>
                        <div className={"col-10"}>
                            <i className="far fa-image me-3 wd-icon-blue"></i>
                            <i className="fas fa-chart-line me-3 wd-icon-blue"></i>
                            <i className="far fa-grin me-3 wd-icon-blue"></i>
                            <i className="far fa-calendar me-3 wd-icon-blue"></i>
                        </div>
                        <div className={"col-2"}>
                            <button className="btn btn-primary btn-block rounded-pill float-right p-1 me-2 mb-3" onClick={tweetClickHandler}>
                                Tweet
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default WhatsHappening;
