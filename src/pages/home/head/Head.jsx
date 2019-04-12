import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'

import http from 'utils/fetch'

import HeadUI from './HeadUI'

import req from "utils/req"

import _ from 'lodash'

import { connect } from 'react-redux'

import { setUserInfoSync,setUserInfoAsync } from './actionCreator'

const mapState = (state)=>{
    return {
        isLogin:state.isLogin.isLogin,
        urlParams:state.urlParams.urlParams
    }
}

const mapDispatch = (dispatch)=>{
    return {
        setLoginHandler(){
          dispatch({
            type:"getState",
            isLogin:true
          })
        },
        setUserInfo(data){
            dispatch({
                type:"setUserInfo",
                info:data
            })
        }
    }
  }

class Head extends Component {
    constructor(props){
        super(props)
        this.state ={
            value : props.location.pathname.split('/')[2] || '' ,
            display:'none',
            list : [],
            isshow:false,
            userinfo:{}
            
        }
        if(localStorage.getItem('token')){
            this.props.setLoginHandler()
        }
        

        this.clickHandler = this.clickHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
        // this.inputHandler = _.debounce(this.inputHandler.bind(this), 100)
        this.inputHandler = this.inputHandler.bind(this)
        this.menuClickhandler = this.menuClickhandler.bind(this)
        this.preventDefault =this.preventDefault.bind(this)
        this.preventDefault1 =this.preventDefault1.bind(this)
        this.homeHandler =this.homeHandler.bind(this)
        this.loginHandler = this.loginHandler.bind(this)

        
     


    }
    async componentDidMount(){
        
        let data = await this.getUserInfo()
        this.setState({
            userinfo:data
        },function(){
            this.props.setUserInfo(this.state.userinfo)
        })
        
    }
    render() {
        
        // let paramsId = props.location.pathname.split('/')[2]
        let path = this.props.location.pathname.indexOf('/search');
        let that = this
        return (
            <HeadUI  loginHandler={this.loginHandler} homeHandler={this.homeHandler} {...this.state} {...this.props} path={path} click1={this.preventDefault1} click={this.preventDefault} clickHandler={this.clickHandler} changeHandler={this.changeHandler} menuClickhandler={this.menuClickhandler} inputHandler={this.inputHandler} ></HeadUI>
        );
    }
    
    preventDefault(e){
        e.preventDefault()
        this.props.history.push("/search")
    }
    preventDefault1(e,value){
        this.setState({
            value : value,
            display:'none'
        })
        this.props.history.push("/searchItem/"+ encodeURIComponent(value))
        window.location.reload()
    }
    loginHandler(data){
        this.setState({
            isshow:false
        })
        this.props.history.push(data)
        if(data==='/alreadylogin'){
            window.location.reload()
        }
    }
    clickHandler(){
        this.props.history.push("/")
    }
    homeHandler(){
        this.setState({
            isshow:false
        })
        this.props.history.push("/")
    }
    changeHandler(e){
        this.setState({
            value : window.event.target.value
        })
    }
    menuClickhandler(){
        this.setState({
            isshow:!this.state.isshow
        })
    }
    inputHandler(){
        //改变输入框状态
        this.setState({
            value : window.event.target.value,
            display:'block'
        },function(){
             //请求数据
            this.fetchHandler()
            if(this.state.value === ''){
                this.setState({
                    display:'none'
                })
            }
        })
       
    }
    getUserInfo(){
        return req({
            url: '/api/v1/users/info'
        })
    }
   async fetchHandler(){
       let url = '/sound/suggest?s='+this.state.value
       let data = await http.get(url)
       this.setState({
            list : data.info
       })
   }
}

export default   withRouter(connect(mapState,mapDispatch)(Head)) ;