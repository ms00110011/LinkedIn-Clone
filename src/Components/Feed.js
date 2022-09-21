import React, { useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import { InputOptions } from "./InputOptions";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Posts } from "./Posts";

export const Feed = () => {

  const [posts, setPosts] = useState([])

  const sendPost = (e) => {
    e.preventDefault();

    //Addding the post using setPosts
  }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feedInput">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions title="Photo" Icon={ImageIcon} color="#70B5F9" />
          <InputOptions
            title="Video"
            Icon={SubscriptionsIcon}
            color="#E7A33E"
          />
          <InputOptions title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
          <InputOptions
            title="Write Article"
            Icon={CalendarTodayIcon}
            color="#7FC15E"
          />
        </div>
      </div>

      
      {posts.map((post)=>(
        <Posts />
      ))}



    </div>
  );
};
