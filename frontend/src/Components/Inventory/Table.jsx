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
import { Button } from '@mui/material';
import Swal from 'sweetalert2';

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

function createData(id, name, quantity, price) {
  return {
    id,
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
        <TableCell align="right"><Button size='small' color='error' variant='contained' onClick={(e) => {
          var axios = require('axios');

          var config = {
            method: 'delete',
            url: `https://dummyjson.com/products/${row.id}`,
            headers: {}
          };

          axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Data is deleted',
                showConfirmButton: false,
                timer: 1500
              })
            })
            .catch(function (error) {
              console.log(error);
            });

        }}>Delete</Button></TableCell>
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

export default function CollapsibleTable() {
  const [d, setD] = React.useState([]);
  React.useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products);
        setD(res.data.products);
      })
      .catch((e) => {
        console.log(e);
      })
  }, [])

  const rows = [];
  console.log(d.length);
  if (d.length !== 0) {
    for (let i = 0; i < 20; i++) {
      rows.push(createData(d[i].id, d[i].title, d[i].stock, d[i].price));
    }
  }
  console.log(rows);
  localStorage.setItem("Data", JSON.stringify(rows));
  // res.data.products.map((e) => {
  //   // return setRows(prevSelected => [...prevSelected, createData(e.title, e.stock, e.price)])
  //  rows.push(createData(e.title, e.stock, e.price))
  // })
  return (
    <TableContainer sx={{ maxHeight: 540 }} component={Paper}>
      <Table stickyHeader aria-label="collapsible table">
        <TableHead >
          <TableRow >
            <TableCell style={{ backgroundColor: '#0275d8' }} ><Button color='success' variant='contained'>ADD</Button></TableCell>
            <TableCell align='center' style={{ backgroundColor: '#0275d8', fontSize: '1.2rem', fontWeight: '600' }}>Item</TableCell>
            <TableCell align="right" style={{ backgroundColor: '#0275d8', fontSize: '1.2rem', fontWeight: '600' }}>Quantity</TableCell>
            <TableCell align="right" style={{ backgroundColor: '#0275d8', fontSize: '1.2rem', fontWeight: '600' }}>Type</TableCell>
            <TableCell align="right" style={{ backgroundColor: '#0275d8', fontSize: '1.2rem', fontWeight: '600' }}>Price</TableCell>
            <TableCell align="right" style={{ backgroundColor: '#0275d8', fontSize: '1.2rem', fontWeight: '600' }}>Status</TableCell>
            <TableCell align="right" style={{ backgroundColor: '#0275d8', fontSize: '1.2rem', fontWeight: '600' }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {d.map((e) => {
            var h = createData(e.title, e.stock, e.price)
            return <TableRow>
              <TableCell>{e.id}</TableCell>
              <TableCell >{h.name}</TableCell>
              <TableCell align="right">{h.quantity}</TableCell>
              <TableCell align="right">{h.type}</TableCell>
              <TableCell align="right">{h.price}</TableCell>
              <TableCell align="right">{h.status}</TableCell>
            </TableRow>
          })} */}
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
