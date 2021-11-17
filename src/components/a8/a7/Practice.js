import React from "react";
import {Link} from "react-router-dom";
import TodoList from "./Practice/Todo/TodoList";
import ConditionalOutput from "./Practice/ConditionalOutput";
import Styles from "./Practice/Styles";
import Classes from "./Practice/Classes";
import ReduxExamples from "./Practice/ReduxExamples/components/index";

const PracticeA8 = () => {
    return(
        <>
            <h1>Practice</h1>
            <Link to="/a8/twitter/home">
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

export default PracticeA8;