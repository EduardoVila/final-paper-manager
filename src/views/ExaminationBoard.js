import React, {Component} from 'react'

import Dashboard from '../layout/Dashboard'
import Grid      from '@material-ui/core/Grid'
import Paper     from '@material-ui/core/Paper'

class ExaminationBoard extends Component {
    render() {
        return (
            <Dashboard>
                <Grid item xs={12} md={6}>
                    <Paper>Examination Board's form</Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper>Presentation Schedule</Paper>
                </Grid>
            </Dashboard>
        );
    }
}
  
export default ExaminationBoard;