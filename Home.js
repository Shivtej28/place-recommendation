import React, { useState } from 'react'
import "./Home.css";
import data from './tourist_places_data.json';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

export default function Home() {

    const [filterData, setFilteredData] = useState([]);

    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = data.filter((value) => {
        return (value.name).toLowerCase().includes(searchWord.toLowerCase());
      });

      if(searchWord === ""){
        setFilteredData([]);
      }else{
        setFilteredData(newFilter);
      }
    };

    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };

  return (
    <div className="home">
        <div div className="searchbox">
          <input type="text" value={wordEntered} onChange={handleFilter}/>
          <div className="searchIcon">
            {filterData.length === 0 ? (
              <SearchIcon />
             ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
             )} 
          </div> 
        </div>
        {filterData.length !== 0 && (
          <div className = "dataResult">
            {filterData.slice(0, 15).map((value, key) => {
              return (
                <a className = "dataItem" href={value.name} target = "_blank" rel="noreferrer">
                  <p>{(value.name).toLowerCase()}</p>
                </a>
              );
            })}
          </div>
        )};
            <button className="btn">Search</button>
    </div>
  );
}
