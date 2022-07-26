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
import Signup from './components/Account/Signup';
import Login from './components/Account/Login';
import NavBar from './components/Account/navBar';
import Profilepage from './components/Account/ProfilePage';
import Dashboard from './screen/Dashboard';
import SideBar from './components/SideBar';
import Inventory from './screen/Inventory';
import RequireAuth from './screen/RequiredAuth';
const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function MyApp() {

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        // width: '100%',
        alignItems: 'right',
        justifyContent: 'right',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

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
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Profile" element={
              <>
                <MyApp />
                <Profilepage />
              </>
            } />
            <Route path="/" element={<RequireAuth />}>              
              <Route path="home" element={<Inventory />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
