import React  from 'react';
import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header'  ;
import Tcc from '../components/Tcc';
class Dashboard extends React.Component{
    state = {
        sidebar:{
            collapsed: false,
            items : ['Página inicial', 'Banca', 'TCC', 'Atualizar Dados']
        },
        user: {
            notification: 70,
            picture: 'https://pmcdeadline2.files.wordpress.com/2018/09/trump1.jpg?w=446&h=299&crop=1',
            name: 'Donaldzinho',
            email: 'aloca@usa.com'
        },
        calendar:{

        }
    }

    toggleDrawer = () => {
        this.setState({
            sidebar: {
                collapsed: !this.state.sidebar.collapsed,
                items: this.state.sidebar.items
            }
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
                    menu={this.state.sidebar.items}
                />
                <Tcc></Tcc>
            </div>
        );
    }
}

export default Dashboard;
