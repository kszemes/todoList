import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import {deleteTodo, doneTodo, editTodo} from "../utils.js";
import {EditTodo} from "./EditTodo.jsx";

export const Todo = ({done, todo, id}) => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <ListItem sx={{borderBottom: '1px solid lightgray'}}
                      key={id}
                      secondaryAction={
                          <>
                              <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(id)}>
                                  <DeleteIcon sx={{color: 'red'}}/>
                              </IconButton>
                              <IconButton edge="end" aria-label="edit" onClick={() => setOpen(true)}>
                                  <CreateIcon sx={{color: '3e2723'}}/>
                              </IconButton>
                          </>

                      }
                      disablePadding
            >
                <ListItemButton role={undefined} dense onClick={() => doneTodo(id, done)}>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={done}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{'aria-labelledby': id}}
                        />
                    </ListItemIcon>
                    <ListItemText id={id} primary={todo}/>
                </ListItemButton>
            </ListItem>
            {open && <EditTodo open={open} setOpen={setOpen} id = {id} todo = {todo}/>}
        </>
    );
}