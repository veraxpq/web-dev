const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img src=${who.avatarIcon} class="wd-list-images">
                </div>
                <div class="col-7">
                    <div class="wd-list-font-bold">
                        ${who.userName}
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div>
                        @${who.handle}
                    </div>
                </div>
                <div class="col-3">
                    <button class="btn btn-primary ps-2 pe-2 btn-block rounded-pill ">Follow</button>
                </div>
            </div>
        </li>
    `);
}

export default WhoToFollowListItem;
