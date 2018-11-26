import React, {Component} from 'react'

import Dashboard from '../layout/Dashboard'
import Grid      from '@material-ui/core/Grid'
import DadosUsu from '../components/DadosUsu'
import CurrentData from '../components/CurrentData'

class Profile extends Component {
    render() {
        return (
            <Dashboard>
                
                <Grid item xs={12} md={6}>
                    <DadosUsu/>              
                </Grid>
                <Grid item xs={12} md={6}>
                    <CurrentData/>
                </Grid>

            </Dashboard>
        );
    }
}
  
export default Profile;