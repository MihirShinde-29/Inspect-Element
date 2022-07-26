import { Box } from '@mui/system'
import React from 'react'
import SideBar from '../Account/SideBarMihir'
import EnhancedTable from './Table'

const Inventory = () => {
  return (
    <Box sx={{display: 'flex'}}>
      <SideBar />
      <Box sx={{padding: 4, width: '100%'}}>
        <EnhancedTable />
      </Box>
    </Box>
  )
}

export default Inventory