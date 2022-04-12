import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState,useEffect } from "react";
export default function Inp3() {
  const [value, setValue] = React.useState("");
  const [totaltextBox2, setTotalTextBox2] = React.useState([]);
  const [sample, setSample] = React.useState(Array(3).fill(""));
 
  const handleChange2 = (e2, i2) => {
    const textData2 = [...totaltextBox2];
    textData2[i2] = e2.target.value;
    setTotalTextBox2(textData2);
  };
  
console.log(totaltextBox2)
  const addField2 = () => {
    const textData2 = [...totaltextBox2];
    textData2.push("");
    setTotalTextBox2(textData2);
   
  };
  
  useEffect(() => {
    //check local token or something
addField2()
}, []);
  console.log(sample);
  


  return (
    <div className="App">
    {/* <Box sx={{pt: 5}}>
    <Grid container spacing={3} SX={{bgcolor: 'primary.main',pt:5}}>
    <Grid item  xs={12} md={6} lg={3}  > */}
      {totaltextBox2.map((item, index) => ( 
        <TextField  
        id="outlined-required"
        label="Name of the core-paper" 
       value={item} onChange={(e) => handleChange2(e, index)} sx={{mt:5}}   />  
      ))}
      {/* </Grid>
      </Grid>
      </Box> */}
       <Box sx={{pt:5}}>
      <button onClick={addField2}  style={{ position:'relative', right:'0px', top:'0px', background: '#1e88e5' ,border:"none", color:'white',borderRadius:'5px' ,padding:'10px 15px',fontSize:'25px',fontWeight:'bold' }}>ADD</button>
      </Box>
    </div>
  );
      }