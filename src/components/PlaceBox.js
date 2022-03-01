import React from 'react'
import "./PlaceBox.css"

export default function PlaceBox({place}) {
  return (
    <div className="placebox">
        <img src={place.Image} alt="" />
        <div className="name">{place.Name}</div>
    </div>
  )
}
