import React   from 'react'    ;
import Header  from '../Header';
import Sidebar  from '../Sidebar';
import Content from '../Content';
import './Layout.css';
class Layout extends React.Component{
    state ={
        sideBar:{
            open: true
        },
        notification:{
            count: 45
        }
    }
    
    sidebarHandler = () => {
        const sideBar = {...this.sideBar};
        sideBar.open = !this.state.sideBar.open;
        this.setState({sideBar: sideBar});
    };

    render(){
        return(

            <div>
                <div className="header">
                    <Header 
                    collapseSidebar={this.sidebarHandler}
                    notification={this.state.notification.count}
                    />
                </div>
                <div className="lala">
                    <Sidebar collapsed={this.state.sideBar.open} />
                        {this.props.children}
                    <Content/>
                </div>
                    
            </div>
        );
    }
}

export default Layout;