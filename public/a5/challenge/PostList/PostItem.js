import ItemStatusComponent from "./ItemStatusComponent.js";

const PostItem = (post) => {
    return (`
        <li class="list-group-item wd-home-item">
            <div class="row">
                <div class="col-2">
                    <img src=${post.avatar} class="wd-list-imgs">
                </div>
                <div class="col-10 wd-list-font-bold ">
                    <div class="wd-home-userinfo">
                        <span class="wd-home-username">${post.username}</span>
                        <i class="fas fa-check-circle wd-home-username"></i>
                        @${post.handle}
                        · ${post.time}
                        <img src="../../images/more-gray.svg" class="wd-home-more"/>
                    </div>
                    <div>
                        ${post.comment}
                    </div>
                    <div class="wd-home-post-main">
                        <img src=${post.image} class="wd-home-postimg"/>
                        ${
                            post.title ? `
                            <div class="wd-home-title">
                            ${post.title}
                            </div>` : ''
                        }                        
                        
                        ${
                            post.content ? `
                            <div class="wd-home-content">
                                ${post.content}
                            </div>` : ''
                        }
                           
                        ${
                            post.source ? `
                            <div class="wd-home-link">
                            <i class=" fas fa-link"></i>
                            ${post.source}
                        </div>` : ''
                        }
                                       
                    </div>
                    <div class="wd-post-status">
                        ${ItemStatusComponent(post)}
                    </div>
                </div>
            </div>
        </li>
    `)
}

export default PostItem;
