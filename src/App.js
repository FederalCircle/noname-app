import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { base } from './assets/rebase'
import Home from './routes/Home/Home'
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

  render() {
    return (
      <div>
        <Router>
          <Route exact path='' component={Home} />
        </Router>
      </div>
    )
  }
}

export default App
