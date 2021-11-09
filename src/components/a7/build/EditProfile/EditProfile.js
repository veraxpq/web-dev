import {Link} from "react-router-dom";
import {React, useState} from "react";
import {useDispatch, useSelector} from "react-redux";



const EditProfileComponent = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    const [name, setName] = useState(profile.name);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const nameChangeHandler = (event) => {
        const nameValue = event.target.value;
        setName(nameValue);
    }
    const bioChangeHandler = (event) => {
        setBio(event.target.value);
    }
    const locationChangeHandler = (event) => {
        setLocation(event.target.value);
    }
    const websiteChangeHandler = (event) => {
        setWebsite(event.target.value);
    }
    const updateProfileHandler = () => {
        const action = {
            type: 'update-profile',
            payload: {
                name,
                bio,
                location,
                website
            }
        };
        dispatch(action);
    }
    return (
        <>
            <div className={"row"}>
                <Link to={"/a7/twitter/profile"} className={"col-1"}>
                    <i className="fas fa-times"></i>
                </Link>
                <div className={"col-10 wd-profile-name"}>
                    Edit
                    <span> </span>
                    Profile
                </div>
                <div className={"col-1"}>
                    <Link to="/a7/twitter/profile" className={"wd-profile-save"} onClick={updateProfileHandler}>
                        Save
                    </Link>
                </div>

            </div>
            <div className={"row"}>
                <img src={profile.bannerPicture} className={"wd-profile-banner"}/>
                <div className={"row wd-profile-edit-icons"}>
                    <div className={"col-6 wd-profile-edit-camera"}>
                        <i className="fas fa-camera "></i>
                    </div>
                    <div className={"col-6"}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
            </div>
            <img src={profile.profilePicture} className={"wd-profile-pic"}/>
            <i className="fas fa-camera wd-profile-pic-edit"></i>
            <div className={"wd-profile-edit-border"}>
                Name
                <div>
                    <input className={"form-control wd-profile-name-edit"} type={"text"} value={name} onChange={nameChangeHandler}></input>
                </div>
            </div>
            <div className={"wd-profile-edit-border"}>
                Bio
                <div className={"wd-profile-name-edit"}>
                    <input className={"form-control wd-profile-name-edit"} type={"text"} value={bio} onChange={bioChangeHandler}></input>
                </div>
            </div>
            <div className={"wd-profile-edit-border"}>
                Location
                <div className={"wd-profile-name-edit"}>
                    <input className={"form-control wd-profile-name-edit"} type={"text"} value={location} onChange={locationChangeHandler}></input>
                </div>
            </div>
            <div className={"wd-profile-edit-border"}>
                Website
                <div className={"wd-profile-name-edit"}>
                    <input className={"form-control wd-profile-name-edit"} type={"text"} value={website} onChange={websiteChangeHandler}></input>
                </div>
            </div>
            <div className={"wd-profile-edit-birth"}>
                Birth date ·
                <Link to={"/a7/twitter/edit"}>Edit</Link>
            </div>
            <div className={"wd-profile-name-edit ps-1"}>
                {profile.dateOfBirth}
            </div>
        </>
    );
}

export default EditProfileComponent;