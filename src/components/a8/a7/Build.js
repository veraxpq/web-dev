import React from "react";
import {Route} from "react-router-dom";
import './build.css';
import HomeScreen from "./build/HomeScreen/HomeScreen";
import Explore from "./build/ExploreScreen/explore";


const Build = () => {
    return(
        <div>
            <Route path={["/", "/a7/twitter/home"]}
                   exact={true} component={HomeScreen}/>
            <Route path="/a7/twitter/explore"
                   exact={true} component={Explore}/>
        </div>
    )
};

export default Build;