import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import staff from "./../../assets/WhatsApp Image 2022-03-05 at 8.59.38 PM.jpeg"

export default function Cards() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="staff"
        height="270"
        image={staff}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Staff
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item xs={12} md={8} lg={9}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="staff"
        height="270"
        image={staff}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Staff
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    
    </Grid>
  );
}
