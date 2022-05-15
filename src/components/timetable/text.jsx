import React from 'react';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
 
 

export default function Text() {
  
  const [cls, setcls] = useState("")
  const [core_ppr, setcore_ppr] = useState("")
  const [all_ppr, setall_ppr] = useState("")
  const [staff, setstaff] = useState("")
  var i = 0;
  console.log(cls,core_ppr,all_ppr,staff)
  const [num, setnum] = useState(0);
  var dynamic = ()=>{
    for(i=0;i<=num;i++){
<TextField
          required
          id="outlined-required"
          label="Number of class"
          defaultValue="inputs"
           
        />
      
    }
  }
   

  return (
    < Box sx={{ display: 'flex'}}>
      <Grid container spacing={3} SX={{bgcolor: 'primary.main'}}>
      <Grid item  xs={12} md={6} lg={3}>
<TextField
          required
          id="outlined-required"
          label="Number of class"
           
          onChange={(e) => setcls(e.target.value)} 
        />
       
    
     
      
        </Grid>
        <Grid item  xs={12} md={6} lg={3}>
        <TextField
          required
          id="outlined-required"
          label="Number of staff"
          onChange={(e)=>setstaff(e.target.value)}
        /></Grid>
        <Grid item  xs={12} md={6} lg={3}>
        <TextField
          required
          id="outlined-required"
          label="Number of core-papers"
          onChange={(e)=>setcore_ppr(e.target.value)}
        /></Grid>
        <Grid item  xs={12} md={6} lg={3}>
        <TextField
          required
          id="outlined-required"
          label="Number of Allied-paper"
          onChange={(e)=>setall_ppr(e.target.value)}
        /></Grid>
        </Grid>
        </Box>
  )
}
