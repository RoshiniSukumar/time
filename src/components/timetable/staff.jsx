import React from "react";
import TextField from '@mui/material/TextField';
 
import Box from '@mui/material/Box';
 
import axios from "axios";
import IconButton from '@mui/material/IconButton';
 
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddBoxIcon from '@mui/icons-material/AddBox';
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
  let removeFormFields = (i) => {
    let newFormValues = [...totaltextBox4];
    newFormValues.splice(i, 1);
    setTotalTextBox4(newFormValues)
}
console.log(totaltextBox4)
  const addField4 = () => {
    const textData4 = [...totaltextBox4];
    textData4.push("");
    setTotalTextBox4(textData4);
   
   
      const arrayform3 = {
        arr: totaltextBox4
      };
      console.log(arrayform3);
      let reg = axios.post(
        "http://localhost:2000/fixed",
        arrayform3
      );
  };
  useEffect(() => {
   
addField4()
}, []);
  

  console.log(sample);
  


  return (
    <div className="App">
 
      {totaltextBox4.map((item, index) => ( 
        <div>
        <TextField  
        id="outlined-required"
        label="Enter the staff,subject and class(staff-subject-class)" 
       value={item} onChange={(e) => handleChange4(e, index)} sx={{mt:5, width:700}}   />
        {index ? 
        <IconButton type="button"  className="button remove" onClick={() => removeFormFields(index)}
         style={{ position:'relative',left:'-35px',  top:'60px' ,border:"none", color:'black',borderRadius:'50px' ,padding:'1px',fontSize:'25px',fontWeight:'bold' }}
        ><HighlightOffIcon/></IconButton> 
      : null}
       </div>  
      ))}
       
      <Box sx={{pt:5}}>
      <IconButton  onClick={addField4}   style={{ position:'relative', right:'0px', top:'0px', background: '#1e88e5' ,border:"none", color:'white',borderRadius:'5px' ,padding:'10px 15px',fontSize:'25px',fontWeight:'bold' }}><AddBoxIcon/></IconButton>
     </Box>
    </div>
  );
      }