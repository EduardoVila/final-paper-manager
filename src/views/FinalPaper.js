import React, {Component} from 'react'

import Dashboard      from '../layout/Dashboard'
import Grid           from '@material-ui/core/Grid'
import Paper          from '@material-ui/core/Paper'
import FinalPaperForm from '../components/FinalPaper/FinalPaperForm'

class FinalPaper extends Component {
    state = {
        name:      '',
        sobrenome: '',
        senha:     '',
        email:     '',
        Resenha:   ''
    }

    saveData = event => {
        console.log(this.state);
    };
    
    nameChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };
    sobrenomeChange = sobrenome => event => {
        this.setState({
          [sobrenome]: event.target.value,
        });
    };

    passwordChange = senha => event => {
        this.setState({
          [senha]: event.target.value,
        });
    };

    render() {
        return (
            <Dashboard>

                <Grid item xs={12} md={6}>
                    <FinalPaperForm />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper>Final's paper rendered</Paper>
                </Grid>
                
            </Dashboard>
        );
    }

}
  
export default FinalPaper;