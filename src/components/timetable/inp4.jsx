import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState,useEffect } from "react";
export default function Inp4() {
  const [value, setValue] = React.useState("");
  const [totaltextBox3, setTotalTextBox3] = React.useState([]);
  const [sample, setSample] = React.useState(Array(3).fill(""));
 
  const handleChange3 = (e2, i2) => {
    const textData3 = [...totaltextBox3];
    textData3[i2] = e2.target.value;
    setTotalTextBox3(textData3);
  };
  
console.log(totaltextBox3)
  const addField3 = () => {
    const textData3 = [...totaltextBox3];
    textData3.push("");
    setTotalTextBox3(textData3);
   
  };
  
  useEffect(() => {
    //check local token or something
addField3()
}, []);
  console.log(sample);
  


  return (
    <div className="App">
    {/* <Box sx={{pt: 5}}>
    <Grid container spacing={3} SX={{bgcolor: 'primary.main',pt:5}}>
    <Grid item  xs={12} md={6} lg={3}  > */}
      {totaltextBox3.map((item, index) => ( 
        <TextField  
        id="outlined-required"
        label="Name of the Allied-paper" 
       value={item} onChange={(e) => handleChange3(e, index)} sx={{mt:5}}   />  
      ))}
      {/* </Grid>
      </Grid>
      </Box> */}
      <Box sx={{pt:5}}>
      <button onClick={addField3}  style={{ position:'relative', right:'0px', top:'0px', background: '#1e88e5' ,border:"none", color:'white',borderRadius:'5px' ,padding:'10px 15px',fontSize:'25px',fontWeight:'bold' }}>ADD</button>
      </Box>
    </div>
  );
      }