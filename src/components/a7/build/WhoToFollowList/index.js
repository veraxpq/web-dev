import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "../../../../reducer/data/who.json"
const WhoToFollowList = () => {
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item wd-list-font-bold wd-left-bg">
                    Who to follow
                </li>
                {
                    who.map(who => {
                        return <WhoToFollowListItem who = {who}/>;
                    })
                }
            </ul>
        </>
    );
}
export default WhoToFollowList;