import React from 'react';
import "./Mail.css";
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Mail() {
   const navigate = useNavigate();

  return (
    <div className='mail'>
        <div className="mail_tools">
          <div className="mail_toolsLeft">
              <IconButton onClick={() => navigate("/")} >
                <ArrowBackIcon />
              </IconButton>
              <IconButton >
                <MoveToInboxIcon />
              </IconButton>
              <IconButton >
                <ErrorIcon />
              </IconButton>
              <IconButton >
                <DeleteIcon />
              </IconButton>
              <IconButton >
                <EmailIcon />
              </IconButton>
              <IconButton >
                <WatchLaterIcon />
              </IconButton>
              <IconButton >
                <CheckCircleIcon />
              </IconButton>
              <IconButton >
                <LabelImportantIcon />
              </IconButton>
              <IconButton >
                <MoreVertIcon />
              </IconButton>
          </div>
          <div className="mail_toolsRight">
              <IconButton >
                <UnfoldMoreIcon />
              </IconButton>
              <IconButton >
                <PrintIcon />
              </IconButton>
              <IconButton >
                <ExitToAppIcon />
              </IconButton>
          </div>
        </div>
        <div className="mail_body">
          <div className="mail_bodyHeader">
            <h2>Subject</h2>
            <LabelImportantIcon className='mail_important' />
            <p>Big Day</p>
            <p className='mail_time'>Thu, 30 Nov 2023 06:28:29 GMT</p>
          </div>

          <div className="mail_message">
            <p> Congratz</p>
          </div>
        </div>
    </div>
  )
}

export default Mail