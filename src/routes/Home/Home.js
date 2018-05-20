import React from 'react'
import Search from '../../components/Search/Search'
import Map from '../../components/Map/Map'
import { Button } from 'reactstrap';

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
            <div className='bottomButton'>
              <Button
                color="primary"
              > Pronto </Button>
            </div>
          ) : null
        }
      </div>
    )
  }
}

export default Home
