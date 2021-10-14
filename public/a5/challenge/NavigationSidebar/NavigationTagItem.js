const NavigationTagItem = (navigationTag) => {
    return(`
            <!-- continue the rest of the list -->
                <a href=${navigationTag.link} class="list-group-item ${navigationTag.active ? 'active ' : ''}">
                    <div class="row">
                        <div class="col-2">
                            <i class='${navigationTag.iconClass}'></i>
                        </div>
                        <div class="d-none d-xl-block col-10">
                            ${navigationTag.name}
                        </div>
                    </div>
                </a>
    `);
}
export default NavigationTagItem;