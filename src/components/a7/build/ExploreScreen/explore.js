import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./index";
import WhoToFollowList from "../WhoToFollowList";

const Explore = () => {
    return (
        <>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active={{"status": "Explore"}}/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <ExploreComponent />
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList />
                </div>
            </div>
        </>
    )
}

export default Explore;