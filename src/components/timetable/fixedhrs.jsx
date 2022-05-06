import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState,useEffect } from "react";
import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddBoxIcon from '@mui/icons-material/AddBox';
import axios from "axios";
export default function Fixedhrs() {
  const [value, setValue] = React.useState("");
  const [totaltextBox4, setTotalTextBox4] = React.useState([]);
  const [sample, setSample] = React.useState(Array(3).fill(""));
 
  const handleChange4 = (e2, i2) => {
    const textData4 = [...totaltextBox4];
    textData4[i2] = e2.target.value;
    setTotalTextBox4(textData4);
  };
  
console.log(totaltextBox4)
  const addField4 = () => {
    const textData4 = [...totaltextBox4];
    textData4.push("");
    console.log("total",totaltextBox4)
    setTotalTextBox4(textData4);
    const arrayform3 = {
      arr: totaltextBox4
    };
    console.log(arrayform3);
    let reg = axios.post(
      "http://localhost:2000/docket",
      arrayform3
    );
  };
  let removeFormFields = (i) => {
    let newFormValues = [...totaltextBox4];
    newFormValues.splice(i, 1);
    setTotalTextBox4(newFormValues)
}
  const handleSubmit = (e) => {
    e.preventDefault();
    window.open('http://localhost:3000/tt/','_self')
    // console.log("InputFields", inputFiel);
  };
  useEffect(() => {
    //check local token or something
addField4()
}, []);
  

  console.log(sample);
  


  return (
    <div className="App">
{/* {addField4} */}
    {/* <Box sx={{pt: 5}}>
    <Grid container spacing={3} SX={{bgcolor: 'primary.main',pt:5}}>
    <Grid item  xs={12} md={6} lg={3}  > */}
            {/* <TextField  
        id="outlined-required"
        label="Enter the staff,subject and class(staff-subject-class)" 
       value={item} onChange={(e) => handleChange4(e, index)} sx={{mt:5, width:700}}   /> */}
      {totaltextBox4.map((item, index) => ( 
        <div>
        <TextField  
        id="outlined-required"
        label="Enter the staff,subject,class and hour(staff-subject-class-hr) for fixed hour" 
       value={item} onChange={(e) => handleChange4(e, index)} sx={{mt:5, width:800}}   />  
       {index ? 
        <IconButton type="button"  className="button remove" onClick={() => removeFormFields(index)}
         style={{ position:'relative',left:'-35px',  top:'60px' ,border:"none", color:'black',borderRadius:'50px' ,padding:'1px',fontSize:'25px',fontWeight:'bold' }}
        >
          <HighlightOffIcon/>
          </IconButton> 
      : null}
      </div>
      ))}
      {/* </Grid>
      </Grid>
      </Box> */}
      <Box sx={{pt:5}}>
      <IconButton  onClick={addField4}   style={{ position:'relative', right:'0px', top:'0px', background: '#1e88e5' ,border:"none", color:'white',borderRadius:'5px' ,padding:'10px 15px',fontSize:'25px',fontWeight:'bold' }}><AddBoxIcon/></IconButton>
      
     </Box>
     <Box sx={{mt:5}}>
       <button
          // className={classes.button}
          variant="contained" 
          color="primary" 
          type="submit" 
           href="http://localhost:3000/tt/"
          style={{ position:'relative', right:'0px', top:'0px', background: '#1e88e5' ,border:"none", color:'white',borderRadius:'5px' ,padding:'10px 50px',fontSize:'25px',fontWeight:'bold' }}
          // endIcon={<Icon>send</Icon>}
          onClick={handleSubmit}
          
        >Submit</button>
        </Box>
    
    </div>
  );
      }