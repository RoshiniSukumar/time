import React from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
 
import Box from '@mui/material/Box';
 
import IconButton from '@mui/material/IconButton';
// 

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useState,useEffect } from "react";
export default function Inp4() {
   const [value, setValue] = React.useState("");
  const [totaltextBox3, setTotalTextBox3] = React.useState([]);
  const [sample, setSample] = React.useState(Array(3).fill(""));
  var arrw3 = async () => {
    const arrayform3 = {
      arr: totaltextBox3
    };
    console.log(arrayform3);
    let reg = await axios.post(
      "http://localhost:2000/allied",
      arrayform3
    );
    console.log(reg.data.err)
  if(reg.data.err=null){
    window.open('http://localhost:3000/tt/create_docket2','_self')
  }
    
};
  const handleChange3 = async (e2, i2) => {
    const textData3 = [...totaltextBox3];
    textData3[i2] = e2.target.value;
    setTotalTextBox3(textData3);
   
 
  };
  let removeFormFields = (i) => {
    let newFormValues = [...totaltextBox3];
    newFormValues.splice(i, 1);
    setTotalTextBox3(newFormValues)
}
  
console.log(totaltextBox3)
  const addField3 = async () => {
    const textData3 = [...totaltextBox3];
    textData3.push("");
    setTotalTextBox3(textData3);
    const arrayform3 = {
      arr: totaltextBox3
    };
    console.log(arrayform3);
    let reg = await axios.post(
      "http://localhost:2000/allied",
      arrayform3
    );
    console.log(reg.data.err)
   
  };
  
  useEffect(() => {
 
addField3()
}, []);
  console.log(sample);
  


  return (
    <div className="App">
  
      {totaltextBox3.map((item, index) => ( 
        <div>
          <Box>
        <TextField  
        id="outlined-required"
        label="Name of Allied-paper" 
       value={item} onChange={(e) => handleChange3(e, index)} sx={{mt:5}}   />  {index ? 
        <IconButton type="button"  className="button remove" onClick={() => removeFormFields(index)}
         style={{ position:'relative',left:'105px',  bottom:'50px' ,border:"none", color:'black',borderRadius:'50px' ,padding:'1px',fontSize:'25px',fontWeight:'bold' }}
        ><HighlightOffIcon/></IconButton> 
      : null}
      </Box>
       </div>
      ))
      }
      
      <Box sx={{pt:4.5}}>
      <IconButton onClick={addField3}  style={{ position:'relative', right:'0px', top:'0px', background: '#1e88e5' ,border:"none", color:'white',borderRadius:'5px' ,padding:'10px 15px',fontSize:'25px',fontWeight:'bold' }}><AddBoxIcon/></IconButton>
       
      </Box>
    </div>
  );
      }