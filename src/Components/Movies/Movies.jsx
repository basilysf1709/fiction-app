import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BsPlus } from 'react-icons/bs'
import { IconContext } from "react-icons";

const Movies = ( props ) => {
  const [data, setData] = useState()

  const getRes = async () => {
      try {
        const response = await axios.get(`https://imdb-api.com/en/API/Top250${props.type}/k_z20oo12x`);
        const res = response.data.items
        setData(res);
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    }
  useEffect(() => {
    getRes()
  }, []);

  return (
    <div className="movies-container">
      <div className="movies-card-container">
        {data !== undefined && data.slice(parseInt(props.start), parseInt(props.end)).map(( movies ) => (
          <div className="movies-card" key={movies.id}>
            <img src={movies.image} id="movies-image" alt={movies.title}/>
            {movies.title.length < 20 ? (<h4 id="movies-words">
              {movies.title.substring(0,21).replace('(', '').replace(':','')}
            </h4>) : (<h4 id="movies-words">
              {movies.title.substring(0,16).replace('(', '').replace(':','')}...
            </h4>)}
            <p id="movies-words">Rating: {movies.imDbRating}</p>
            <p id="movies-words">Rank: {movies.rank}</p>
          </div>
        ))}
        <div className="movies-card-plus">
          <div className="movies-icon-container">
            <IconContext.Provider value={{ 
              size: "6em",
              color: "black",
            }}>
              <BsPlus />
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className="movies-line"></div>
    </div>
  )
}

export default Movies