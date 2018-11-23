import React, {Component} from 'react'
import Dashboard from '../layout/Dashboard'
import Tcc from '../components/Tcc';

class Home extends Component {
    render() {
      return (
        <Dashboard>
            <Tcc/>
        </Dashboard>
      );
    }
}
  
export default Home;