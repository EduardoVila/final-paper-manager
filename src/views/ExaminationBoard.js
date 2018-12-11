import React, {Component} from 'react'

import Dashboard from '../layout/Dashboard'
import Grid      from '@material-ui/core/Grid'
import Paper     from '@material-ui/core/Paper'
import ConfirmChip from '../components/ConfirmChip'
import Typograph       from '@material-ui/core/Typography'
import DadosBanca from '../components/DadosBanca'

class ExaminationBoard extends Component {

    state = {
        condicao: true,
        name: 'Eduardo de Vila'
    };
    render() {
        return (
            <Dashboard>
                <Grid item xs={12} md={8}>
                    <DadosBanca/>
                </Grid>
                <Grid item xs={12} md={4}>
                <Paper>
                    <Typograph variant='display1' className="title title1">
                        Confirmação Integrantes
                    </Typograph>
                    <div className="integrantesChip">
                        <ConfirmChip {...{condicao: true, name: 'Eduardo de Vila'}}></ConfirmChip>
                        <ConfirmChip {...{condicao: false, name: 'Joao Manoel'}}></ConfirmChip>
                        <ConfirmChip {...{condicao: true, name: 'Olivia Palito'}}></ConfirmChip>
                        <ConfirmChip {...{condicao: false, name: 'Silvio Santos'}}></ConfirmChip>
                    </div>

                </Paper>
                    
                       
                   
                </Grid>
            </Dashboard>
        );
    }
}
  
export default ExaminationBoard;