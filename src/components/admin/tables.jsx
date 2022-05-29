import {React,useState,useEffect} from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
 
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));







export default function Tables() {

  const [arrowget, setarrowget] = useState([]);
  useEffect(async () => {
    var getarray = await axios.get("http://localhost:2000/register");
    var filtere = getarray.data;
    console.log("filtere", filtere);
    
    setarrowget(filtere);
  }, []);
  
  
  const [on, seton] = useState(true);
 
    return (
    
<TableContainer component={Paper}>
<ToastContainer />
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Firstname</StyledTableCell>
            <StyledTableCell  align="center">Lastname</StyledTableCell>
            <StyledTableCell align="center">Faculty Id</StyledTableCell>
            <StyledTableCell align="center">Usename</StyledTableCell>
            <StyledTableCell align="center"            >Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

              {arrowget.map((row) => (
            <StyledTableRow >
              <StyledTableCell  >
                {row.firstname}
              
              </StyledTableCell>
              
              <StyledTableCell align="center">{row.lastname}</StyledTableCell>
              <StyledTableCell align="center">{row.role}</StyledTableCell>
              <StyledTableCell align="center">{row.username}</StyledTableCell>
              <StyledTableCell align="center"><IconButton color="inherit"    onClick={() => {
                              if (on) {
                                axios.delete(
                                  `http://localhost:2000/register/${row._id}`
                                );
                                console.log(row._id);
                                window.location.reload();
                                window.scroll(0, 0);
                                toast.success("Item Removed");
                              } else {
                                toast.error("OOPS!! Something went wrong");
                              }
                            }}
><CancelIcon /></IconButton></StyledTableCell>
            </StyledTableRow>
          ))}              
        </TableBody>
      </Table>
    </TableContainer>
  );
}
