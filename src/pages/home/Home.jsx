import React, { Component } from 'react'

import $ from 'jquery'

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
import Login from './login/Login'
import Register from './register/Register'
import AlreadyLogin from './alreadyLogin/AlreadyLogin'
import ChangePassword from './changePassword/ChangePassword'


import { connect } from 'react-redux'

const mapDispatch = (dispatch)=>{
  return {
      setLoginHandler(){
        dispatch({
          type:"getState",
          isLogin:true
        })
      }
  }
}

class Home extends Component {
  constructor(props){
    super(props)

  }
  componentDidMount(){
    if(localStorage.getItem('token')){
      console.log('不会执行了')
      // this.props.setLoginHandler()
      return
    }else{
      this.userHandler()
      console.log('执行了')
      
    }
    
    
  }
  userHandler(){
    //判断是否登陆
    this.userLoginAuthAction()
      .then(res => { // 已经登陆的状态
          this.props.history.push("/alreadyLogin")
      }).catch(err => {
          console.log('catch', err)
      })
  }
  userLoginAuthAction(){
      return new Promise(async (resolve, reject) => {
          
          let data = await this.userLoginAuth()
          
          if (data.code === 200) {
              resolve()
          } else {
              reject()
          }
      })
  }
  userLoginAuth(){
      return $.ajax({
          url:'/api/v1/users/auth',
          data:{
              token:localStorage.token
          }
      })
  }

  render() {
    return (
      <HomeContainer id="home">
       <script src="https://cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.js"></script>
        <div style={{
           display:'flex',
           flexDirection:'column',
        }}>
          <div id='top' styled={{position:'absolute',top:0}}></div>
        <Head></Head>
        {/* <Body></Body> */}
           
        <Switch>
            <Route exact path="/" component={Body}/>
            <Route path="/catalogs/:params" component={Detail}/>
            <Route path="/recommend/ranking" component={Ranking}/>
            <Route path="/album/:id" component={RankingDetail}/>
            <Route path="/search" component={Search}/>
            <Route path="/searchItem/:id" component={SearchDetail}/>
            <Route path="/item/:id" component={SoundDetail}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/alreadyLogin" component={AlreadyLogin}/>
            <Route path="/changePassword" component={ChangePassword}/>

        </Switch>
        <Footer></Footer>
        </div>
      </HomeContainer>
    )
  }
  
  
}
export default  withRouter(connect(null,mapDispatch)(Home))
