import React, {useEffect} from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useDispatch, useSelector} from "react-redux";
import {getAllPeople} from "../../services/twitterService";

const selectAllPeople = (state) => state.whoA9;

const WhoToFollowList = () => {
    const dispatch = useDispatch();
    useEffect(() => getAllPeople(dispatch, []));
    const who = useSelector((selectAllPeople));
    console.log(who)
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