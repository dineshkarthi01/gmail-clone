import React from 'react';
import "./EmailList.css";
import { Checkbox, IconButton } from '@mui/material';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import Section from './Section';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';
import EmailRow from './EmailRow';

function EmailList() {
  return (
    <div className='emailList'>
      <div className="emailList_settings">
        <div className="emailList_settingsLeft">
            <Checkbox />
            <IconButton>
                <ArrowDropDown />
            </IconButton>
            <IconButton>
                <RedoIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
        </div>
        <div className="emailList_settingsRight">
            <IconButton>
                <ChevronLeftIcon />
            </IconButton>
            <IconButton>
                <ChevronRightIcon />
            </IconButton>
            <IconButton>
                <KeyboardHideIcon />
            </IconButton>
            <IconButton>
                <SettingsIcon />
            </IconButton>
        </div>
      </div>
      <div className="emailList_sections">
         <Section Icon={InboxIcon} title="Primary" color="red" selected />
         <Section Icon={LocalOfferIcon} title="Promotions" color="#1A73E8" />
         <Section Icon={PeopleIcon} title="Social" color="green" />
      </div>
      <div className="emailList_list">
         <EmailRow 
         title="dinesh@gmail.com"
         subject="This works"
         description="This is a test"
         time="Mon, 25 Dec 2023 01:26:12 GMT"
         />
          <EmailRow 
         title="test@gmail.com"
         subject="Email"
         description="This is a Message"
         time="Wed, 20 Dec 2023 11:22:02 GMT"
         />
          <EmailRow 
         title="kumar@gmail.com"
         subject="important"
         description="Hello sam , Call me when you're available"
         time="Tue, 19 Dec 2023 10:20:08 GMT"
         />
          <EmailRow 
         title="sarah@gmail.com"
         subject="hello"
         description="Its me sarah"
         time="mon, 18 Dec 2023 08:12:22 GMT"
         />
          <EmailRow 
         title="harish@gmail.com"
         subject="greetings"
         description="You're promoted"
         time="Sat, 16 Dec 2023 09:22:02 GMT"
         />
          <EmailRow 
         title="yuvan@gmail.com"
         subject="songs"
         description="5 Songs completed"
         time="Fri, 15 Dec 2023 04:08:13 GMT"
         />
          <EmailRow 
         title="karthik@gmail.com"
         subject="hey Buddy"
         description="Movie Times"
         time="Thu, 14 Dec 2023 01:32:42 GMT"
         />
          <EmailRow 
         title="Sri@gmail.com"
         subject="Testing"
         description="Hello mate"
         time="Wed, 13 Dec 2023 02:21:20 GMT"
         />
          <EmailRow 
         title="timetravel@gmail.com"
         subject="Hey"
         description="I have a time travel Machine"
         time="Tue, 12 Dec 2023 05:34:16 GMT"
         />
          <EmailRow 
         title="goodday@gmail.com"
         subject="Success"
         description="This is your time"
         time="Mon, 11 Dec 2023 09:12:37 GMT"
         />
          <EmailRow 
         title="Baby@gmail.com"
         subject="Good Morning"
         description="waiting for your message"
         time="Sun, 10 Dec 2023 10:22:02 GMT"
         />
          <EmailRow 
         title="Mask@gmail.com"
         subject="Maskmail"
         description="Its my Time"
         time="Sat, 09 Dec 2023 07:18:56 GMT"
         />
          <EmailRow 
         title="kamalhassan@gmail.com"
         subject="Title 237"
         description="Confirmed one"
         time="Fri, 08 Dec 2023 08:50:02 GMT"
         />
          <EmailRow 
         title="Joker@gmail.com"
         subject="Important"
         description="This is your last day"
         time="Thu, 07 Dec 2023 09:45:12 GMT"
         />
          <EmailRow 
         title="Predestination@gmail.com"
         subject="TimeTravel"
         description="Do you like ?"
         time="Wed, 06 Dec 2023 08:54:22 GMT"
         />
          <EmailRow 
         title="gold@gmail.com"
         subject="hey Mate"
         description="Its my turn"
         time="Tue, 05 Dec 2023 11:49:15 GMT"
         />
          <EmailRow 
         title="AI@gmail.com"
         subject="Bot"
         description="Upgrading Tech"
         time="Mon, 04 Dec 2023 08:34:46 GMT"
         />
          <EmailRow 
         title="NanoBot@gmail.com"
         subject="Hey"
         description="Just Click here"
         time="Sun, 03 Dec 2023 12:22:54 GMT"
         />
          <EmailRow 
         title="Netflix@gmail.com"
         subject="Title"
         description="Movie Updated"
         time="Sat, 02 Dec 2023 05:38:13 GMT"
         />
          <EmailRow 
         title="newapp@gmail.com"
         subject="Testing"
         description="Created"
         time="Fri, 01 Dec 2023 08:39:47 GMT"
         />
          <EmailRow 
         title="Hellobee@gmail.com"
         subject="Testing"
         description="Its Done"
         time="Thu, 30 Nov 2023 06:28:29 GMT"
         />
      </div>
      
    </div>
  )
}

export default EmailList