import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import EditProfileComponent from "./EditProfile";
import React from "react";

const EditProfileA9 = () => {
    return (
        <>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active={{"status": "Profile"}}/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6 wd-postlist">
                    <EditProfileComponent />
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <PostSummaryList title="What's happening"/>
                </div>
            </div>
        </>
    );
}

export default EditProfileA9;