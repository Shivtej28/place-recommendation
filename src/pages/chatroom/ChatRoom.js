import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import SendIcon from '@material-ui/icons/Send';
import "./ChatRoom.css";


export default function ChatRoom() {

  const location = useLocation()
  const place = location.state

  const [msgToSend, setMsgToSend ] = useState("")

  return (
    <div className="chat-room">
      <div className="show-chat">
        <div className="from-me">
            <p>Hello</p>
        </div>
      </div>
      <div className="get-input">
        <input 
          className="chat-input" 
          type="text"
          onChange={(e) => setMsgToSend(e.target.value)}
          value={msgToSend}
           />

           <div className="btn send">
             <SendIcon className="icon"/>
           </div>


      </div>
    </div>
  )
}
