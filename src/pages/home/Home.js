import axios from 'axios';
import React, { useState } from 'react'
import PlaceBox from '../../components/PlaceBox';
import "./Home.css";

export default function Home() {

    const [keyWord, setKeyWord] = useState('');
    const [list, setList] = useState([])

    const fetchData = async (e) => {
        e.preventDefault()
        console.log("Data");
        const result = await axios(`https://touristsplacesapi.herokuapp.com/places?name=${keyWord}`)
        console.log(result.data);
        setList(result.data)
       
    } 

  return (
    <div className="home">
        <form className="searchbox" onSubmit={fetchData}>
          <input 
            type="text"
            onChange={(e) => setKeyWord(e.target.value)}
            value={keyWord} />

            <button className="btn">Search</button>
        </form>

        <div className="box-container">
            {list.map((place) => <PlaceBox key={place.Name} place={place}/>)   }
        </div>
    </div>
  )
}
