import React from 'react'
import './Form.css'

const search = props => {
    return (
        <div className='Form'>
            <form>
                <div className="row">
                    <h3 className="title">Horário Partida:</h3>
                    <div className="col-sm-12">
                        <div className="form-group col-side">
                            <label>De </label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-side col-right">
                            <label>Até </label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h3 className="title">Horário Retorno:</h3>
                    <div className="col-sm-12">
                        <div className="form-group col-side">
                            <label>De </label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-side col-right">
                            <label>Até </label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h3 className="title">Dias na semana:</h3>
                    <div className="col-sm-12">
                        <div className="checkbox">
                            <div className="check-option">
                                <label>
                                    <input type="checkbox" className="checkOpt" />
                                    Domingo
                                </label>
                            </div>
                            <div className="check-option">
                                <label>
                                    <input type="checkbox" className="checkOpt" />
                                    Segunda
                                </label>
                            </div>
                            <div className="check-option">
                                <label>
                                    <input type="checkbox" className="checkOpt" />
                                    Terça
                                </label>
                            </div>
                            <div className="check-option">
                                <label>
                                    <input type="checkbox" className="checkOpt" />
                                    Quarta
                                </label>
                            </div>
                            <div className="check-option">
                                <label>
                                    <input type="checkbox" className="checkOpt" />
                                    Quinta
                                </label>
                            </div>
                            <div className="check-option">
                                <label>
                                    <input type="checkbox" className="checkOpt" />
                                    Sexta
                                </label>
                            </div>
                            <div className="check-option">
                                <label>
                                    <input type="checkbox" className="checkOpt" />
                                    Sábado
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-primary">OK</button>
            </form>
        </div>
    )
}

export default search
