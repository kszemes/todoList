import * as React from 'react';
import Button from "@mui/material/Button";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import {editTodo} from "../utils.js";

export const EditTodo = ({open, setOpen, id, todo}) => {
    const [input, setInput] = useState(todo);
    const handleSave = () => {
        editTodo(id, input);
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open} onClose={()=>setOpen(false)}>
                <DialogTitle>Módosítás</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>setOpen(false)}>Cancel</Button>
                    <Button onClick={handleSave}>Sáve</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}