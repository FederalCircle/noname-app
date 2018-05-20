import React from 'react'
import Search from '../../components/Search/Search'

class Home extends React.Component {
  state = {

  }

  searchClickHandler = () => {

  }

  render() {
    return (
      <div className='Home'>
        <Search
          clickHandler={this.searchClickHandler}
        />
      </div>
    )
  }
}

export default Home
