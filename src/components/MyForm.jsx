import TextField from "@mui/material/TextField";
import AddBoxIcon from '@mui/icons-material/AddBox';
import {useState} from "react";
import {addTodo} from "../utils.js";

export const MyForm = () => {

    const [input, setInput] = useState('');
    return (
        <div className='form'>
            <TextField className='input' id="outlined-basic"
                       label="Új tevékenység"
                       variant="outlined"
                       value={input}
                       onChange={(e) => setInput(e.target.value)}
            />
            <AddBoxIcon sx={{fontSize: '3.5rem', color: 'green'}} onClick={()=>addTodo(input)}/>
        </div>
    );
}