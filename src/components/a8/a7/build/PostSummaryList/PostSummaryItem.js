import React from "react";

const PostSummaryItem = ({
                             post = {
                                 "topic": "Web Development",
                                 "userName": "ReactJS",
                                 "time": "2h",
                                 "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                 "image": "/images/react.png"
                             }
}) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-10 wd-list-font-bold">
                    <div className="wd-list-title">
                        {post.topic}
                    </div>
                    <div>
                        {post.userName}
                        <i className="fas fa-check-circle"></i>
                        <span className="wd-list-time">
                            - {post.time}
                        </span>
                    </div>
                    <div>
                        {post.title}
                    </div>
                </div>
                <div className="col-2">
                    <img src={post.image} className="wd-list-imgs" />
                </div>
            </div>
        </li>
    )
}

export default PostSummaryItem;