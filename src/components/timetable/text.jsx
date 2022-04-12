import React from 'react';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button'
// import {v4 as uuidv4} from 'uuid'
import SeasonScore from './SeasonScore';
// import Inp2 from './Inp2';

export default function Text() {
  // const [dyn,setdyn] = useState([{id:uuidv4(),name:''},]);
  var i = 0;
  const [num, setnum] = useState(0);
  var dynamic = ()=>{
    for(i=0;i<=num;i++){
<TextField
          required
          id="outlined-required"
          label="Number of class"
          defaultValue="inputs"
          // onChange={(e) => setnum(e.target.value)}
        />
      
    }
  }
  // const handleAddFields = () => {
  //   setdyn([...dyn, { id: uuidv4(),  name: '' }])
  // }

  return (
    < Box sx={{ display: 'flex'}}>
      <Grid container spacing={3} SX={{bgcolor: 'primary.main'}}>
      <Grid item  xs={12} md={6} lg={3}>
<TextField
          required
          id="outlined-required"
          label="Number of class"
          // defaultValue="inputs"
          onChange={(e) => setnum(e.target.value)}
          
        />
       
    
      {/* {totaltextBox.map((item, index) => ( */}
        {/* <input value={item} onChange={(e) => handleChange(e, index)} /> */}
      {/* ))} */}
      {/* <button onClick={addField}>addTextBox</button> */}
      {/* <IconButton */}
              {/* // onClick={handleAddFields} */}
            {/* > */}
              {/* <AddIcon /> */}
            {/* </IconButton> */}
      
        </Grid>
        <Grid item  xs={12} md={6} lg={3}>
        <TextField
          required
          id="outlined-required"
          label="Number of staff"
        /></Grid>
        <Grid item  xs={12} md={6} lg={3}>
        <TextField
          required
          id="outlined-required"
          label="Number of core-papers"
        /></Grid>
        <Grid item  xs={12} md={6} lg={3}>
        <TextField
          required
          id="outlined-required"
          label="Number of Allied-paper"
        /></Grid>
        </Grid>
        </Box>
  )
}
