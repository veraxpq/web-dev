import React from "react";
import ItemStatusComponent from "./ItemStatusComponent.js";

const PostItem = ({
                      post = {
                          
                      }
}) => {
    return (
        <li className="list-group-item wd-home-item">
            <div className="row">
                <div className="col-2">
                    <img src={post.avatar} className="wd-list-imgs" />
                </div>
                <div className="col-10 wd-list-font-bold ">
                    <div className="wd-home-userinfo">
                        <span className="wd-home-username">{post.username}</span>
                        <i className="fas fa-check-circle wd-home-username"></i>
                        @{post.handle}
                        · {post.time}
                        <img src="../../images/more-gray.svg" className="wd-home-more"/>
                    </div>
                    <span dangerouslySetInnerHTML={{__html:post["comment"]}}></span>

                    <div className="wd-home-post-main">
                        <img src={post.image} className="wd-home-postimg"/>
                        {
                            post.title ?
                                (<div className="wd-home-title">
                            {post.title}
                            </div>) : ''
                        }                        
                        
                        {
                            post.content ?
                                (<div className="wd-home-content">
                                {post.content}
                            </div>) : ''
                        }
                           
                        {
                            post.source ?
                                (<div className="wd-home-link">
                            <i className=" fas fa-link"></i>
                            {post.source}
                        </div>) : ''
                        }
                                       
                    </div>
                    <div className="wd-post-status">
                        <ItemStatusComponent post = {post}/>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default PostItem;
