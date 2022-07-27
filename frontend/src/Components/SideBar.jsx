import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';

const SideBarLink = styled(Box)`
  :hover {
    background: #e8f5fe;
  }
`

const SidebarLink = ({ text, link }) => {
  return(
    <Link to={link} style={{ textDecoration: "none" }}>
      <SideBarLink sx={{padding: 2, width: '100%', borderRadius: 8, marginRight: 4}}>
        <Typography variant="h5" sx={{fontWeight: 700, color: 'black'}} >{text}</Typography>
      </SideBarLink>
    </Link>
  );
}

const SideBar = () => {
  return (
    <Box sx={{width: '25%', background: '#f0f0f0', height: '89.5vh', fontFamily: 'Popins, sans-serif', padding: 4 }}>
      <SidebarLink text="Dashboard" link='/home/dashboard' />
      <SidebarLink text="Inventory" link='/home' />
    </Box>
  )
}

export default SideBar