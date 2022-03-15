import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
export default function Creates() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        
        <InputLabel>Subject Name</InputLabel>
        <TextField id="outlined-search" label="Input" type="search" />
        {/* <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        /> */}
        
       
      </div>
      
    </Box>
  );
}
