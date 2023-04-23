import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import InputOption from '../inputoption/InputOption'
import ThumbupAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ChatOutLinedIcon from '@mui/icons-material/ChatOutlined'
import ShareOutLinedIcon from '@mui/icons-material/ShareOutlined'
import SendOutLinedIcon from '@mui/icons-material/SendOutlined'

function Post({ name, description, message, photoUrl }) {
  return (
    <div className='post'>
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>
            { name }
          </h2>
          <p>
            { description }
          </p>
        </div>       
      </div>
      <div className="post__body">
        <p>{ message }</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ ThumbupAltOutlinedIcon } title='Like' color='gray'/>
        <InputOption Icon={ ChatOutLinedIcon } title='Comment' color='gray'/>
        <InputOption Icon={ ShareOutLinedIcon } title='Share' color='gray'/>
        <InputOption Icon={ SendOutLinedIcon } title='Send' color='gray'/>
      </div>
    </div>
  )
}

export default Post