import React from "react";
import { Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiPlantFill } from "react-icons/ri";
import { MdOutlineEmojiNature } from "react-icons/md";
import { GiSlicedBread } from "react-icons/gi";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import "./home.css";

const DailyStaples = () => {
  return (
    <div className="DailyStap" >
      <Grid container spacing={2}>
        <Grid item md={2} sm={6} xs={6}>
          <Link to={`category/Daily essentials`} className="cat_link">
            <Paper
              whileHover={{ scale: 1.1 }}
              component={motion.div}
              elevation={3}
            >
              <center>
              <SportsEsportsIcon style={{fontSize:"7rem"}}/>
              </center>
              <p style={{textAlign:"center",alignItems:"center"}}> Games </p>
            </Paper>
          </Link>
        </Grid>
        <Grid item md={2} sm={6} xs={6}>
          <Link to={`category/Daily essentials`} className="cat_link">
            <Paper
              whileHover={{ scale: 1.1 }}
              component={motion.div}
              elevation={3}
            >
              <center>
              <SportsEsportsIcon style={{fontSize:"7rem"}}/>
              </center>
              <p style={{textAlign:"center",alignItems:"center"}}> Games </p>
            </Paper>
          </Link>
        </Grid>
        <Grid item md={2} sm={6} xs={6}>
          <Link to={`category/Daily essentials`} className="cat_link">
            <Paper
              whileHover={{ scale: 1.1 }}
              component={motion.div}
              elevation={3}
            >
              <center>
              <SportsEsportsIcon style={{fontSize:"7rem"}}/>
              </center>
              <p style={{textAlign:"center",alignItems:"center"}}> Games </p>
            </Paper>
          </Link>
        </Grid>
        <Grid item md={2} sm={6} xs={6}>
          <Link to={`category/Daily essentials`} className="cat_link">
            <Paper
              whileHover={{ scale: 1.1 }}
              component={motion.div}
              elevation={3}
            >
              <center>
              <SportsEsportsIcon style={{fontSize:"7rem"}}/>
              </center>
              <p style={{textAlign:"center",alignItems:"center"}}> Games </p>
            </Paper>
          </Link>
        </Grid>
        <Grid item md={2} sm={6} xs={6}>
          <Link to={`category/Daily essentials`} className="cat_link">
            <Paper
              whileHover={{ scale: 1.1 }}
              component={motion.div}
              elevation={3}
            >
              <center>
              <SportsEsportsIcon style={{fontSize:"7rem"}}/>
              </center>
              <p style={{textAlign:"center",alignItems:"center"}}> Games </p>
            </Paper>
          </Link>
        </Grid>
        <Grid item md={2} sm={6} xs={6}>
          <Link to={`category/Daily essentials`} className="cat_link">
            <Paper
              whileHover={{ scale: 1.1 }}
              component={motion.div}
              elevation={3}
            >
              <center>
              <SportsEsportsIcon style={{fontSize:"7rem"}}/>
              </center>
              <p style={{textAlign:"center",alignItems:"center"}}> Games </p>
            </Paper>
          </Link>
        </Grid>
      </Grid>

    </div>
  );
};

export default DailyStaples;
