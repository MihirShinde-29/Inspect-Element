import { Grid } from '@mui/material'
import React from 'react'
import Cardz from './Cardz'
import DailyStaples from './Minicards'
import PrimarySearchAppBar from "./NavBar"
const Dashboard = () => {
    return (
        <div style={{ backgroundColor: "black" }}>

            <div><PrimarySearchAppBar /></div>
            <center>
                <img style={{ width: "60%", height: "60vh" }} src='https://images.pexels.com/photos/2707010/pexels-photo-2707010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='hero' />
            </center>
            <DailyStaples />
            <h2 style={{ color: "white", "padding": "0 40px" }}>Trending Now !</h2>
            <Grid style={{ color: "white", "padding": "0 40px" }} container spacing={3}>
                <Grid item xs={12}  sm={3}>
                    <Cardz />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Cardz />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Cardz />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Cardz />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Cardz />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Cardz />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Cardz />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Cardz />
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard