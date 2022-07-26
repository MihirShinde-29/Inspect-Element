import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#233329",
        color: theme.palette.common.white,
        fontSize: 20,

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 18,
    },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <StyledTableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                    {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                <StyledTableCell align="right">{row.type}</StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
                <StyledTableCell align="right">{row.status}</StyledTableCell>
            </StyledTableRow>
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

export const TablePending = ({ type, checked, rows, setRows }) => {
    console.log(checked);
    return (
        <TableContainer sx={{ maxHeight: 540 }} component={Paper}>
            <Table stickyHeader aria-label="collapsible table">
                <TableHead >
                    <TableRow >
                        <StyledTableCell />
                        <StyledTableCell align='center'>Item</StyledTableCell>
                        <StyledTableCell align="right" >Quantity</StyledTableCell>
                        <StyledTableCell align="right" >Type</StyledTableCell>
                        <StyledTableCell align="right" >Price</StyledTableCell>
                        <StyledTableCell align="right" >Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        type != null ?
                            (row.type == type && row.status === checked?
                                <Row key={row.name} row={row} setRows={setRows} rows={rows} />
                                :
                                null)
                            :
                            (row.status === checked ?
                                <Row key={row.name} row={row} />
                                :
                                null)
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
