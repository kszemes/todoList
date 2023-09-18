import React, {useContext} from "react";
import {Todos} from "./Todos.jsx";
import {Login} from "./Login.jsx";
import {UserContext} from "../context/UserContext.jsx";

export const Home = () => {
    const {user} = useContext(UserContext);
    console.log(user)
    return (
        <>
            {user ? <Todos/> : <Login/>}
        </>
    )

}