import React from "react";

const SearchFieldComponent = () => {
    return (
        <div className="row wd-search-bar-parent-div">
            <div className="col-11 wd-search-bar-div">
                <div className="row wd-search-bar-parent-div">
                    <div className="col-1">
                        <i className="fas fa-search wd-search-icon"></i>
                    </div>
                    <div className="col-11">
                        <input type="text" className="wd-search-bar" placeholder="Search Twitter" />
                    </div>
                </div>
            </div>
            <div className="col-1">
                <i className="fas fa-cog wd-icon-setting"></i>
            </div>
        </div>
    );
}

export default SearchFieldComponent;