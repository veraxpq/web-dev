import React from "react";
import {Link} from "react-router-dom";
import Build from "./Build";
import TodoList from "./Practice/Todo/TodoList";
import ConditionalOutput from "./Practice/ConditionalOutput";
import Styles from "./Practice/Styles";
import Classes from "./Practice/Classes";
import ReduxExamples from "./Practice/ReduxExamples/components/index";

const Practice = () => {
    return(
        <>
            <h1>Practice</h1>
            <Link to="/a7/twitter/home">
                Build
            </Link>
            <ReduxExamples/>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </>
    )
};

export default Practice;