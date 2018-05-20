import React from 'react'
import Form from '../../components/Form/Form'
import {base} from '../../assets/rebase'

class Rotine extends React.Component {
  state = {
    form: {
      dias: []
    }
  }

  handleSubmit = (event) => {
    base.push('usuario/rotina', {
      data : this.state.form,
      then(resposta){
        console.log(resposta)
      }
    })
    event.preventDefault()
  }

  handleChange = (event) => {
    let form = { ...this.state.form }
    if (event.target.type == "checkbox")
      form.dias.push(event.target.name)
    else
      form[event.target.name] = event.target.value
    this.setState({ form })
    event.preventDefault();

  }

  render() {
    return (
      <div className='Rotine'>
        <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
      </div>
    )
  }
}

export default Rotine
