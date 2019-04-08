import React, { Component } from 'react'


import Home from 'pages/home/Home'

import { Provider } from 'react-redux'

import { BrowserRouter as Router } from 'react-router-dom'

import store from './store/index'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Home></Home>
        </Router>
      </Provider>
        
    )
  }
}
