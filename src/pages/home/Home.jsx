import React, { Component } from 'react'

import {
  HomeContainer
} from './HomeStyled'

import Head from 'pages/home/head/Head'
import Footer from 'pages/home/footer/Footer'

import Body from './Body'


export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Head></Head>
        <Body></Body>
        <Footer></Footer>
      </HomeContainer>
    )
  }
}
