import { Box } from '@mui/material'
import React from 'react'

const SidebarLink = ({ text }) => {
  return(
    <div className="link" >
        <h2>{text}</h2>
    </div>
  );
}

const SideBar = () => {
  return (
    <Box sx={{width: '25%', background: '#f0f0f0', height: '89.5vh', fontFamily: 'Popins, sans-serif', padding: 4 }}>
        <SidebarLink text="Dashboard" />
        <SidebarLink text="Inventory" />
    </Box>
  )
}

export default SideBar