import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
            <!-- continue here -->
                <li class="list-group-item wd-list-font-bold wd-left-bg">
                    Who to follow
                </li>
                ${
            who.map(person => {
                return (WhoToFollowListItem(person));
            }).join('')
                }
                </ul>
        `       );
}
export default WhoToFollowList;