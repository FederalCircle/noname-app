import React from 'react'
import Search from '../../components/Search/Search'
import Map from '../../components/Map/Map'

class Home extends React.Component {
  state = {
    expand: false
  }

  searchClickHandler = () => {

  }

  render() {
    return (
      <div className='Home'>
        <Map />
        <Search
          clickHandler={this.searchClickHandler}
        />
      </div>
    )
  }
}

export default Home
