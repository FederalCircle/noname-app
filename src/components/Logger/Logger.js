import React from 'react';

class Logger extends React.Component {
  state = {
    text: ""
  }

  updateText = (event) => {
    this.setState({
      text:event.target.value
    });
  }

  buttonClickHandler = () => {
    this.props.addLog(this.state.text)
    this.setState({
      text:""
    });
  }

  render() {
    return (
      <div>
        <ul>
          {
            Object.keys(this.props.logs).map((id) => (
              <li key={id}>
                {this.props.logs[id].text}
              </li>
            ))
          }
        </ul>
        <input
          type="text"
          value={this.state.text}
          placeholder="Texto do log"
          onChange={this.updateText}
        />
        <button
          onClick={this.buttonClickHandler}
        >Adicionar</button>
      </div>
    )
  }
}

export default Logger
