import { Box } from '@mui/system'
import React from 'react'
import SideBar from '../Components/SideBar'
import EnhancedTable from '../Components/Table'

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