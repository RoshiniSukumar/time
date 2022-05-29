import { useEffect,useState,React} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import staff from "./../../assets/WhatsApp Image 2022-03-05 at 8.59.38 PM.jpeg";
import student from "./../../assets/WhatsApp Image 2022-03-07 at 7.57.41 PM.jpeg";
import core from "./../../assets/WhatsApp Image 2022-03-07 at 8.00.36 PM.jpeg";
import allied from "./../../assets/WhatsApp Image 2022-03-07 at 8.04.14 PM.jpeg";
import axios from "axios";
export default function Cards() {
const [teacher, setteacher] = useState([]);
const [fixclass, setfixclass] = useState([]);
const [clas, setclas] = useState([]);
const [cls, setcls] = useState([]);
const [cls_len, setcls_len] = useState(0)
// var cls_len;
const [ppr_len, setppr_len] = useState(0)
// var ppr_len;
const [pp_len, setpp_len] = useState(0)
// var pp_len;
// const [teach_len, setteach_len] = useState(0)
var teach_len;
  useEffect(async() => {
    // const fetchdata = async()=>{
    var teachers = await axios.get("http://localhost:2000/teacher");
    var dat =  teachers.data
    setteacher(dat)
    var fixclasse = await axios.get("http://localhost:2000/fixclass");
    var dat1 = fixclasse.data;
    setfixclass(dat1)
     var claes = await axios.get("http://localhost:2000/class");
     var dat2 = claes.data
     setclas(dat2)
    var cels = await axios.get("http://localhost:2000/cls");
    var dat3 = cels.data;
    setcls(dat3)
    //  cls_len = cls.length;
    //  ppr_len = clas.length;
    //  pp_len = fixclass.length;
    //  teach_len = teacher.length;
    // setcls_len(cls.length)
    // setpp_len(fixclass.length)
    // setppr_len(clas.length)
    // setteach_len(teacher.length)

    teach_len = teacher.length;
    console.log("len",teach_len);
    // }
    // fetchdata()
    // console.log("c",cls.length);
    // console.log("cls",cls);
  }, [])
var getch = teacher.map((get)=>{
  <Typography sx={{color:"skyblue"}}>i</Typography>
  // <h1>k</h1>
  console.log("from getch");
})
  // console.log(teacher.length,"teax");
  return (
    <Grid container spacing={3} SX={{bgcolor: 'primary.main'}}>
      <Grid item  xs={12} md={6} lg={3}>
    <Card sx={{ maxWidth: 395 }}>
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
        <Typography gutterBottom variant="h7" component="div" sx={{mt:3}}>
          No. of staffs: {teacher.length}
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item  xs={12} md={6} lg={3} >
    <Card sx={{ maxWidth: 395 }}>
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
        <Typography gutterBottom variant="h7" component="div" sx={{mt:3}}>
          No. of classes: {cls.length}
        </Typography>

      </CardContent>
    </Card>
    </Grid>
    <Grid item  xs={12} md={6} lg={3}>
    <Card sx={{ maxWidth: 395 }}>
      <CardMedia
        component="img"
        alt="core"
        height="270"
        image={core}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align='center' >
        Core
        </Typography >
        <Typography gutterBottom variant="h7" component="div" sx={{mt:3}}>
          No. of core-paper: {clas.length}
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item xs={12} md={6} lg={3}>
    <Card sx={{ maxWidth: 395 }}>
      <CardMedia
        component="img"
        alt="allied"
        height="270"
        image={allied}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align='center' >
          Allied
        </Typography>
        <Typography gutterBottom variant="h7" component="div" sx={{mt:3}}>
          No. of allied paper: {fixclass.length}
        </Typography>

      </CardContent>
      
    </Card>
     </Grid>
    
    </Grid>
  );
}
