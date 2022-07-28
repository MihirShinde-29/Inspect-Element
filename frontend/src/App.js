import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Button } from '@mui/material';
import Signup from './Components/Account/Signup';
import Login from './Components/Account/Login';
import NavBar from './Components/Account/navBar';
import Profilepage from './Components/Account/ProfilePage';
import SideBar from './Components/Account/sidebar';
import Inventory from './Components/Inventory/Inventory';
import RequireAuth from './Components/Account/RequiredAuth';
import LightVisualize from './Components/Graphs/lightMode/Visualize';
import DarkVisualize from './Components/Graphs/DarkMode/visualize';
import Fab from '@mui/material/Fab';
import NotFound from './Components/Account/notFound';
import axios from 'axios';
const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function MyApp() {

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (

    // <Fab size="medium" color="inherit"aria-label="add">
    <IconButton onClick={colorMode.toggleColorMode} color="inherit" style={{ float: 'right', margin: '8px' }} >
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
    // </Fab>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  console.log(mode);
  localStorage.setItem("mode", mode);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );


  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<>
          {/* <NavBar /> */}
          <Signup />
        </>} />
        <Route exact path="/login" element={<>
          {/* <NavBar /> */}
          <Login />
        </>} />
        <Route path="/Profile" element={<>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <MyApp />
              <Profilepage />
            </ThemeProvider>
          </ColorModeContext.Provider></>} />
        <Route path='/visualize' element={<>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <MyApp />
              <SideBar />
              {mode === "light" ? <LightVisualize /> :
                <DarkVisualize />}
            </ThemeProvider>
          </ColorModeContext.Provider>
        </>}></Route>
        <Route path="/home" element={<>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <MyApp />
              <Inventory />
            </ThemeProvider >
          </ColorModeContext.Provider >
        </>} />
        <Route path="/home/:id" element={<>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <MyApp />
              <Inventory />
            </ThemeProvider >
          </ColorModeContext.Provider >
        </>} />
        <Route path='/index.html' ></Route>
        <Route path="/*" element={<center><NotFound /></center>} />
      </Routes >
    </Router >

  );
}
