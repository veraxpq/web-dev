const NavBarComponent = (nav) => {
    return (`
                <ul class="nav nav-tabs wd-nav-tabs">
                    <li class="nav-item">
                        <a class='nav-link wd-nav-item ${nav.active ? `active` : ''}'  href=${nav.source}>${nav.name}</a>
                    </li>
                </ul>
    `);
}

export default NavBarComponent;