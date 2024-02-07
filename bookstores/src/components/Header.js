import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import {NavLink} from 'react-router-dom';
const Header = () => {
   const [value,Setvalue]= useState();
  return (
    <div>
      <AppBar  sx={{backgroundColor:"#455a64"}}
      position='sticky'>
        <Toolbar >   
          <NavLink to="/" style={{color:'white'}}>
      <Typography>
        <StoreIcon/>
      </Typography>
            </NavLink> 
      <Tabs sx={{ml:"auto"}} textColor='inherit' indicatorColor='primary' TabIndicatorProps={{style:{backgroundColor:"#ff6e40"}}} value={value} onChange={(e,val)=>Setvalue(val)}>
        <Tab LinkComponent={NavLink} to="/books"  label="ALL BOOKS"/>
        <Tab  LinkComponent={NavLink} to="/add"  label="ADD PRODUCT"/>
        <Tab  LinkComponent={NavLink} to="/about" label="ABOUT US"/>
      </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header