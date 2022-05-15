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
import { Toolbar } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
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

function createData(name, faculty_id, dept, mob, del) {
  return { name, faculty_id, dept, mob, del };
}


const rows = [
  
  createData(1,'Dr. Revathi T', 1,'revathi@gmail.com',<IconButton color="inherit"><CancelIcon /></IconButton>),
  // createData(2,'Mrs. Mohanapriya D', 2, 'priya@gmail.com',<IconButton color="inherit"><CancelIcon /></IconButton>),
];


export default function Tables() {

  const [arrowget, setarrowget] = useState([]);
  useEffect(async () => {
    var getarray = await axios.get("http://localhost:2000/register");
    var filtere = getarray.data;
    console.log("filtere", filtere);
    // var filterf = filtere.filter((user) => user.cartusr === getcookie);
    // console.log("filter", filterf);
    setarrowget(filtere);
  }, []);
  
  // var get1 = arrowget.map((get) => (
    // <div className="getting" style={{backgroundColor:'blue'}}>
      {/* <tr className="cartr"> */}
         {/* <td className="cartd"> */}
          // {get.firstName}
          // {console.log(get.userName)}
          // {get.userName}
        {/* </td> */}
        {/* <div className="carline"></div> */}
      {/* </tr> */}
    // </div>
  // ));
  const [on, seton] = useState(true);
 
    return (
      // i = 0;
      // {var i = 1}
<TableContainer component={Paper}>
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
        {/* <StyledTableCell component="th" align="center" scope="row"> */}
                {/* {get1} */}
              {/* </StyledTableCell> */}
              {arrowget.map((row) => (
            <StyledTableRow >
              <StyledTableCell  >
                {row.firstname}
                {/* {console.log(row.username)} */}
              
              </StyledTableCell>
              
              <StyledTableCell align="center">{row.lastname}</StyledTableCell>
              <StyledTableCell align="center">{row._id.slice(4,6)}</StyledTableCell>
              <StyledTableCell align="center">{row.username}</StyledTableCell>
              <StyledTableCell align="center"><IconButton color="inherit"    onClick={() => {
                              if (on) {
                                axios.delete(
                                  `http://localhost:2000/register/:${row._id}`
                                );
                                console.log(row._id);
                                window.location.reload();
                                window.scroll(0, 0);
                                alert("Item Removed");
                              } else {
                                alert("OOPS!! Something went wrong");
                              }
                            }}
><CancelIcon /></IconButton></StyledTableCell>
              {/* <StyledTableCell align="center">{row.j}</StyledTableCell> */}
            </StyledTableRow>
          ))}              
        </TableBody>
      </Table>
    </TableContainer>
  );
}
