import React, {Component} from 'react'

import Dashboard from '../layout/Dashboard'
import Grid      from '@material-ui/core/Grid'
import Paper     from '@material-ui/core/Paper'

class Profile extends Component {
    render() {
        return (
            <Dashboard>
                
                <Grid item xs={12} md={6}>
                    <Paper>Profile's update form</Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper>Actual Profile</Paper>
                </Grid>

            </Dashboard>
        );
    }
}
  
export default Profile;