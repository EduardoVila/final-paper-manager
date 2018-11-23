import React   from 'react'

import Sidebar from '../components/Layout/Sidebar'
import Header  from '../components/Layout/Header' 
import Grid    from '../components/Layout/Grid'

class Dashboard extends React.Component{
    state = {
        sidebar:{
            collapsed: false,
            paginas : [
                {
                    label: 'Página inicial',
                    url: '/'
                },
                {
                    label: 'Banca',
                    url: '/banca'
                },
                {
                    label: 'TCC',
                    url: '/tcc'
                },
                {
                    label: 'Atualizar Dados',
                    url: '/perfil'
                }
            ]
        },

        user: {
            notification: 70,
            picture: 'https://pmcdeadline2.files.wordpress.com/2018/09/trump1.jpg?w=446&h=299&crop=1',
            name: 'Donaldzinho',
            email: 'aloca@usa.com'
        },

        calendar:{

        },

        tarefas: ['Cadastrar TCC', 'Indicar Orientador', 'Definir Tema do TCC']
    }

    toggleDrawer = () => {
        let stateObj = this.state.sidebar

        stateObj.collapsed = !this.state.sidebar.collapsed

        this.setState({
            sidebar: stateObj
        });
    };

    render(){
        return(
            <div>
                <Header  
                    collapseSidebar={this.toggleDrawer} 
                    notification={this.state.user.notification}
                />
                <Sidebar 
                    collapsed={this.state.sidebar.collapsed} 
                    collapseSidebar={this.toggleDrawer}
                    profilePicture={this.state.user.picture} 
                    profileName={this.state.user.name}
                    profileEmail={this.state.user.email}
                    menu={this.state.sidebar.paginas}
                />
                <Grid>
                    {this.props.children}
                </Grid>

            </div>
        );
    }
}

export default Dashboard;
