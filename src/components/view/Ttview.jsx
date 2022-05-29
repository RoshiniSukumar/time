import  React,{useEffect, useState} from 'react';
import Ttviewusr from './ttviewusr';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { Button } from '@material-ui/core';
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



export default function Ttview() {
  const [tt, settt] = useState(null)
  const cookies = new Cookies();
  const [tt1, settt1] = useState([])

var usr =  cookies.get("user");
console.log(usr,"usr");
useEffect(async() => {
var tt1 =await axios.get("http://localhost:2000/cls")
console.log("tt1",tt1.data); 
settt1(tt1.data) 
var tt =await axios.get("http://localhost:2000/staff")
console.log("tt",tt.data); 
settt(tt.data)


}, [])
const [cls, setcls] = React.useState('hod');

var print = ()=>{
    var clse = tt1.filter((val)=>val.tutorName === usr)
console.log("teach",clse);
if(clse.length>0){
    console.log('====================================');
    console.log();
    console.log('====================================');
    // <Button variant="outlined" color="info" sx={{mt:4}} onClick={()=>{
      window.open("http://localhost:3000/tt/tutor_view","_self")
    // }}>Class Docket</Button>

}
else{
toast.error("oops! you are not a tutor")
}
}
const handleChange = (event) => {
  setcls(event.target.value);
};


if(tt === null)
{
  return <h1>loading....</h1>
}
 
// var disp = async ()=>{
// var tt1 =await axios.get("http://localhost:2000/cls")
// console.log("tt1",tt1.data); 
// settt1(tt1.data) 
// var clse = tt1.filter((val)=>val.tutorName === usr)
// console.log("teach",clse);
// if(clse.length>0){
//     <Button variant="outlined" color="info" sx={{mt:4}} onClick={()=>{window.open("http://localhost:3000/tt/tutor_view","_self")}}>Class Docket</Button>

// }
// }
let teacher = tt[0].timetable.map((val)=>val.name)
console.log('====================================');
console.log("teacher",teacher);
console.log('====================================');
    // const rows = [
    // createData('I', 'ST', ' ','R', 'DS',' '),
    // createData('II','ST', 'DS', ' ', 'R',' '),
    // createData('III', 'ST', 'ST','ST', 'DS','ST'),
    // createData('IV','R','R','R', 'ML','R'),
    // createData('V','ML','ML', 'ML','ML','ML'),
    // createData('VI','ST', 'ST','ST', 'ST','ST'),
    // ]; 
    // var disp = ()=>{
        
// let clse = tt1.filter((val)=>val.tutorName === usr)
// console.log("teach",clse);
        // if(clse){
            // console.log("ki");
            // window.open("http://localhost:3000/","_self")
            // <Ttviewusr/>
        // }
    // }
    let teac = tt[0].timetable.filter((val)=>val.name === usr)
    console.log("ji");
    console.log("teac",teac);
    let hr =teac[0].hrs_alot
    console.log("hr",hr);
    let timearr=[];
    let arr=[];let ii=0;
    let arrt=[]; let jj=0;
    for(let i=0;i<30;i++)
    {
      let a= hr.find((val)=>val.hrs === i+1+"")
      if(!a)
      {
          timearr.push("--")
          arr.push("--")
          if(arr.length%5===0)
          {
              arrt.push(arr)
              arr=[]
          }
      }
      else{
          timearr.push(a.className+"--"+a.subjectName)
          arr.push(a.className+"--"+a.subjectName)
          if(arr.length%5===0)
          {
              arrt.push(arr)
              arr=[]
          }
      }
    }
    console.log("timearr",timearr);
    let ro =["I","II","III","IV","V","VI"]
    const rows=arrt.map((val,index)=> createData(ro[index],val[0],val[1],val[2],val[3],val[4],val[5]))
   return (
    <div>
      
      <ToastContainer />
       
    <TableContainer align="center">
       <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
        Staff - {usr}
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
    <Button variant="outlined" color="info" sx={{mt:4}} onClick={()=>{print()}}>Class Docket</Button>
{/* {disp()} */}
    </div>
  );
}
