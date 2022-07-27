import { Box, Card, Paper } from '@mui/material'
import React from 'react'
import { useEffect } from "react";
import { Grid } from '@mui/material';
import Line from "./Line"
import LightChart from "./Charts"
import "../graph.css"
// import NumberOfEx from "./NumberOfEx"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PendingIcon from '@mui/icons-material/Pending';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CircularProgress from '@mui/material/CircularProgress';

import Pie from "./Pie"
import Divider from '@mui/material/Divider';

const LightVisualize = () => {
    const onTop = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        onTop();
    }, []);
    return (
        <Grid container>
            <Grid item xs={8} >
                <h2 style={{ padding: '2%', textAlign: "center" }}>Sales activity</h2>
                <center>
                    <Grid container spacing={3} style={{ padding: '2%' }} >

                        <Grid item xs={3}>
                            <Paper elevation={1} className="Sales">
                                <p className='salesValue'>6530</p>
                                <p className='salesQuantity'>Qty</p>
                                <p className='salesStatus'><CheckCircleOutlineIcon style={{ transform: 'translateY(5px) ', fontSize: '1.2rem' }}></CheckCircleOutlineIcon> To Be Packed</p>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper elevation={1} className="Sales">
                                <p style={{ color: '#A9FF96' }} className='salesValue'>45</p>
                                <p className='salesQuantity'>Pkgs</p>
                                <p className='salesStatus'><LocalShippingIcon style={{ transform: 'translateY(5px) ', fontSize: '1.2rem' }}></LocalShippingIcon> To Be Shipped</p>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper elevation={1} className="Sales">
                                <p style={{ color: '#F7A35C' }} className='salesValue'>300</p>
                                <p className='salesQuantity'>Pkgs</p>
                                <p className='salesStatus'><PendingIcon style={{ transform: 'translateY(5px) ', fontSize: '1.2rem' }}></PendingIcon> To Be Delivered</p>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper elevation={1} className="Sales">
                                <p style={{ color: '#999EFF' }} className='salesValue'>14530</p>
                                <p className='salesQuantity'>Qty</p>
                                <p className='salesStatus'><ReceiptIcon style={{ transform: 'translateY(5px) ', fontSize: '1.2rem' }}></ReceiptIcon> To Be Invoiced</p>
                            </Paper>
                        </Grid>

                    </Grid>
                </center>
            </Grid>
            <Grid item xs={4} >
                <h2 style={{ padding: '2%', textAlign: "center" }}>Summary</h2>
                <br />
                <div style={{ fontWeight: '500', fontSize: '1.1rem' }}>

                    <Card style={{ padding: '2%', margin: '10px' }} >
                        <p>QUANTITY IN HAND
                            <Divider />
                            <span style={{ float: "right" }}>1264</span> </p>
                    </Card>
                    <Card style={{ padding: '2%', margin: '10px' }} >

                        <p>QUANTITY TO BE RECEIVED
                            <Divider />
                            <span style={{ float: "right" }}>13464</span></p>
                    </Card>
                </div>
            </Grid>
            <Grid item xs={8} >
                <br /><br /><br />
                <Line />
            </Grid>
            <Grid item xs={4}>
                <br /><br /><br />
                <p style={{ fontSize: '1.08rem' }}>PRODUCT DETAILS</p>
                <Divider></Divider>
                <Grid container>
                    <Grid item xs={12}>
                        <p style={{ color: 'orangered' }}>Low Stock Items
                            <span style={{ float: "right", color: 'orangered' }}>13</span></p>
                        <p>All Item Groups
                            <span style={{ float: "right" }}>23</span></p>
                        <p>All Items
                            <span style={{ float: "right" }}>340</span></p>

                    </Grid>
                    <Grid item xs={12}>
                        <Pie />
                    </Grid>
                </Grid>
            </Grid >
            <Grid item xs={12}>
                <br /><br /><br />

                <LightChart />

            </Grid>
        </Grid >
    )
}

export default LightVisualize