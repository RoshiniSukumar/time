import React from "react";
import TextField from '@mui/material/TextField';
 
import Box from '@mui/material/Box';
import axios from "axios";
 
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
 
import AddBoxIcon from '@mui/icons-material/AddBox';
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
  let removeFormFields = (i) => {
    let newFormValues1 = [...totaltextBox1];
    newFormValues1.splice(i, 1);
    setTotalTextBox1(newFormValues1)
}
console.log(totaltextBox1)
  const addField1 = () => {
    const textData1 = [...totaltextBox1];
    textData1.push("");
    setTotalTextBox1(textData1);

    const arrayform6 = {
      arr: totaltextBox1
    };
    console.log(arrayform6);
    let reg1 =  axios.post(
      "http://localhost:2000/staff",
      arrayform6
    );
   
  };
  

  console.log(sample);
  
  useEffect(() => {
     
addField1()
}, []);

  return (
    <div className="App">
 
      {totaltextBox1.map((item, index) => ( 
        <div>
        <TextField  
        id="outlined-required"
        label="Name of the staff" 
       value={item} onChange={(e) => handleChange1(e, index)} sx={{mt:5}}   /> {index ? 
        <IconButton type="button"  className="button remove" onClick={() => removeFormFields(index)}
         style={{ position:'relative',left:'105px',  bottom:'50px' ,border:"none", color:'black',borderRadius:'50px' ,padding:'1px ',fontSize:'10px',fontWeight:'bold' }}
        ><HighlightOffIcon/></IconButton> 
      : null}
      </div> 
      ))}
      
      <Box sx={{pt:3.5}}>
      <IconButton  onClick={addField1}   style={{ position:'relative', right:'0px', top:'10px', background: '#1e88e5' ,border:"none", color:'white',borderRadius:'5px' ,padding:'10px 15px',fontSize:'25px',fontWeight:'bold' }}>
        <AddBoxIcon/>
      </IconButton>
     </Box>
    </div>
  );
      }