import React from "react";

const ItemStatusComponent = (post) => {
    let commentNum = transferNumber(post.commentCount);
    let cycleNum = transferNumber(post.recycleCount);
    let likeNum = transferNumber(post.likeCount);

    return (
        <div className="row">
            <div className="col-3">
                <i className="far fa-comment"></i>
                {commentNum}
            </div>
            <div className="col-3">
                <i className="fas fa-retweet"></i>
                {cycleNum}
            </div>
            <div className="col-3">
                <i className="far fa-heart"></i>
                {likeNum}
            </div>
            <div className="col-3">
                <i className="fas fa-share-square"></i>
            </div>
        </div>
    )
}

function transferNumber(number) {
    if (number < 1000) {
        return number;
    } else if (number < 10000000) {
        return number / 1000.0 + 'K';
    } else if (number < 10000000000) {
        return number / 10000000000.0 + 'B';
    }
}

export default ItemStatusComponent;