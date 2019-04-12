import React, { Component } from 'react';

import $ from 'jquery'

import {BorderedChangePasswordUsername,ChangePasswordStyle} from './ChangePasswordStyle'

class ChangePassword extends Component {
    constructor(props){
        super(props)
        this.submitHandler = this.submitHandler.bind(this)
        this.login = this.login.bind(this)

    }
    login(){
        this.props.history.push("/alreadyLogin")
    }
    submitHandler(){
        let that = this
        let $changePasswordform = this.refs.ChangePassword
        let $passwordOne = this.refs.passwordOne
        let $passwordTwo = this.refs.passwordTwo

        let passwordOne = $passwordOne.value
        let passwordTwo = $passwordTwo.value
            $.ajax({
                url: '/api/v1/users/change',
                type: 'post',
                data: { 
                    passwordOne:passwordOne,
                    password: passwordTwo ,
                    token:localStorage.token,
                    passwordTwo:passwordTwo
                },
                
            }).done(function(res) {
                console.log(res)
                if ( res.code === 200 ) {
                    //退出登陆，回到登陆界面
                    
                        $('.ChangePassword-error').text("修改成功,请重新登陆").fadeIn(1000)  ;
                        $('.ChangePassword-error').text("修改成功,请重新登陆").fadeOut(1000)
                    localStorage.removeItem('token')
                    setTimeout(function(){
                       //成功后返回用户界面
                       that.props.history.push("/login")
                    },2000)
                }else{
                    $('.ChangePassword-error').text(res.msg).fadeIn(1000)  ;
                    $('.ChangePassword-error').text(res.msg).fadeOut(1000)
                }
                
            })
       }
    render() {
        return (
            <ChangePasswordStyle>
                   <div className="ChangePasswordFormBox">
                    <form action="" ref="ChangePassword">
                        <div className="title">修改密码</div>
                        <BorderedChangePasswordUsername ><input type="text" placeholder="密码" ref="passwordOne"/></BorderedChangePasswordUsername>
                        <BorderedChangePasswordUsername ><input type="text" placeholder="二次密码" ref="passwordTwo"/></BorderedChangePasswordUsername>
                        <div className="btnChangePassword" onClick={this.submitHandler}>修改</div>
                        <div className="ChangePassword-error"></div>
                    </form>
                    <div className="returnLogin">

                        <a onClick={this.login}>返回登陆 ></a>
                    </div>
                </div>
            </ChangePasswordStyle>
        );
    }
}

export default ChangePassword;