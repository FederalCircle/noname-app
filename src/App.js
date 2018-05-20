import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './routes/Home/Home'
import Map from './components/Map/Map'
import Rotine from './routes/Rotine/Rotine'
import './App.css'

class App extends React.Component {


  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/rotina' component={Rotine} />
            <Route exact path='/visao-geral' component={Map} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
