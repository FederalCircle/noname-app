import React from 'react'
import logo from '../../logo.svg'

const header = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{props.title || 'AltBus'}</h1>
      </header>
    </div>
  )
}

export default header
