import React from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
 
import Box from '@mui/material/Box';
 
import { useState,useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
 
import AddBoxIcon from '@mui/icons-material/AddBox';
export default function SeasonScore() {
  const [value, setValue] = React.useState("");
  const [totaltextBox, setTotalTextBox] = React.useState([]);
  const [sample, setSample] = React.useState(Array(3).fill(""));
  var arrw3 = async () => {
    const arrayform3 = {
      arr: totaltextBox
    };
    console.log(arrayform3);
    let reg = await axios.post(
      "http://localhost:2000/cls",
      arrayform3
    );
    console.log(reg.data.err)
  if(reg.data.err=null){
    window.open('http://localhost:3000/tt/create_docket2','_self')
  }
    
};
 
  const handleChange = (e2, i2) => {
    const textData = [...totaltextBox];
    textData[i2] = e2.target.value;
    setTotalTextBox(textData);
  }; 
  const handleSubmit = (e) => {
    e.preventDefault();
    window.open('http://localhost:3000/tt/create_docket2','_self')
     
  };

  let removeFormFields = (i) => {
    let newFormValues = [...totaltextBox];
    newFormValues.splice(i, 1);
    setTotalTextBox(newFormValues)
}
console.log(totaltextBox)
  const addField = () => {
    const textData = [...totaltextBox]
    textData.push("");
    setTotalTextBox(textData);
     
    const textData3 = [...totaltextBox];
    textData3.push("");
    setTotalTextBox(textData3);
    const arrayform3 = {
      arr: totaltextBox
    };
    console.log(arrayform3);
    let reg =  axios.post(
      "http://localhost:2000/cls",
      arrayform3
    );
  };
   useEffect(() => {
    
addField()
}, []);

  console.log(sample);
  


  return (
    <div className="App">
    
      {totaltextBox.map((item, index) => (
        <div> 
        <TextField  
        id="outlined-required"
        label="Name of the class" 
       value={item} onChange={(e) => handleChange(e, index)} sx={{mt:5}}   /> 
       {index ? 
        <IconButton type="button"  className="button remove" onClick={() => removeFormFields(index)}
         style={{ position:'relative',left:'105px',  bottom:'50px', border:"none", color:'black',borderRadius:'50px' ,padding:'1px',fontSize:'25px',fontWeight:'bold' }}
        ><HighlightOffIcon/></IconButton> 
      : null} 
       </div>
      ))}
       
      <Box sx={{pt:5}}>
      <IconButton onClick={addField}  style={{ position:'relative', right:'0px', top:'0px', background: '#1e88e5' ,border:"none", color:'white',borderRadius:'5px' ,padding:'10px 15px',fontSize:'25px',fontWeight:'bold' }}>
        <AddBoxIcon />
      </IconButton>
</Box>
<Box sx={{pt:5, pl:0}}>
<button
           
          variant="contained" 
          color="primary" 
          type="submit" 
           href="http://localhost:3000/tt/create_docket2"
          style={{ position:'relative', right:'0px', top:'0px', background: '#1e88e5' ,border:"none", color:'white',borderRadius:'5px' ,padding:'10px 50px',fontSize:'25px',fontWeight:'bold' }}
         
          onClick={handleSubmit}
          
        >Next</button></Box>
    </div>
  );
      }