import React from 'react'
import WelcomeLine from './WelcomeLine'


const Welcome = (props) => {
  return (
    <div className="welcome-container"> 
      <h1 className="welcome-title">Top Fiction List</h1>
      <WelcomeLine />
    </div>
  )
}

export default Welcome 