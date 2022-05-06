import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from "axios";
import { useState,useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddBoxIcon from '@mui/icons-material/AddBox';
export default function Inp3() {
  const [value, setValue] = React.useState("");
  const [totaltextBox2, setTotalTextBox2] = React.useState([]);
  const [sample, setSample] = React.useState(Array(3).fill(""));
 
  const handleChange2 = (e2, i2) => {
    const textData2 = [...totaltextBox2];
    textData2[i2] = e2.target.value;
    setTotalTextBox2(textData2);
  };
  let removeFormFields = (i) => {
    let newFormValues1 = [...totaltextBox2];
    newFormValues1.splice(i, 1);
    setTotalTextBox2(newFormValues1)
}
console.log(totaltextBox2)
  const addField2 = () => {
    const textData2 = [...totaltextBox2];
    textData2.push("");
    setTotalTextBox2(textData2);
   
    const arrayform5 = {
      arr: totaltextBox2
    };
    console.log(arrayform5);
    let reg1 =  axios.post(
      "http://localhost:2000/core",
      arrayform5
    );
    // console.log(reg1.data.err)
   
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
        <div> 
        <TextField  
        id="outlined-required"
        label="Name of core-paper" 
       value={item} onChange={(e) => handleChange2(e, index)} sx={{mt:5}}   />  
       {index ? 
        <IconButton type="button"  className="button remove" onClick={() => removeFormFields(index)}
         style={{ position:'relative',left:'105px',  bottom:'50px' ,border:"none", color:'black',borderRadius:'050px' ,padding:'1px',fontSize:'25px',fontWeight:'bold' }}
        ><HighlightOffIcon/>
        </IconButton> 
      : null}
       </div>
      ))}
      {/* </Grid>
      </Grid>
      </Box> */}
       <Box sx={{pt:5}}>
      <IconButton onClick={addField2}  style={{ position:'relative', right:'0px', top:'0px', background: '#1e88e5' ,border:"none", color:'white',borderRadius:'5px' ,padding:'10px 15px',fontSize:'25px',fontWeight:'bold' }}><AddBoxIcon/></IconButton>
      </Box>
    </div>
  );
      }