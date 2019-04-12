import React, { Component } from 'react';

import $ from 'jquery'

import {withRouter} from 'react-router-dom'

import {RegisterStyle,BorderedRegisterUsername} from './RegisterStyle'
class Register extends Component {
    constructor(props){
        super(props)
        this.submitHandler = this.submitHandler.bind(this)
        this.login = this.login.bind(this)

    }

    renderRegisterError(res){
        $('.register-error').text(res.msg).fadeIn(1000)  ;
        $('.register-error').text(res.msg).fadeOut(1000)
    }
    login(){
        this.props.history.push("/login")
    }
    submitHandler(){
        let that = this
        let $registerForm = this.refs.register
        let $registerInps = {
            username: this.refs.username,
            password: this.refs.password,
        }
        // $registerForm.submit(this.register)
           let username = $registerInps.username.value
            let password = $registerInps.password.value
            $.ajax({
                url: '/api/v1/users/register',
                type: 'post',
                data: {
                    username,
                    password
                }
            }).done(function(res) {
                if ( res.code === 200 ) {
                    
                    $('.register-error').text(res.msg).fadeIn(1000)  ;
                    $('.register-error').text(res.msg).fadeOut(1000)
                   setTimeout(() => {
                    that.props.history.push("/login")
                   },1000)
                }else{
                    that.renderRegisterError(res)
                }
            })
        }
    render() {
        return (
            <RegisterStyle>
                <div className="RegisterFormBox">
                <form action="" ref="register">
                    <div className="title">注册账号</div>
                    <BorderedRegisterUsername ><input type="text" placeholder="账号" ref="username"/></BorderedRegisterUsername>
                    <BorderedRegisterUsername ><input type="text" placeholder="密码" ref="password"/></BorderedRegisterUsername>
                    <div className="btnRegister" onClick={this.submitHandler}>注册</div>
                    <div className="register-error"></div>
                    <div className="returnLogin">
                        <p>用邮箱注册</p>
                        <a onClick={this.login}>返回登陆 ></a>
                    </div>
                </form>
                </div>
            </RegisterStyle>
        );
    }
}

export default withRouter(Register);