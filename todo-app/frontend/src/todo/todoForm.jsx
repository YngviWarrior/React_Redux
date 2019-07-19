import React from 'react'
import Grid from '../template/grid'

export default props => (
    <div role="form" className="todoForm">
        <Grid className="12 9 10">
            <input id="description" className="form-control" placeholder="Adicione uma tarefa"></input>
        </Grid>
        <Grid className="12 3 2">
                <button className="btn btn-primary">
                    <i className="fa fa-plus"></i>
                </button>
        </Grid>
    </div>
)