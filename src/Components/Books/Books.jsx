import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BsPlus } from 'react-icons/bs'
import { IconContext } from "react-icons";

const url = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=p7GRY7HOCchG6rdI8izyMZSxZRC2c7bp'

const Books = (props) => {
  const [data, setData] = useState()
  const getRes = async () => {
      try {
        const response = await axios.get(url);
        const res = response.data.results.books
        console.log(res)
        setData(res);
      } catch (err) {
        console.log(err)
      }
    }
  useEffect(() => {
    getRes()
  }, []);

  return (
    <div className="books-container">
      <div className="books-card-container">
        {data !== undefined && data.slice(parseInt(props.start), parseInt(props.end)).map(( books ) => (
          <div className="books-card" key={books.rank}>
            <img src={books.book_image} id="books-image" alt={books.title}/>
            {books.title.length < 20 ? (<h4 id="books-words">
              {books.title.substring(0,21).replace('(', '').replace(':','')}
            </h4>) : (<h4 id="books-words">
              {books.title.substring(0,16).replace('(', '').replace(':','')}...
            </h4>)}
            <p id="books-words">On List: {books.weeks_on_list} weeks</p>
            <p id="books-words">Rank: {books.rank}</p>
          </div>
        ))}
        <div className="books-card-plus">
          <div className="books-icon-container">
            <IconContext.Provider value={{ 
              size: "6em",
              color: "black",
            }}>
              <BsPlus />
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className="books-line"></div>
    </div>
  )
}

export default Books