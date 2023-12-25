import React from 'react'
import { IconButton } from '@mui/material';
import calendar from "../src/calendar.png";
import add from "../src/add.png";
import keep from "../src/keep.png";
import user from "../src/user.png";

function Rightpanel() {
  return (
    <div style={{minHeight:"100vh",textAlign:"center",
       position:"fixed",right:"0",width:"5vw"}}>
      <div className='logo_right' >
        <IconButton >
            <img src={calendar} alt='calender' />
        </IconButton>
        <IconButton >
            <img src={keep} alt='keep' />
        </IconButton>
        <IconButton >
            <img src={user} alt='user' />
        </IconButton>
        <IconButton >
            <img className='last' src={add} alt='add' />
        </IconButton>
      </div>
    </div>
  )
}

export default Rightpanel