const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item wd-home-list">
            <div class="row">
                <div class="col-10 wd-list-font-bold">
                    <div class="wd-list-title">
                        ${post.topic}
                    </div>
                    <div>
                        ${post.userName}
                        <i class="fas fa-check-circle"></i>
                        <span class="wd-list-time">
                            - ${post.time}
                        </span>
                    </div>
                    <div>
                        ${post.title}
                    </div>
                </div>
                <div class="col-2">
                    <img src=${post.image} class="wd-list-imgs">
                </div>
            </div>
        </li>
    `)
}

export default PostSummaryItem;