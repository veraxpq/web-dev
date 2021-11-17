import React from "react";
import PostItem from "./PostItem.js"
import posts from "./posts.json"

const PostList = () => {
    return (
        <ul className="list-group">
            {
                posts.map(post => {
                    return <PostItem post = {post}/>
                })
            }
        </ul>
    )
}
export default PostList;