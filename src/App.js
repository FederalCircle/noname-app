import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './routes/Home/Home'
import Map from './components/Map/Map'
import Rotine from './routes/Rotine/Rotine'
import './App.css'

/** --- Disclaimer ---
 * Diversos bugs tiveram que ser deixados de lado para que a entrega do MVP não
 * fosse comprometida, coisas como o zoom do mapa e a falta de validações e
 * máscaras no formulário, são coisas que tinhamos a capacidade e queriamos
 * resolver, mas são necessários sacrifícios para se atingir um objetivo.
 **/

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
