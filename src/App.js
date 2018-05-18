import React from 'react'
import Logger from './components/Logger/Logger'
import { base } from './assets/rebase'

import logo from './logo.svg'
import './App.css'

class App extends React.Component {
  state = {
    logs: {}
  }

  componentWillMount() {
    this.logsRef = base.syncState(`logs`, {
      context: this,
      state: 'logs'
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.logsRef)
  }

  addLogs = (text) => {
    const logs = {...this.state.logs}
    const id = Date.now()
    logs[id] = {
      id: id,
      text: text
    }

    this.setState({logs})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Logger
          logs={this.state.logs}
          addLog={this.addLogs}
        />
      </div>
    )
  }
}

export default App
