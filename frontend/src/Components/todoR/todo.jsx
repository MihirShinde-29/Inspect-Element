import React, { useEffect, useState } from 'react'
import { Grid, Button } from "@mui/material"
import DragAndDropList from './Draggable'
import axios from 'axios'
import Swal from 'sweetalert2';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { motion } from "framer-motion";
import { MenuItem } from "@mui/material"
import "./style.css"

const Todo = () => {
    const [items, setItems] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [s, sets] = useState("To Do");
    const handleChange = (event) => {
        sets(event.target.value);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [d, setd] = React.useState({
        task: "",
    });
    const handleChanges = (event) => {
        setd({
            ...d,
            [event.target.name]: event.target.value,
        });
        console.log(d);
    };
    const types = [
        {
            value: 'To Do',
        },
        {
            value: 'Doing',
        },
        {
            value: 'Done',
        },
    ];
    return (
        <center>
            <Button size='large' color='warning' component={motion.div}
                whileHover={{
                    scale: 1.08,
                    textShadow: "0 0 8px rgb(255,255,255)",
                    transition: { duration: 0.3 },
                }} style={{ fontFamily: 'sans-serif', fontWeight: '700', borderRadius: '40px', fontSize: '1.2rem' }} onClick={handleClickOpen} variant='contained'>ADD NEW TASK</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Task</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add the Details :
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="task"
                        name='task'
                        label="Task"
                        type="text"
                        color='success'
                        fullWidth
                        onChange={handleChanges}
                        variant="standard"
                        value={d.task}
                    />

                    <TextField
                        id="outlined-select-currency"
                        select
                        fullWidth
                        variant="standard"
                        value={s}
                        color='success'
                        onChange={handleChange}
                        helperText="Please select your Status"
                    >
                        {types.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button color='error' onClick={handleClose}>Cancel</Button>
                    <Button color='success' onClick={() => {
                        setOpen(false);
                        if (!d.task || !s)
                            Swal.fire("Data incomplete");
                        else {
                            var axios = require('axios');
                            var data = JSON.stringify({
                                "work": d.task,
                                "status": s,
                            });

                            var config = {
                                method: 'post',
                                url: 'http://localhost:3500/todo',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                data: data
                            };

                            axios(config)
                                .then(function (response) {
                                    console.log(JSON.stringify(response.data));
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Data is added at the end',
                                        showConfirmButton: false,
                                        timer: 2000
                                    })
                                    setd({ task: "" });
                                    sets("");
                                })
                                .catch(function (error) {
                                    console.log(error);
                                    Swal.fire("Something went wrong");

                                });
                        }
                    }}>Submit</Button>
                </DialogActions>
            </Dialog>
            <Grid container spacing={1} style={{ padding: '4%', textAlign: 'left' }}>
                <Grid item md={4} xs={12} >
                    <h2 style={{ borderBottom: '3px red solid' }} >To Do</h2>
                    <DragAndDropList type="To Do" data={items} />
                </Grid>
                <Grid item md={4} xs={12}>
                    <h2 style={{ borderBottom: '3px green solid' }}>Doing</h2>
                    <DragAndDropList type="Doing" data={items} />
                </Grid>
                <Grid item md={4} xs={12}>
                    <h2 style={{ borderBottom: '3px blue solid' }}>Done</h2>
                    <DragAndDropList type="Done" data={items} />
                </Grid>
            </Grid>
        </center>

    )
}

export default Todo