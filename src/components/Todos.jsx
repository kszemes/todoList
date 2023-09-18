import {useEffect, useState} from "react";
import {Logout} from "./Logout.jsx";
import List from "@mui/material/List";
import {Todo} from "./Todo.jsx";
import {MyForm} from "./MyForm.jsx";
import {readTodos} from "../utils.js";

export const Todos = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        return readTodos(setTodos);
    }, []);

    return (
        <div className="todos">
            <h1>My Todos</h1>
            <Logout/>
            <MyForm/>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 'auto'}}>
                {todos.map(obj =>
                    <Todo key={obj.id} {...obj} />
                )}
            </List>
        </div>
    )
}