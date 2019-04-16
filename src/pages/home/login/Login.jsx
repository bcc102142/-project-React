import React, { Component } from 'react';

import $ from 'jquery'

import { connect } from 'react-redux'

import { withRouter} from 'react-router-dom'

import {LoginStyle,BorderedloginUsername,BorderedLoginCode} from './LoginStyle'

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

class Login extends Component {
    constructor(props){
        super(props)
        this.changeCode = this.changeCode.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
        this.register = this.register.bind(this)

    }
    register(){
        this.props.history.push("/register")
    }
    changeCode(){
        this.getCode ()
    }
    getCode () { // 验证码
        $.ajax({url: '/api/v1/users/code'})
            .done(res => {
                $('.code').html(res.img)
                document.cookie="mark="+res.mark;
            })
    }
    submitHandler(){
        let that = this
        let $loginForm = this.refs.login
        let $loginInps = {
            username: this.refs.lusername,
            password: this.refs.lpassword,
            code:this.refs.code
        }
           let username = $loginInps.username.value
            let password = $loginInps.password.value
            let code = $loginInps.code.value
            $.ajax({
                url: '/api/v1/users/login',
                type: 'post',
                data: {
                    username,
                    password,
                    code
                }
            }).done(function(res) {
                console.log(res)
                if ( res.code === 200 ) {
                    localStorage.token = res.data.token
                    // localStorage.rank = res.data.rank
                    $('.login-error').text(res.msg).fadeIn(1000)  ;
                    $('.login-error').text(res.msg).fadeOut(1000)
                   setTimeout(() => {
                    that.props.setLoginHandler()
                    that.props.history.push("/alreadyLogin") 
                    window.location.reload()
                   },1000)
                  
                }else{
                    that.renderLoginError(res)
                }
                
            })
    }
    renderLoginError(res){
        $('.login-error').text(res.msg).fadeIn(1000)
        $('.login-error').text(res.msg).fadeOut(1000)
    }
    componentDidMount(){
        this.getCode ()
    }
    render() {
        
        return (
            <LoginStyle>
                <div className="LoginFormBox">
                <form action="" ref='login'>
                    <div className="title">登陆 猫耳FM</div>
                    <BorderedloginUsername className="loginUsername"><input type="text" placeholder="账号" ref="lusername"/></BorderedloginUsername>
                    <BorderedloginUsername className="loginPassword"><input type="password" placeholder="密码" ref="lpassword"/></BorderedloginUsername>
                    <div className="codeBox">
                        <BorderedLoginCode><input type="text" placeholder="验证码" ref="code"/></BorderedLoginCode>
                        <div className="code"  onClick={this.changeCode} >111</div>
                    </div>
                    <div className="login-error" ></div>
                    <div className="tip">
                        <input type="checkbox"/>
                        <p>记住我</p>
                        <span>海外手机登陆</span>
                    </div>
                    <div  className="btnLogin" onClick={this.submitHandler}>登陆</div>
                    <a onClick={this.register} className="btnRegister">注册</a>
                    <div className="otherLogin">
                        <span>第三方登录</span>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </form>
                </div>

           
            </LoginStyle>
        );
    }
}

export default  withRouter(connect(null,mapDispatch)(Login))
