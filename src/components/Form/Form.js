import React from 'react'
import { Link } from 'react-router-dom'
import './Form.css'

const search = props => {
    return (
        <div className='Form'>
            <form name="rotina" onSubmit={props.handleSubmit}>
                <div className="row">
                    <h3 className="title">Horário Partida:</h3>
                    <div className="col-sm-12">
                        <div className="form-group col-side">
                            <label>De </label>
                            <input type="text" className="form-control" name="idaDe" onChange={props.handleChange} />
                        </div>
                        <div className="form-group col-side col-right">
                            <label>Até </label>
                            <input type="text" className="form-control" name="idaAte" onChange={props.handleChange} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h3 className="title">Horário Retorno:</h3>
                    <div className="col-sm-12">
                        <div className="form-group col-side">
                            <label>De </label>
                            <input type="text" className="form-control" name="voltaDe" onChange={props.handleChange} />
                        </div>
                        <div className="form-group col-side col-right">
                            <label>Até </label>
                            <input type="text" className="form-control" name="voltaAte" onChange={props.handleChange} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h3 className="title">Dias na semana:</h3>
                    <div className="col-sm-12">
                        <div className="checkbox">
                            <div className="check-option">
                                <label htmlFor="domingo">
                                    <input type="checkbox" id="domingo" className="checkOpt" name="domingo" onChange={props.handleChange} />
                                    Domingo
                                </label>
                            </div>
                            <div className="check-option">
                                <label htmlFor="segunda">
                                    <input type="checkbox" id="segunda" className="checkOpt" name="segunda" onChange={props.handleChange}/>
                                    Segunda
                                </label>
                            </div>
                            <div className="check-option">
                                <label htmlFor="terca">
                                    <input type="checkbox" id="terca" className="checkOpt" name="terca" onChange={props.handleChange}/>
                                    Terça
                                </label>
                            </div>
                            <div className="check-option">
                                <label htmlFor="quarta">
                                    <input type="checkbox" id="quarta" className="checkOpt" name="quarta" onChange={props.handleChange}/>
                                    Quarta
                                </label>
                            </div>
                            <div className="check-option">
                                <label htmlFor="quinta">
                                    <input type="checkbox" id="quinta" className="checkOpt" name="quinta" onChange={props.handleChange}/>
                                    Quinta
                                </label>
                            </div>
                            <div className="check-option">
                            <label htmlFor="sexta">
                                    <input type="checkbox" id="sexta" className="checkOpt" name="sexta" onChange={props.handleChange}/>
                                    Sexta
                                </label>
                            </div>
                            <div className="check-option">
                                <label htmlFor="sabado">
                                    <input type="checkbox"id="sabado" className="checkOpt" name="sabado" onChange={props.handleChange}/>
                                    Sábado
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to='/rotina' className='bottomButton'>
                  <button type="submit" className="btn btn-primary">OK</button>
                </Link>

            </form>
        </div>
    )
}

export default search
