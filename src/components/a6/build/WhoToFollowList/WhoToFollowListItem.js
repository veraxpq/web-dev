import React from "react";

const WhoToFollowListItem = ({
                                 who = {
                                     avatarIcon: '/images/nasa.png',
                                     userName: 'NASA',
                                     handle: 'NASA',
                                 }
}) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={who.avatarIcon} className="wd-list-images" alt={"NASA"}/>
                </div>
                <div className="col-7">
                    <div className="wd-list-font-bold">
                        {who.userName}
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <div>
                        @{who.handle}
                    </div>
                </div>
                <div className="col-3">
                    <button className="btn btn-primary ps-2 pe-2 btn-block rounded-pill ">Follow</button>
                </div>
            </div>
        </li>
    );
}

export default WhoToFollowListItem;
