import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { base } from './assets/rebase'
import Home from './routes/Home/Home'
import Rotine from './routes/Rotine/Rotine'
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
          <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/rotina' component={Rotine} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
