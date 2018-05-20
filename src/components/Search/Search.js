import React from 'react'
import { base } from '../../assets/rebase'
import './Search.css'

class Search extends React.Component {
  state = {
    showPlaces: false,
    lugares: {},
    origem: '',
    destino: ''
  }

  componentWillMount() {
    base.fetch(`lugares`, {
      context: this
    }).then(data => {
      this.setState({ lugares: data });
    })
  }

  inputClick = () => {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        try {
          var notification = new Notification("Hooray!");
        } catch (e) {
          navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification('Vibration Sample', {
              body: 'Buzz! Buzz!',
              vibrate: [200, 100, 200, 100, 200, 100, 200],
              tag: 'vibration-sample'
            });
          });
        }
      }
    })
    this.setState({
      showPlaces: !!this.state.showPlaces
    });
  }

  selectPlace = (place, id) => {
    let target = this.state.origem? 'destino': 'origem'
    let state = {}
    state.lugares = {...this.state.lugares}
    state[target] = place.name
    state.showPlaces = false
    state.lugares[id] = null
    this.setState(state)

    this.props.onSelectPlace(place)
  }

  render() {
    let placelistClass = 'placeList ' + (this.state.showPlaces? 'show' : 'hide')
    return (
      <div className='Search'>
        <div
          onClick={this.inputClick}
        >
          <input
            placeholder='Onde mora?'
            value={this.state.origem}
            disabled
          />
          <input
            placeholder='Para onde vai?'
            value={this.state.destino}
            disabled
          />
        </div>
        <div className={placelistClass}>
          <ul>
            {
              Object.keys(this.state.lugares).map((id) => {
                return this.state.lugares[id]? (
                  <li
                    onClick={()=>this.selectPlace(this.state.lugares[id], id)}
                    key={id}
                  >{this.state.lugares[id].name}</li>
                ) : null
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Search
