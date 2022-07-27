import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import axios from "axios";

const array = [
    "Shipped",
    "Ordered",
    "Required"
]
const typeA = [
    "Chemical",
    "Other",
    "Equipment",
]

function createData(name, quantity, price) {
    return {
        name,
        quantity,
        type: typeA[Math.floor(Math.random() * typeA.length)],
        price,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
        status: array[Math.floor(Math.random() * array.length)]

    };
}





function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead >
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(historyRow.amount * row.price * 100) / 100}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};

export default function TablePending(r) {
    console.log(r.ckecked);
    const rows = JSON.parse(localStorage.getItem("Data"));
    return (
        <TableContainer sx={{ maxHeight: 540 }} component={Paper}>
            <Table stickyHeader aria-label="collapsible table">
                <TableHead >
                    <TableRow >
                        <TableCell style={{ backgroundColor: '#0275d8' }} />
                        <TableCell align='center' style={{ backgroundColor: '#0275d8', fontSize: '1.2rem', fontWeight: '600' }}>Item</TableCell>
                        <TableCell align="right" style={{ backgroundColor: '#0275d8', fontSize: '1.2rem', fontWeight: '600' }}>Quantity</TableCell>
                        <TableCell align="right" style={{ backgroundColor: '#0275d8', fontSize: '1.2rem', fontWeight: '600' }}>Type</TableCell>
                        <TableCell align="right" style={{ backgroundColor: '#0275d8', fontSize: '1.2rem', fontWeight: '600' }}>Price</TableCell>
                        <TableCell align="right" style={{ backgroundColor: '#0275d8', fontSize: '1.2rem', fontWeight: '600' }}>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        row.status === r.ckecked?
                        <Row key={row.name} row={row} />
                        :
                        null
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
