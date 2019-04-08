import React, { Component } from 'react'

import {
  HomeContainer
} from './HomeStyled'

import Head from 'pages/home/head/Head'
import Footer from 'pages/home/footer/Footer'
import BScroll from 'better-scroll'
import { Switch,Route,withRouter} from 'react-router-dom'

import Detail from './catalogs/detail/Detail.jsx'
import Body from './Body'
import Ranking from './recommend/ranking/Ranking.jsx'
import RankingDetail from './recommend/ranking/rankingDetail/RankingDetail'
import Search from './search/Search'
import SearchDetail from './search/searchDetail/SearchDetail'
import SoundDetail from './soundDetail/SoundDetail'




class Home extends Component {
  render() {
    return (
      <HomeContainer id="home">
        <div>
          <div id='top' styled={{position:'absolute',top:0}}></div>
        <Head></Head>
        {/* <Body></Body> */}
           
        <Switch>
            <Route exact path="/" component={Body}/>
            <Route path="/catalogs/:params" component={Detail}/>
            <Route path="/recommend/ranking" component={Ranking}/>
            <Route path="/album/:id" component={RankingDetail}/>
            <Route path="/search" component={Search}/>
            <Route path="/searchItem" component={SearchDetail}/>
            <Route path="/item/:id" component={SoundDetail}/>

            
        </Switch>
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
export default  withRouter(Home)
