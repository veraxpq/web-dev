import profileData from "../../../../reducers/profile"
import {Link} from "react-router-dom";


const EditProfileComponent = () => {
    return (
        <>
            <div className={"row"}>
                <div className={"col-1"}>
                    <i className="fas fa-times"></i>
                </div>
                <div className={"col-11 wd-profile-name"}>
                    Edit
                    <span> </span>
                    Profile
                    <Link to="/a7/twitter/profile" className={"wd-profile-save"}>
                        Save
                    </Link>
                </div>
            </div>
            <div className={"row"}>
                <img src={profileData.bannerPicture} className={"wd-profile-banner"}/>
                <div className={"row wd-profile-edit-icons"}>
                    <div className={"col-6 wd-profile-edit-camera"}>
                        <i className="fas fa-camera "></i>
                    </div>
                    <div className={"col-6"}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
            </div>
            <img src={profileData.profilePicture} className={"wd-profile-pic"}/>
            <i className="fas fa-camera wd-profile-pic-edit"></i>
            <div className={"wd-profile-edit-border"}>
                Name
                <div className={"wd-profile-name-edit"}>
                    {profileData.firstName}
                    <span> </span>
                    {profileData.lastName}
                </div>
            </div>
            <div className={"wd-profile-edit-border"}>
                Bio
                <div className={"wd-profile-name-edit"}>
                    {profileData.bio}
                </div>
            </div>
            <div className={"wd-profile-edit-border"}>
                Location
                <div className={"wd-profile-name-edit"}>
                    {profileData.location}
                </div>
            </div>
            <div className={"wd-profile-edit-border"}>
                Website
                <div className={"wd-profile-name-edit"}>
                    {profileData.website}
                </div>
            </div>
            <div className={"wd-profile-edit-birth"}>
                Birth date ·
                <Link to={"a7/twitter/edit"}>Edit</Link>
            </div>
            <div className={"wd-profile-name-edit ps-1"}>
                {profileData.dateOfBirth}
            </div>
        </>
    );
}

export default EditProfileComponent;