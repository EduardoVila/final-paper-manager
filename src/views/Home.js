import React, {Component} from 'react'

import Dashboard from '../layout/Dashboard'
import Grid      from '@material-ui/core/Grid'
import Paper     from '@material-ui/core/Paper'

class Home extends Component {
    render() {
      return (
        <Dashboard>
          
          <Grid item xs={12} md={6}>
              <Paper>Tasks feedback graphic</Paper>
              <Paper>Tasks feedback box</Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper>Calendar Schedule</Paper>
          </Grid>  

        </Dashboard>
      );
    }
}
  
export default Home;