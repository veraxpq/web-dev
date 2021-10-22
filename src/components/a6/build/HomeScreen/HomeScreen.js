import React from "react";
import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "./PostList/index.js";
import PostSummaryList from "../../build/PostSummaryList/index";

const HomeScreen = () => {
    return (
        <>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active={{"status": "Home"}}/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6 wd-postlist">
                    <PostList />
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <PostSummaryList />
                </div>
            </div>
        </>
    );
}
export default HomeScreen;