import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Grid,
    InputAdornment,
    Tooltip,
    IconButton,
    FormControl,
    Select,
    InputLabel,
    MenuItem,
    FormHelperText,
    Box,
} from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const PasswordChange = () => {
    const { mail } = useParams();
    const history = useNavigate();
    const [values, setValues] = useState({
        "password": "",
        "code": "",
    });
    const inputChangeHandler = (e) => {
        setValues((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }
    const [passwordShow, setpassword] = React.useState(false);
    return (
        <center>
            <div style={{width:'40%',padding:'10%'}}>
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="New Password"
                    type={passwordShow ? "text" : "password"}
                    value={values.password}
                    onChange={inputChangeHandler}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onMouseDown={(e) => e.preventDefault()}
                                    edge="end"
                                    onClick={() => {
                                        setpassword(!passwordShow);
                                    }}
                                >
                                    {passwordShow ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }} />
                    <br/>
                    <br/>
                <TextField
                    fullWidth
                    id="code"
                    name="code"
                    label="Enter OTP"
                    value={values.code}
                    onChange={inputChangeHandler}></TextField>
                <Button color='success' variant='contained' style={{padding:'3%',margin:'4%'}} onClick={() => {
                    var data = JSON.stringify({
                        "email": mail,
                        "otp": values.code,
                        "password": values.password
                    });
                    if (!mail || !values.code || !values.password)
                        toast("Incomplete Creds");
                    else {
                        var config = {
                            method: 'post',
                            url: 'http://localhost:3500/forgotpw/otpv',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            data: data
                        };

                        axios(config)
                            .then(function (response) {
                                console.log(JSON.stringify(response.data));
                                toast("Password changed ! Login again")
                                history("/login");
                            })
                            .catch(function (error) {
                                console.log(error);
                                toast("Error")
                            });
                    }
                }}>Submit</Button>
                <ToastContainer />
            </div>
        </center >
    )
}

export default PasswordChange