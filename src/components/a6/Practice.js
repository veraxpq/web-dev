import React from "react";
import {Link} from "react-router-dom";
import Build from "./Build";
import TodoList from "./Practice/Todo/TodoList";
import ConditionalOutput from "./Practice/ConditionalOutput";
import Styles from "./Practice/Styles";
import Classes from "./Practice/Classes";

const Practice = () => {
    return(
        <>
            <h1>Practice</h1>
            <Link to="/a7/hello">
                Hello
            </Link> |
            <Link to="/a7/build">
                Build
            </Link>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </>
    )
};

export default Practice;