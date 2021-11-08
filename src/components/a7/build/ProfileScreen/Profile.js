import profileData from "../../../../reducers/profile"
import {Link} from "react-router-dom";


const Profile = () => {
    return (
        <>
            <div className={"row"}>
                <div className={"col-1"}>
                    <i className="fas fa-arrow-left"></i>
                </div>
                <div className={"col-11 wd-profile-name"}>
                    {profileData.firstName}
                    <span> </span>
                    {profileData.lastName}
                    <div className={"wd-profile-tweetcount"}>
                        {profileData.tweetCount}
                        <span> Tweets</span>
                    </div>
                </div>
            </div>
            <div className={"row"}>
                <img src={profileData.bannerPicture} className={"wd-profile-banner"}/>
            </div>
            <img src={profileData.profilePicture} className={"wd-profile-pic"}/>
            <Link to="/a7/twitter/editProfile" className={"wd-profile-edit"}>
                Edit profile
            </Link>
            <div className={"wd-profile-name"}>
                {profileData.firstName}
                <span> </span>
                {profileData.lastName}
            </div>
            <div className={"wd-profile-handle"}>
                @ {profileData.handle}
            </div>
            <div className={"wd-profile-bio"}>
                {profileData.bio}
            </div>
            <div className={"wd-profile-status"}>
                <span className={"me-2"}>
                    <i className="fas fa-map-marker-alt me-1"></i>
                    {profileData.location}
                </span>
                <span className={"me-2"}>
                    <i className="fas fa-golf-ball me-1"></i>
                    Born
                    {profileData.dateOfBirth}
                </span>
                <span className={"me-2"}>
                    <i className="far fa-calendar-alt me-1"></i>
                    Joined
                    {profileData.dateJoined}
                </span>
            </div>
            <span className={"wd-profile-follow"}>
                {profileData.followingCount}
            </span>
            <span className={"wd-profile-flword me-3 ms-1"}>
            Following
            </span>
            <span className={"wd-profile-follow"}>
                {profileData.followersCount}
            </span>
            <span className={"wd-profile-flword me-3 ms-1"}>
            Followers
            </span>
        </>
    );
}

export default Profile;