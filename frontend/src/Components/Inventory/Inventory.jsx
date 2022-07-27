import { useState } from 'react'
import { Box } from '@mui/system'
import PersistentDrawerLeft from '../Account/sidebar'
import addNotification from 'react-push-notification';
import EnhancedTable from './Table'
import { Chip, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'

const TabLabel = ({ name, number, checked }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, background: `${checked === name ? 'white' : '#ecf2fe'}`, borderRadius: '10px 10px 0 0', padding: '10px 20px' }}>
      <Typography variant='h6' sx={{ fontWeight: 600, color: `${checked === name ? 'black' : '#7c7f81'}` }}>{name}</Typography>
      <Chip size='small' color={checked === name ? 'primary' : 'default'} label={number} />
    </Box>
  )
}
const buttonClick = () => {
  addNotification({
    title: "Yipeeee",
    subtitle: "New Data added",
    theme: "light",
    duration: 4000,
    vibrate: Number[10],
    native: true, // when using native, your OS will handle theming.
  });
};

const Tabs = ({ checked, setChecked, tabs }) => {

  let tabsList = Object.entries(tabs)
  return (
    <Box>
      <RadioGroup
        row
        value={checked}
        onChange={(event) => setChecked(event.target.value)}
      >
        {tabsList.map((tab, index) => <FormControlLabel key={index} value={tab[0]} control={<Radio sx={{ visibility: 'hidden', width: 0 }}
          onClick={buttonClick}
        />} label={<TabLabel name={tab[0]} checked={checked} number={tab[1]} />} />)}
      </RadioGroup>
    </Box>
  )
}

const Inventory = () => {
  const [checked, setChecked] = useState('All');
  let tabs = {
    'All': 23,
    'Pending': 12,
    'Completed': 3,
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <PersistentDrawerLeft />
      <Box sx={{ padding: 4, width: '100%' }}>
        <Tabs checked={checked} setChecked={setChecked} tabs={tabs} />
        <EnhancedTable ckecked={checked} />
      </Box>
    </Box>
  )
}

export default Inventory