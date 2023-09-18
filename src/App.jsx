import React  from 'react'
import './App.css';
import {Home} from "./components/Home.jsx";
import {UserProvider} from "./context/UserContext.jsx";

const App = () => {
    return (
        <UserProvider>
            <div>
                <Home/>
            </div>
        </UserProvider>
    )
}
export default App