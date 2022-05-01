import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BsPlus } from 'react-icons/bs'
import { IconContext } from "react-icons";


const Anime = (props) => {
  const [data, setData] = useState()

  const getRes = async () => {
      try {
        const response = await axios.get('https://api.jikan.moe/v3/top/anime/1/favorite');
        const res = response.data.top
        setData(res);
      } catch (e) {
        console.log(e)
      }
    }

  useEffect(() => {
    getRes()
  }, []);

  return (
    <div className="anime-container">
      <div className="anime-card-container">
        {data != undefined && data.slice(parseInt(props.start), parseInt(props.end)).map(( anime ) => (
          <div className="anime-card" key={anime.mal_id}>
            <img src={anime.image_url} id="anime-image" />
            <h4 id="anime-words">{anime.title.substring(0,21).replace('(', '').replace(':','')}</h4>
            <p id="anime-words">Episodes: {anime.episodes}</p>
            <p id="anime-words">Rank: {anime.rank}</p>
          </div>
        ))}
        <div className="anime-card-plus">
          <div className="anime-icon-container">
            <IconContext.Provider value={{ 
              size: "6em",
              color: "black",
            }}>
              <BsPlus />
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className="anime-line"></div>
    </div>
  )
}

export default Anime