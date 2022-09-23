import { Avatar } from "@mui/material";
import React from "react";
import { InputOptions } from "./InputOptions";
import "./Posts.css";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export const Posts = ({ name, description, message, photoUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOptions Icon={ThumbUpOffAltIcon} title='Like' color='gray' />
        <InputOptions Icon={ChatBubbleOutlineOutlinedIcon} title='Comment' color='gray' />
        <InputOptions Icon={ShareOutlinedIcon} title='Share' color='gray' />
        <InputOptions Icon={SendOutlinedIcon} title='Send' color='gray' />

      </div>
    </div>
  );
};
