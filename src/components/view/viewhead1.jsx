import  React,{useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Viewhead from './viewhead';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, Typography } from '@mui/material';
import Cookies from 'universal-cookie';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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



export default function Viewhead1() {
  const [tt, settt] = useState(null)
  const cookies = new Cookies();
var role =  cookies.get("role");
console.log(role,"role");
useEffect(async() => {
var tt =await axios.get("http://localhost:2000/timetabe")
console.log("tt",tt.data); 
settt(tt.data) 
}, [])
const [cls, setcls] = React.useState('1a');

const handleChange = (event) => {
  setcls(event.target.value);
};


if(tt === null)
{
  return <h1>loading....</h1>
}
 
// const rows = [
//   createData('I', 'ST', ' ','R', 'DS',' '),
//   createData('II','ST', 'DS', ' ', 'R',' '),
//   createData('III', 'ST', 'ST','ST', 'DS','ST'),
//   createData('IV','R','R','R', 'ML','R'),
//   createData('V','ML','ML', 'ML','ML','ML'),
//   createData('VI','ST', 'ST','ST', 'ST','ST'),
// ];

  let ro =["I","II","III","IV","V","VI"]
  let ii=1;let jj=1;
  let aa=[];
  let a=[];
  a.push(ro[0])
  // console.log("time",tt[cls].timetable.timetable.length);
  let ttt = tt.filter((val)=> val.timetable.class === cls)

 for(let i=0;i<36;i++)
 {
   if(a.length == 6)
   {
      aa.push(a)
      console.log("a",aa);
      a=[]
      a.push(ro[ii]);
      ii++ ;
   }
   else{
      a.push(ttt[0].timetable.timetable[jj].subject);
      jj++;
   }
 }
 const rows=aa.map((val)=> createData(val[0],val[1],val[2],val[3],val[4],val[5]))
 console.log(aa,"aa");
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Class</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={cls}
          label="class"
          onChange={handleChange}
        >
          <MenuItem value="">
            {/* <em>None</em> */}
          </MenuItem>
          <MenuItem value={'1a'}>I Bsc CS - A</MenuItem>
          <MenuItem value={'1b'}>I Bsc CS - B</MenuItem>
          <MenuItem value={'2a'}>II Bsc CS - A</MenuItem>
          <MenuItem value={'2b'}>II Bsc CS - B</MenuItem>
          <MenuItem value={'3a'}>III Bsc CS - A</MenuItem>
          <MenuItem value={'3b'}>III Bsc CS - B</MenuItem>
        </Select>
        {/* <FormHelperText>With label + helper text</FormHelperText> */}
      </FormControl>
    
       
    <TableContainer align="center">
       <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
        Class- {cls}
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
    <Button variant="outlined" sx={{mt:4}} onClick={()=>{window.open("http://localhost:3000/tt/staff_viewuser","_self")}}>Staff Docket</Button>
    </div>
  );
}
