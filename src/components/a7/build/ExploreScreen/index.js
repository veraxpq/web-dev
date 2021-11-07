import React from "react";
import PostSummaryList from "../PostSummaryList/index.js"
import SearchFieldComponent from "./SearchFieldComponent.js"
import NavBarComponent from "./NavBarComponent.js"
import navs from "./navs.json"
import MainImageComponent from "./MainImageComponent.js";

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <SearchFieldComponent />
            </div>
            <ul className="nav mb-2 nav-tabs mt-2">
                {
                    navs.map(nav => {
                        return <NavBarComponent nav = {nav}/>;
                    })
                }
            </ul>
            <MainImageComponent />
            <div className="mt-3">
                <PostSummaryList />
            </div>
        </>
    );
}
export default ExploreComponent;