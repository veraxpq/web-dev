import PostSummaryList from "../PostSummaryList/index.js"
import SearchFieldComponent from "./SearchFieldComponent.js"
import NavBarComponent from "./NavBarComponent.js"
import navs from "./navs.js"
import posts from "../PostSummaryList/posts.js";
import PostSummaryItem from "../PostSummaryList/PostSummaryItem.js";
import MainImageComponent from "./MainImageComponent.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
                ${SearchFieldComponent()}
           </div>
           <ul class="nav mb-2 nav-tabs mt-2">
                      <!-- tabs -->
                ${
                    navs.map(nav => {
                        return (NavBarComponent(nav));
                    }).join('')
                }
           </ul>
           <!-- image with overlaid text -->
           ${MainImageComponent()}
           <div class="mt-3">
                ${PostSummaryList()}           
           </div>
    `);
}
export default ExploreComponent;

