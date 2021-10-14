const SearchFieldComponent = () => {
    return (`
        <div class="row wd-search-bar-parent-div">
            <div class="col-11 wd-search-bar-div">
                <div class="row wd-search-bar-parent-div">
                    <div class="col-1">
                        <i class="fas fa-search wd-search-icon"></i>
                    </div>
                    <div class="col-11">
                        <input type="text" class="wd-search-bar" placeholder="Search Twitter">
                    </div>
                </div>
            </div>
            <div class="col-1">
                <i class="fas fa-cog wd-icon-setting"></i>
            </div>
        </div>
    `);
}

export default SearchFieldComponent;