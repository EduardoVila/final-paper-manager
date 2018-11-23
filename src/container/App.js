import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Examination from '../views/ExaminationBoard'
import FinalPaper  from '../views/FinalPaper'
import Home        from '../views/Home'
import Profile     from '../views/Profile'

import './App.css'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'       component={Home}        />
          <Route exact path='/banca'  component={Examination} />
          <Route exact path='/tcc'    component={FinalPaper}  />
          <Route exact path='/perfil' component={Profile}     />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
