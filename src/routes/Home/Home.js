import React from 'react'
import Search from '../../components/Search/Search'
import Map from '../../components/Map/Map'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import './Home.css'

class Home extends React.Component {
  state = {
    origem: {},
    destino: {}
  }

  onSelectPlace = (place) => {
    let target = this.state.origem.name? 'destino': 'origem'
    let state = {}

    state[target] = place

    this.setState(state)
  }

  doneHandler() {

  }

  render() {
    return (
      <div className='Home'>
        <Map
          origem={this.state.origem}
          destino={this.state.destino}
        />
        <Search
          onSelectPlace={this.onSelectPlace}
        />
        {
          this.state.origem.name && this.state.destino.name?
          (
            <Link to='/rotina' className='bottomButton'>
              <Button
                color="primary"
                onClick={this.doneHandler}
              > Pronto </Button>
            </Link>
          ) : null
        }
      </div>
    )
  }
}

export default Home
