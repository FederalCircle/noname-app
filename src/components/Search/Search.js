import React from 'react'
import { base } from '../../assets/rebase'
import './Search.css'

class Search extends React.Component {
  state = {
    showList: false,
    lugares: {},
    origem: '',
    destino: ''
  }

  componentWillMount() {
    this.lugaresRef = base.syncState(`lugares`, {
      context: this,
      state: 'lugares'
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.lugaresRef)
  }

  inputClick = () => {
    this.setState({
      showList: true
    });
  }

  inputBlur = () => {
    this.setState({
      showList: false
    });
  }

  selectPlace = (place) => {
    let target = this.state.origem? 'destino': 'origem'
    let state = {}
    state[target] = place.name
    this.setState(state)

    this.props.onSelectPlace(place)
  }

  render() {
    let placelistClass = 'placeList ' + this.state.showPlaces? 'show' : 'hide'
    return (
      <div className='Search'>
        <div>
          <input
            placeholder='Onde mora?'
            onClick={this.inputClick}
            onBlur={this.inputBlur}
            value={this.state.origem}
            disabled
          />
          <input
            placeholder='Para onde vai?'
            onClick={this.inputClick}
            onBlur={this.inputBlur}
            value={this.state.destino}
            disabled
          />
        </div>
        <div className={placelistClass}>
          <ul>
            {
              Object.keys(this.state.lugares).map((id) => (
                <li
                  onClick={()=>this.selectPlace(this.state.lugares[id])}
                  key={id}
                >{this.state.lugares[id].name}</li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Search
