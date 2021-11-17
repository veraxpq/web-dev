import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const [todo, setTodo] = useState({do: 'asdf', done: false});
    const dispatch = useDispatch();
    const updateTodoClickHandler = (todo) => {
        const action = {
            type: 'update-todo',
            todo
        };
        dispatch(action);
    }
    const createTodoClickHandler = () => {
        const action = {
            type: 'create-todo',
            todo
        };
        dispatch(action);
    }
    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue
        };
        setTodo(newTodo);
    }
    const deleteTodoClickHandler = (todo) => {
        const action = {
            type: 'delete-todo',
            todo
        };
        dispatch(action);
    }
    return(
        <>
            <ul className="list-group">
                    {
                        todos.map(todo =>
                        <li className="list-group-item">
                            {todo.do}
                            <input checked={todo.done}
                                   onChange={(event) =>
                                       updateTodoClickHandler(
                                           {...todo,
                                               done: event.target.checked})}
                                   type="checkbox"/>
                            <button onClick={() =>
                                deleteTodoClickHandler(todo)}
                                    className="btn btn-danger float-end">
                                Delete
                            </button>
                        </li>
                        )

                    }
                    <input
                        onChange={todoChangeHandler}
                        value={todo.do}
                        className="form-control"/>
                    <button onClick={createTodoClickHandler}
                            className="btn btn-primary">
                        Create New Todo
                    </button>
            </ul>
        </>
    );
};
export default Todos;
