import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import staff from "./../../assets/WhatsApp Image 2022-03-05 at 8.59.38 PM.jpeg";
import student from "./../../assets/WhatsApp Image 2022-03-07 at 7.57.41 PM.jpeg";
import core from "./../../assets/WhatsApp Image 2022-03-07 at 8.00.36 PM.jpeg";
import allied from "./../../assets/WhatsApp Image 2022-03-07 at 8.04.14 PM.jpeg";

export default function Cards() {
  return (
    <Grid container spacing={3} SX={{bgcolor: 'primary.main'}}>
      <Grid item  xs={12} md={6} lg={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="staff"
        height="270"
        image={staff}
      />
       <CardContent>
        <Typography gutterBottom variant="h5" component="div" align='center'>
          Staff
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item  xs={12} md={6} lg={3} >
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="student"
        height="270"
        image={student}
      />
       <CardContent>
        <Typography gutterBottom variant="h5" component="div" align='center'>
        Class
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item  xs={12} md={6} lg={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="core"
        height="270"
        image={core}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align='center'>
        Core
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item xs={12} md={6} lg={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="allied"
        height="270"
        image={allied}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align='center'>
          Allied
        </Typography>
      </CardContent>
      
    </Card>
     </Grid>
    
    </Grid>
  );
}
