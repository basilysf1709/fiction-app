import React, { useState } from 'react'
import { IconContext } from "react-icons";
import { SiMyanimelist } from 'react-icons/si'
import { FaBook } from 'react-icons/fa'
import { BiMoviePlay } from 'react-icons/bi'
import { IoSettingsSharp } from 'react-icons/io5'
import { FaTv } from 'react-icons/fa'
import { BsPlus } from 'react-icons/bs'

const Icon = () => {
  const colorIcon = "black"
  const [icons, setIcons] = useState(true)

  const changeIcons = () => {
    if (icons === true) setIcons(false)
    else setIcons(true)
  }
  return (
    <div className="icons-container">
      <IconContext.Provider value={{ 
          size: "2.2em",
          color: colorIcon,
      }}>
        <button>
          <div className="icon">
            <SiMyanimelist />
          </div>
        </button>
        {!icons && <>
          <button>
            <div className="icon">
              <FaBook />
            </div>
          </button>
          <button>
            <div className="icon">
              <BiMoviePlay />
            </div>
          </button>
          <button>
            <div className="icon">
              <FaTv />
            </div>
          </button>
          <button>
            <div className="icon">
              <IoSettingsSharp />
            </div>
          </button>
        </>}
        <button onClick={changeIcons}>
          <div className="icon">
            <BsPlus />
          </div>
        </button>
      </IconContext.Provider>
    </div>
  )
}

export default Icon