import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import LogoutIcon from '@mui/icons-material/Logout';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ScienceIcon from '@mui/icons-material/Science';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Fab, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Paper elevation={0} style={{ display: 'inline' }} color="inherit" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Paper>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Link to='/home' style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem key='Inventory' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InventoryIcon />
                </ListItemIcon>
                <ListItemText primary='Inventory' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/home/Chemical" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem key='Chemicals' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ScienceIcon />
                </ListItemIcon>
                <ListItemText primary='Chemicals' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/home/Equipment" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem key='Equipments' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ScienceIcon />
                </ListItemIcon>
                <ListItemText primary='Equipments' />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to="/visualize" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem key='Graphs' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <QueryStatsIcon></QueryStatsIcon>
                </ListItemIcon>
                <ListItemText primary='Graphs' />
              </ListItemButton>
            </ListItem>
          </Link>

          <a target="_blank" href="https://bhumika-1-3.github.io/TODO_inspect/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem key='Pending' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ReceiptIcon></ReceiptIcon>
                </ListItemIcon>
                <ListItemText primary='Pending' />
              </ListItemButton>
            </ListItem>
          </a>

          <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem key='Logout' style={{ color: 'red' }} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon style={{ color: 'red' }}></LogoutIcon>
                </ListItemIcon>
                <ListItemText primary='Logout' />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
