import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState,useEffect } from "react";
export default function SeasonScore() {
  const [value, setValue] = React.useState("");
  const [totaltextBox, setTotalTextBox] = React.useState([]);
  const [sample, setSample] = React.useState(Array(3).fill(""));
 
  const handleChange = (e2, i2) => {
    const textData = [...totaltextBox];
    textData[i2] = e2.target.value;
    setTotalTextBox(textData);
  }; 
  const handleSubmit = (e) => {
    e.preventDefault();
    window.open('http://localhost:3000/tt/create_docket2','_self')
    // console.log("InputFields", inputFiel);
  };

  
console.log(totaltextBox)
  const addField = () => {
    const textData = [...totaltextBox]
    textData.push("");
    setTotalTextBox(textData);
    
    // to?\4="/create_docket2"
   
  };
   useEffect(() => {
    //check local token or something
addField()
}, []);

  console.log(sample);
  


  return (
    <div className="App">
    {/* <Box sx={{pt: 5}}> */}
    {/* <Grid container spacing={3} SX={{bgcolor: 'primary.main',pt:5}}>
    <Grid item  xs={12} md={6} lg={3}  > */}
      {totaltextBox.map((item, index) => ( 
        <TextField  
        id="outlined-required"
        label="Name of the class" 
       value={item} onChange={(e) => handleChange(e, index)} sx={{mt:5}}   />  
      ))}
      {/* </Grid>
      </Grid> */}
      {/* </Box> */}
      <Box sx={{pt:5}}>
      <button onClick={addField}  style={{ position:'relative', right:'0px', top:'0px', background: '#1e88e5' ,border:"none", color:'white',borderRadius:'5px' ,padding:'10px 15px',fontSize:'25px',fontWeight:'bold' }}>ADD</button>
</Box>
<Box sx={{pt:5, pl:0}}>
<button
          // className={classes.button}
          variant="contained" 
          color="primary" 
          type="submit" 
           href="http://localhost:3000/tt/create_docket2"
          style={{ position:'relative', right:'0px', top:'0px', background: '#1e88e5' ,border:"none", color:'white',borderRadius:'5px' ,padding:'10px 50px',fontSize:'25px',fontWeight:'bold' }}
          // endIcon={<Icon>send</Icon>}
          onClick={handleSubmit}
          
        >Next</button></Box>
    </div>
  );
      }