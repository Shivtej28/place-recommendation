import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ChatRoom from '../chatroom/ChatRoom'
import "./Place.css"

export default function Place(props) {
  
 const location = useLocation()
 const navigate = useNavigate()
 console.log("Place: ",location);
 const place = location.state

 const goToChatRoom = () => {
    navigate("/chatroom", {
      state:place
    })
 }

  return (
    <div className="place">
        {/* <div className="place-name">{place.Name}</div> */}
       
      <div className="place-container">
      <img src={place.Image} className="image" alt="Place image" />
      
        <div className="left">
          <div className="place-name">{place.Name}</div>
          <div className="description">{place.Description}
          <div className="place-name">Address:</div>
          <div className="place-name">{place.Address}</div>  
          <div className="buttons">

               <button className="btn" onClick={() => goToChatRoom()}>Chat Room</button>
               <button className="btn">Add Eperience</button>
           
          </div>
        </div>
          
        </div>
        
      </div>
      {/* <div className="chat-container">
        <div className="chat">
           <ChatRoom placeName={place.Name}/> 
        </div>
        <div className="blogs">
            <div className="blog">Blogs</div>
        </div>
        
      </div> */}

      
      </div>
    
  )
}
