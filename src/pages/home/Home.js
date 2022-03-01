import React, { useState } from 'react'
import "./Home.css";

export default function Home() {

    const [keyWord, setKeyWord] = useState('');

  return (
    <div className="home">
        <form className="searchbox">
          <input 
            type="text"
            onChange={(e) => setKeyWord(e.target.value)}
            value={keyWord} />

            <button className="btn">Search</button>
        </form>
    </div>
  )
}
