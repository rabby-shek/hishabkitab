
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './bottomnav.css'
import { GoHome } from 'react-icons/go';
import { BsBag } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineShop } from 'react-icons/ai';
import { Outlet, Link } from "react-router-dom";
import { SettingsCellOutlined } from '@mui/icons-material';


const BottomNav = () => {
    const [value, setValue] = React.useState(0);
  
    
  return (
    <div className='botomnav'>
      <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Shop" icon={<AiOutlineShop />} />
        <BottomNavigationAction label="Wishlist" icon={<FavoriteIcon />}/>
        <BottomNavigationAction label="Cart" icon={<BsBag />} />
        <BottomNavigationAction label="My Account" icon={<AiOutlineUser />} />
      </BottomNavigation>
    </Box>
      
    </div>
  )
}

export default BottomNav
