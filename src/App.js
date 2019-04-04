import React, { Component } from 'react'


import Home from 'pages/home/Home'

import { Provider } from 'react-redux'

import store from './store/index'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home></Home>
      </Provider>
        
    )
  }
}
