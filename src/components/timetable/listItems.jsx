import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Apps';
import ShoppingCartIcon from '@mui/icons-material/TableView';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
 import Cookies from 'universal-cookie';
import HomeIcon from '@mui/icons-material/Home';
 import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {Link} from "react-router-dom"
const cookies = new Cookies();
var logouts = () => {
  cookies.set("login", "false");
  cookies.set("user", "User");
  window.open('http://localhost:3000/tt/','_self')
};

export const mainListItems = (
  <React.Fragment>
    {/* <ListItemButton component={Link} to='/'>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>*/}
    <ListItemButton component={Link} to='/admin'> 
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component={Link} to='/view_docket'>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="View" />
    </ListItemButton >
    <ListItemButton component={Link} to='/manage_account'>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Manage Accounts" color= 'info.main' />
    </ListItemButton>
    <ListItemButton component={Link} to='/docket_inp4'>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Create Docket" />
    </ListItemButton>
    <ListItemButton component={Link} onClick={logouts}>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);