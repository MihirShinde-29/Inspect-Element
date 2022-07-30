import { Draggable } from "react-beautiful-dnd";
import React, { useMemo } from "react";
import styled, { css } from "styled-components";
import { Button, Card } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import UpdateIcon from '@mui/icons-material/Update';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { MenuItem } from "@mui/material"
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DragItem = styled.div`
  padding: 10px;
  border-radius: 6px;
  ${'' /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */}
  ${'' /* background: white; */}
  margin: 0 0 8px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
`;




const ListItem = ({ item, provided, snapshot, type }) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const [s, sets] = React.useState("To Do");

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
    const handleChange = (event) => {
        sets(event.target.value);
    };
    return (

        <DragItem
            elevation={3}
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
        // style={{ padding: '3%',margin:'2%' }}
        >
            <Card style={{ padding: "10px" }}>
                <h2 style={{ textAlign: 'left' }}>{item.work}</h2>
                <CardFooter>
                    <span style={{ fontSize: '.7rem' }}>Date : {item.date}</span>
                    <span>
                        <Button component={motion.div}
                            whileHover={{
                                scale: 1.08,
                                textShadow: "0 0 8px rgb(255,255,255)",
                                transition: { duration: 0.3 },
                            }}
                            onClick={() => {
                                var axios = require('axios');
                                var data = JSON.stringify({
                                    "_id": item._id
                                });

                                var config = {
                                    method: 'delete',
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
                                            title: 'Data is deleted',
                                            showConfirmButton: false,
                                            timer: 2000
                                        })
                                    })
                                    .catch(function (error) {
                                        console.log(error);
                                        Swal.fire("Something went wrong");

                                    });

                            }} style={{ textAlign: 'left' }} color="error"><DeleteOutlineIcon></DeleteOutlineIcon></Button>
                        <Button component={motion.div}
                            whileHover={{
                                scale: 1.08,
                                textShadow: "0 0 8px rgb(255,255,255)",
                                transition: { duration: 0.3 },
                            }} onClick={(e) => {
                                handleClickOpen(e)
                                setd({ task: item.work });
                                sets(item.status);
                            }}
                            style={{ textAlign: 'left' }} color="info"><UpdateIcon /></Button>
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

                                    var axios = require('axios');
                                    var data = JSON.stringify({
                                        "work": d.task,
                                        "_id": item._id,
                                        "status": s,
                                    });


                                    var config = {
                                        method: 'put',
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
                                                title: 'Data updated',
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

                                }}>Submit</Button>
                            </DialogActions>
                        </Dialog>
                    </span>
                </CardFooter>
            </Card>
        </DragItem>

    );
};

export default ListItem;