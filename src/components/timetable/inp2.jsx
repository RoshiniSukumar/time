import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState,useEffect } from "react";
export default function Inp2() {
  const [value, setValue] = React.useState("");
  const [totaltextBox1, setTotalTextBox1] = React.useState([]);
  const [sample, setSample] = React.useState(Array(3).fill(""));
 
  const handleChange1 = (e2, i2) => {
    const textData1 = [...totaltextBox1];
    textData1[i2] = e2.target.value;
    setTotalTextBox1(textData1);
  };
  
console.log(totaltextBox1)
  const addField1 = () => {
    const textData1 = [...totaltextBox1];
    textData1.push("");
    setTotalTextBox1(textData1);
   
  };
  

  console.log(sample);
  
  useEffect(() => {
    //check local token or something
addField1()
}, []);

  return (
    <div className="App">
    {/* <Box sx={{pt: 5}}>
    <Grid container spacing={3} SX={{bgcolor: 'primary.main',pt:5}}>
    <Grid item  xs={12} md={6} lg={3}  > */}
      {totaltextBox1.map((item, index) => ( 
        <TextField  
        id="outlined-required"
        label="Name of the staff" 
       value={item} onChange={(e) => handleChange1(e, index)} sx={{mt:5}}   />  
      ))}
      {/* </Grid>
      </Grid>
      </Box> */}
      <Box sx={{pt:5}}>
      <button  onClick={addField1}   style={{ position:'relative', right:'0px', top:'0px', background: '#1e88e5' ,border:"none", color:'white',borderRadius:'5px' ,padding:'10px 15px',fontSize:'25px',fontWeight:'bold' }}>ADD</button>
     </Box>
    </div>
  );
      }