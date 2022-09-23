import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import { InputOptions } from "./InputOptions";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Posts } from "./Posts";
import { db } from "../Firebase";
// import firebase from 'firebase'
// import * as firebase from "firebase/app";
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

import 'firebase/compat/firestore';


export const Feed = () => {
  const [input,setInput] = useState('')
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name:"Rahul Sharma",
      description:"this is a test",
      message:input,
      photoUrl:"",
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feedInput">
          <CreateIcon />
          <form>
            <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
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

      {posts.map(({id,data:{name,description,photoUrl,message,timestamp}}) => (
        <Posts
        key={id}
        name = {name}
        description = {description}
        message = {message}
        photoUrl = {photoUrl}
         />
      ))}
    </div>
  );
};
