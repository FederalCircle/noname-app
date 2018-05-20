import React from 'react'
import './Search.css'

class Search extends React.Component {
  state = {

  }

  inputClick = () => {

  }

  inputBlur = () => {

  }

  selectPlace = (place) => {
    console.log(place)
  }

  render() {
    let placelistClass = 'placeList' + this.state.showPlaces? 'show' : 'hide'
    let placesMock = [
      {
        name: 'Lorem'
      },
      {
        name: 'Ipsum'
      }
    ]
    return (
      <div className='Search'>
        <div>
          <input
            placeholder='Onde mora?'
            onClick={this.inputClick}
            onBlur={this.inputBlur}
          />
        </div>
        <div className={placelistClass}>
          <ul>
            {
              placesMock.map((place, id) => (
                <li
                  onClick={()=>this.selectPlace(place)}
                  key={id}
                >{place.name}</li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Search
