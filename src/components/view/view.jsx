import  React,{useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import axios from 'axios';
import {getFixClass,classs} from "./servies"

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

function createData(name, calories, fat, carbs, protein,j) {
  return { name, calories, fat, carbs, protein,j };
}

const rows = [
  createData('I', 'ST', ' ','R', 'DS',' '),
  createData('II','ST', 'DS', ' ', 'R',' '),
  createData('III', 'ST', 'ST','ST', 'DS','ST'),
  createData('IV','R','R','R', 'ML','R'),
  createData('V','ML','ML', 'ML','ML','ML'),
  createData('VI','ST', 'ST','ST', 'ST','ST'),
];

export default function View() {
useEffect(() => {
  const fetchdata = async()=>{
    var teacher =await axios.get("http://localhost:2000/teacher");
    var fixclass = await axios.get("http://localhost:2000/fixclass");
    var clas = await axios.get("http://localhost:2000/class");
    var classArr = ["1a","1b","2a","2b","3a","3b"]
    classArr.map((va)=>{
      getFixClass(fixclass.data,teacher.data,va)
      classs(clas.data,teacher.data,va)
    })
}
fetchdata();
 }, [])
 
  return (
    <TableContainer align="center">
       <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
        Class- III BSc CS A
        </Typography>
      <Table sx={{ maxWidth: 900 , minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Day Order/Hour</StyledTableCell>
            <StyledTableCell align="center">I</StyledTableCell>
            <StyledTableCell align="center">II</StyledTableCell>
            <StyledTableCell align="center">III</StyledTableCell>
            <StyledTableCell align="center">IV</StyledTableCell>
            <StyledTableCell align="center">V</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" align="center" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
              <StyledTableCell align="center">{row.j}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
