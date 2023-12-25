import React from 'react'
import "./SendMail.css"
import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton } from '@mui/material';
import {useForm} from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/counter/mailSlice';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';


function SendMail() {
    const { register, handleSubmit, formState: { errors },
} = useForm();

    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        console.log(formData);
    }

  return (
    <div className='sendMail'>
        <div className="sendMail_header">
            <h3>New Message</h3>
            <CloseIcon onClick={() => dispatch(closeSendMessage())} className='sendMail_close' />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
            {...register("to",{required: "To is Required!"})}
            placeholder='To'
            type='email' 
            />
             {errors.to && <p className='sendMail_error'> To is Required!</p> }

            <input 
           {...register("subject",{required: "Subject is Required!"})}
            placeholder='Subject' 
            type='text' 
            />
            {errors.subject && <p className='sendMail_error'> Subject is Required!</p> }
            <input
             {...register("message",{required: "message is Required!"})}
             placeholder='Message...' 
             type='text' 
             className='sendMail_message' 
             {...register("message")} 
             />
             {errors.message && <p className='sendMail_error'> Message is Required!</p> }

            <div className="sendMail_options">
                <Button className='sendMail_send'
                variant='contained'
                color='primary'
                type='submit'
                >
                    Send
                    </Button>

              <IconButton>
                 <FormatColorTextIcon />
              </IconButton>
              <IconButton>
                 <AttachFileIcon />
              </IconButton>
              <IconButton>
                 <InsertLinkIcon />
              </IconButton>
              <IconButton>
                 <InsertEmoticonIcon />
              </IconButton>
              <IconButton>
                 <AddToDriveIcon />
              </IconButton>
              <IconButton>
                 <InsertPhotoIcon />
              </IconButton>
              <IconButton>
                 <ToggleOnIcon />
              </IconButton>
              <IconButton>
                 <ModeEditIcon />
              </IconButton>
              <IconButton>
                 <MoreVertIcon />
              </IconButton>
              <IconButton>
                 <DeleteIcon />
              </IconButton>
            </div>
        </form>
    </div>
  )
}

export default SendMail