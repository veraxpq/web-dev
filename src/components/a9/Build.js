import React from "react";
import {Route} from "react-router-dom";
import './build.css';
import HomeScreenA9 from "./build/HomeScreen/HomeScreen";
import ExploreA9 from "./build/ExploreScreen/explore";
import ProfileScreenA9 from "./build/ProfileScreen";
import EditProfileA9 from "./build/EditProfile";


const Build = () => {
    return(
        <div>
            <Route path={"/a9/twitter/home"}>
                <HomeScreenA9/>
            </Route>
            <Route path={"/a9/twitter/explore"}>
                <ExploreA9/>
            </Route>
            <Route path={"/a9/twitter/profile"}>
                <ProfileScreenA9/>
            </Route>
            <Route path={"a9/twitter/editProfile"}>
                <EditProfileA9/>
            </Route>
        </div>
    )
};

export default Build;