import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentProfile} from "../../../../services/twitterService";

const selectCurrentProfile = (state) => state.profileA9;

const Profile = () => {
    const profile = useSelector(selectCurrentProfile);
    const dispatch = useDispatch();
    useEffect(() => getCurrentProfile(dispatch), []);
    // console.log("profile", profile);
    return (
        <>
            <div className={"row"}>
                <div className={"col-1"}>
                    <i className="fas fa-arrow-left"></i>
                </div>
                <div className={"col-11 wd-profile-name"}>
                    {profile.name}
                    <div className={"wd-profile-tweetcount"}>
                        {profile.tweetCount}
                        <span> Tweets</span>
                    </div>
                </div>
            </div>
            <div className={"row"}>
                <img src={profile.bannerPicture} className={"wd-profile-banner"}/>
            </div>
            <img src={profile.profilePicture} className={"wd-profile-pic"}/>
            <Link to="/a8/twitter/editProfile" className={"wd-profile-edit"}>
                Edit profile
            </Link>
            <div className={"wd-profile-name"}>
                {profile.name}
            </div>
            <div className={"wd-profile-handle"}>
                @ {profile.handle}
            </div>
            <div className={"wd-profile-bio"}>
                {profile.bio}
            </div>
            <div className={"wd-profile-status"}>
                <span className={"me-2"}>
                    <i className="fas fa-map-marker-alt me-1"></i>
                    {profile.location}
                </span>
                <span className={"me-2"}>
                    <i className="fas fa-golf-ball me-1"></i>
                    Born
                    {profile.dateOfBirth}
                </span>
                <span className={"me-2"}>
                    <i className="far fa-calendar-alt me-1"></i>
                    Joined
                    {profile.dateJoined}
                </span>
            </div>
            <span className={"wd-profile-follow"}>
                {profile.followingCount}
            </span>
            <span className={"wd-profile-flword me-3 ms-1"}>
            Following
            </span>
            <span className={"wd-profile-follow"}>
                {profile.followersCount}
            </span>
            <span className={"wd-profile-flword me-3 ms-1"}>
            Followers
            </span>
        </>
    );
}

export default Profile;