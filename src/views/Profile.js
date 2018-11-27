import React, {Component} from 'react'

import Dashboard from '../layout/Dashboard'
import Grid      from '@material-ui/core/Grid'
import DadosUsu from '../components/DadosUsu'
import CurrentData from '../components/CurrentData'
class Profile extends Component {
    state = {
        student: {
            nome:{
                label:'Nome',
                value:'Eduardo',
            },
            sobrenome:{
                label:'Sobrenome',
                value:'de Vila',
            },
            email:{
                label:'Email',
                value:'eduardodevila1@hotmail.com',
            },
            orientador:{
                label:'Orientador',
                value:'Mano Djow',
            },
            coorientador:{
                label:'Coorientador',
                value:'Deus',
            },
        },
 
    }
    render() {
        return (
            <Dashboard>       
                <Grid item xs={12} md={6}>
                    <DadosUsu/>              
                </Grid>
                <Grid item xs={12} md={6}>
                    <CurrentData {...this.state.student}/>
                </Grid>
            </Dashboard>
        );
    }
}
  
export default Profile;