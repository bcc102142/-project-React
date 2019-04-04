import React, { Component } from 'react'

import {
  HomeContainer
} from './HomeStyled'

import Head from 'pages/home/head/Head'
import Footer from 'pages/home/footer/Footer'
import BScroll from 'better-scroll'

import Body from './Body'


export default class Home extends Component {
  render() {
    return (
      <HomeContainer id="home">
        <div>
        <Head></Head>
        <Body></Body>
        <Footer></Footer>
        </div>
      </HomeContainer>
    )
  }
  componentDidMount(){
    // new BScroll('#home',{
    //   click:true
    // })
  }
}
