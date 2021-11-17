import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({
                               active = {
                                   "status" : "Explore"
                               }
                           }) => {
    return(
        <>
            <div className="list-group">
                <Link to="/a7/"
                      className="list-group-item">
                    <i className="fab fa-twitter"></i>
                </Link>

                <Link to={"/a8/twitter/home"} className={"list-group-item wd-left-bg" +
                (active.status === 'Home' ? ' active' : '')}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fas fa-home"></i>
                        </div>
                        <div className="d-none d-xl-block col-10">
                            Home
                        </div>
                    </div>
                </Link>
                <Link to={"/a8/twitter/explore"} className={"list-group-item wd-left-bg" +
                (active.status === 'Explore' ? ' active' : '')}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fas fa-hashtag"></i>
                        </div>
                        <div className="d-none d-xl-block col-10">
                            Explore
                        </div>
                    </div>
                </Link>
                <div className={"list-group-item wd-left-bg" +
                (active.status === 'Notifications' ? ' active' : '')}>
                    <div className="row">
                        <div className="col-2">
                            <i className="far fa-bell"></i>
                        </div>
                        <div className="d-none d-xl-block col-10">
                            Notifications
                        </div>
                    </div>
                </div>
                <div className={"list-group-item wd-left-bg" +
                (active.status === 'Messages' ? ' active' : '')}>
                    <div className="row">
                        <div className="col-2">
                            <i className="far fa-envelope"></i>
                        </div>
                        <div className="d-none d-xl-block col-10">
                            Messages
                        </div>
                    </div>
                </div>
                <div className={"list-group-item wd-left-bg" +
                (active.status === 'Bookmarks' ? ' active' : '')}>
                    <div className="row">
                        <div className="col-2">
                            <i className="far fa-bookmark"></i>
                        </div>
                        <div className="d-none d-xl-block col-10">
                            Bookmarks
                        </div>
                    </div>
                </div>
                <div className={"list-group-item wd-left-bg" +
                (active.status === 'Lists' ? ' active' : '')}>
                    <div className="row">
                        <div className="col-2">
                            <i className="far fa-list-alt"></i>
                        </div>
                        <div className="d-none d-xl-block col-10">
                            Lists
                        </div>
                    </div>
                </div>
                <Link to={"/a8/twitter/profile"} className={"list-group-item wd-left-bg" +
                (active.status === 'Profile' ? ' active' : '')}>
                    <div className="row">
                        <div className="col-2">
                            <i className="far fa-user"></i>
                        </div>
                        <div className="d-none d-xl-block col-10">
                            Profile
                        </div>
                    </div>
                </Link>
                <div className={"list-group-item wd-left-bg" +
                (active.status === 'More' ? ' active' : '')}>
                    <div className="row">
                        <div className="col-2">
                            <i className="far fa-circle"></i>
                        </div>
                        <div className="d-none d-xl-block col-10">
                            More
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-grid mt-2">
                <a href="../ExploreScreen/tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}

export default NavigationSidebar;