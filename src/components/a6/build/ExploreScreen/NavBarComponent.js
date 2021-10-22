import React from "react";

const NavBarComponent = ({
                            active = {
                                "status" : "For you"
                            }

                            ,
                             nav = {
                                 "name" : "For you", "source":"#"
                             }
}) => {
    return (
                <li className="nav-item">
                    <a className={"nav-link" + (nav.name === active.status ? ' active' : '')}  href={nav.source}>{nav.name}</a>
                </li>
    );
}

export default NavBarComponent;