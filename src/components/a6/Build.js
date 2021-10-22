import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./build/NavigationSidebar/index";
import WhoToFollowList from "./build/WhoToFollowList/index";
import ExploreComponent from "./build/ExploreScreen/index"
import './build.css';

const Build = () => {
    return(
        <>
            <h1>Build</h1>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/practice">
                Practice
            </Link>
        </>
    )
};

export default Build;