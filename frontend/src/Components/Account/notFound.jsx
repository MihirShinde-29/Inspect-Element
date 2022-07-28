import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import img from "../../Images/breaking-bad-theme-xt3.jpg"
const NotFound = () => {
  return (
    <div style={{backgroundColor:'#F1B217',height:'100vh'}}>
      <div >
        <img
          width="500"
          src={img}
          alt="space"
        ></img>
        <h1 style={{fontWeight:800}}>Oh no 404!</h1>
        <br/>
        {/* <h4 style={{color:'rgb(0,0,0,0.8)'}}>We're usually a treasure chest of knowledge, but we couldn't find what you're looking for. </h4> */}
        <br/>
        <Link style={{textDecoration:'none'}} to='/'><Button size="large" variant="contained" color="error">Try Again!</Button></Link>

      </div>
    </div>
  );
};

export default NotFound;