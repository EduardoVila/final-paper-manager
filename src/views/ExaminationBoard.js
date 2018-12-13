import React, {Component} from 'react'

import Dashboard from '../layout/Dashboard'
import Grid      from '@material-ui/core/Grid'
import Paper     from '@material-ui/core/Paper'
import ConfirmChip from '../components/ConfirmChip'
import Typograph       from '@material-ui/core/Typography'
import DadosBanca from '../components/DadosBanca'

class ExaminationBoard extends Component {

    state = {
        users: [
            'Oliver Hansen',
            'Van Henry',
            'April Tucker',
            'Ralph Hubbard',
            'Omar Alexander',
            'Carlos Abbott',
            'Miriam Wagner',
            'Bradley Wilkerson',
            'Virginia Andrews',
            'Kelly Snyder',
        ],
        nameList: []   

    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    };

    render() {
        return (
            <Dashboard>
                <Grid item xs={12} md={8}>
                    <DadosBanca
                        usersAvailable={this.state.users}
                        nameList={this.state.nameList}
                        handleChange={this.handleChange}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                <Paper>
                    <Typograph variant='display1' className="title title1">
                        Confirmação Integrantes
                    </Typograph>
                    <div className="integrantesChip">
                        {
                            this.state.nameList.map(element => <ConfirmChip condicao={false} name={element} />)
                        }
                    </div>

                </Paper>
                    
                       
                   
                </Grid>
            </Dashboard>
        );
    }
}
  
export default ExaminationBoard;