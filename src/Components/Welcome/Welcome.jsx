import React from 'react'
import WelcomeLine from './WelcomeLine'


const Welcome = (props) => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Every Entertainment in one place</h1>
      <WelcomeLine />
    </div>
  )
}

export default Welcome