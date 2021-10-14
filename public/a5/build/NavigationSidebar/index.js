import NavigationTagItem from "./NavigationTagItem.js";
import navigationTags  from "./navigationTags.js";

const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="#">
                    <i class="fab fa-twitter"></i>
                </a>
            <!-- continue the rest of the list -->
                ${
        navigationTags.map(navigationTag => {
            return (NavigationTagItem(navigationTag, $));
        }).join('')
    }
            </div>
            <div class="d-grid mt-2">
                <a href="../ExploreScreen/tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;