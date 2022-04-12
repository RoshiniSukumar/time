import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState,useEffect } from "react";
export default function Staff() {
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
    setTotalTextBox4(textData4);
   
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
        <TextField  
        id="outlined-required"
        label="Enter the staff,subject and class(staff-subject-class)" 
       value={item} onChange={(e) => handleChange4(e, index)} sx={{mt:5, width:700}}   />  
      ))}
      {/* </Grid>
      </Grid>
      </Box> */}
      <Box sx={{pt:5}}>
      <button  onClick={addField4}   style={{ position:'relative', right:'0px', top:'0px', background: '#1e88e5' ,border:"none", color:'white',borderRadius:'5px' ,padding:'10px 15px',fontSize:'25px',fontWeight:'bold' }}>ADD</button>
     </Box>
    </div>
  );
      }