import * as React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import {
    Grid,
    TextField,
    InputAdornment,
    Tooltip,
    IconButton,
    FormControl,
    Select,
    InputLabel,
    MenuItem,
    FormHelperText,
} from "@mui/material";
import axios from "axios";
import EmailIcon from "@mui/icons-material/Email";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { motion } from "framer-motion";

import Card from '@mui/material/Card'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Swal from "sweetalert2";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { useFormik } from 'formik';
import { styled, useTheme } from '@mui/material/styles';
import * as yup from 'yup';
import { Link } from "react-router-dom";
import { FormatAlignLeftSharp } from "@mui/icons-material";

const validationSchema = yup.object({
    username: yup
        .string('Enter your username')
        .required('username is required'),
    password: yup
        .string('Enter your password')
        .min(5, 'Password is too short')
        .required('Password is required'),

});

const theme = createTheme();

const Login = () => {
    const onTop = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        onTop();
    }, []);
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });
    const [passwordShow, setpassword] = React.useState(false);
    const [username, setUsername] = React.useState("");

    const history = useNavigate();

    return (
        <div style={{ padding: '4%' }}>
            <Card>
                <Grid container spacing={3}>
                    <Grid item xs={false}
                        sm={4}
                        md={6}
                        sx={{
                            backgroundImage:
                                "url(https://i.pinimg.com/564x/32/b0/46/32b046eb35b34633ef1a6421af843cf9.jpg)",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                        }}>
                        {/* <img src='https://i.pinimg.com/564x/32/b0/46/32b046eb35b34633ef1a6421af843cf9.jpg' alt="signup" style={{ width: "90%" }} /> */}
                    </Grid>
                    <Grid item md={6}>
                        <Grid container>
                            <Grid item xs={12} style={{ padding: "5vh", height: "87vh" }}>
                                <form onSubmit={formik.handleSubmit} autoComplete="off" style={{ width: "100%" }}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sx={{ textAlign: "left", fontSize: "1.6rem", fontWeight: "750" }}>
                                            Login
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12}>

                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <TextField
                                                fullWidth
                                                id="username"
                                                name="username"
                                                label="Username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                error={formik.touched.username && Boolean(formik.errors.username)}
                                                helperText={formik.touched.username && formik.errors.username}
                                                InputLabelProps={{ style: { fontSize: 20 } }}
                                                InputProps={{
                                                    style: { fontSize: 25 }
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <Grid item xs={12} sm={12} md={12}>
                                                <TextField
                                                    fullWidth
                                                    id="password"
                                                    name="password"
                                                    label="Password"
                                                    type={passwordShow ? "text" : "password"}
                                                    value={formik.values.password}
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                                    helperText={formik.touched.password && formik.errors.password}
                                                    InputLabelProps={{ style: { fontSize: 20 } }}

                                                    InputProps={{
                                                        style: { fontSize: 25 },
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
                                            </Grid>

                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                size="large"
                                                sx={{
                                                    backgroundColor: 'black'
                                                }}
                                                component={motion.div}
                                                whileHover={{
                                                    scale: 1.08,
                                                    textShadow: "0 0 8px rgb(255,255,255)",
                                                    transition: { duration: 0.3 },
                                                }}
                                                onClick={(values) => {
                                                    history("/home");
                                                    if (username === "Jesse" || "Walter") {
                                                        // role -> can update inventory
                                                        localStorage.setItem("role", "1");
                                                    }
                                                    else {
                                                        localStorage.setItem("role", "0");

                                                    }
                                                    var axios = require('axios');
                                                    var data = JSON.stringify({
                                                        "username": values.username,
                                                        "password": values.password,
                                                    });

                                                    console.log(data);

                                                    var config = {
                                                        method: 'post',
                                                        url: 'https://inspectbackend.herokuapp.com/login',
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        },
                                                        data: data
                                                    };
                                                    axios(config)
                                                        .then(function (response) {
                                                            console.log(JSON.stringify(response.data));
                                                        })
                                                        .catch(function (error) {
                                                            console.log(error);
                                                        });
                                                }}
                                            >
                                                Submit
                                            </Button>

                                        </Grid>
                                        <Grid item xs={12} sx={{ fontSize: "1.2rem", fontWeight: "550" }}>

                                            <Link to='/' style={{ textDecoration: "none", color: "black" }}> Don't have an account ? Sign Up</Link>
                                        </Grid>
                                        <Grid item xs={12} sx={{ fontSize: "1rem", fontWeight: "500" }}>
                                            <Button
                                                color="error"
                                                variant="outlined"
                                                fullWidth

                                                style={{ marginBottom: "3vh" }}
                                                onClick={() => {
                                                    console.log("hiii")
                                                    Swal.fire({
                                                        title: "Input your email ",
                                                        input: "text",
                                                        inputLabel: "Email",
                                                        inputValidator: async (num) => {
                                                            console.log(num);
                                                            if (!num) {
                                                                return "You need to write something!";
                                                            } else if (num) {
                                                                var FormData = require("form-data");
                                                                var mail = new FormData();
                                                                mail.append("email", num);
                                                                var config2 = {
                                                                    method: "post",
                                                                    data: mail,
                                                                };
                                                                axios(config2)
                                                                    .then(function (response) {
                                                                        console.log(JSON.stringify(response.data));
                                                                        Swal.fire({
                                                                            title: "We have sent a link to your mail",
                                                                            icon: "success",
                                                                        });
                                                                        <Link to="/dashboard" />
                                                                    })
                                                                    .catch((e) => {
                                                                        Swal.fire({
                                                                            title: "invalid",
                                                                            icon: "error",
                                                                        });
                                                                    });
                                                            }
                                                        },
                                                    });
                                                }}
                                                component={motion.div}
                                                whileHover={{
                                                    scale: 1.08,
                                                    textShadow: "0 0 8px rgb(255,255,255)",
                                                    transition: { duration: 0.3 },
                                                }}
                                            >
                                                <Link
                                                    to="#"
                                                    style={{
                                                        textDecoration: "none",
                                                        fontSize: ".8rem",
                                                        color: 'red'
                                                    }}
                                                >
                                                    Forgot Password ?
                                                </Link>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card >

        </div >
    )
}



export default Login;
