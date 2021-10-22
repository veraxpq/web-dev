import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";

const Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <TodoList/>
        </div>
    )
};
export default Practice;