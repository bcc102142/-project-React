import React, { Component } from 'react';

import {AlreadyLoginStyle} from './AlreadyLoginStyle'

import { connect } from 'react-redux'

import {withRouter} from 'react-router-dom'

const mapState = (state)=>{
    return {
        info : state.isLogin.info
    }
}

class AlreadyLogin extends Component {
    constructor(props){
        super(props)
        this.exit = this.exit.bind(this)
        this.changePassword = this.changePassword.bind(this)
        
    }
    exit(){
        localStorage.removeItem('token')
         this.props.history.push("/login")
         window.location.reload()
    }
    changePassword(){
        this.props.history.push("/changePassword")
    }
    render() {
        let likeList = this.props.info.like ? this.props.info.like :[]
        return (
            <AlreadyLoginStyle>
                <div  className="username">
                    <div><img style={{height:".7rem",width:".7rem"}} src={('http://localhost:3000')+this.props.info.avatar} alt=""/></div>
                    <span>用户名: {this.props.info.username} </span>
                </div>
                
                <div className="changePassword" onClick={this.changePassword}>修改密码 </div>
                
                <div className="mylike">我的喜欢
                    {
                        likeList.map((value,index)=>{
                            return (
                                <span key={index}>{value.list_id}</span>
                            )
                        })
                    }
                    
                </div>
                <div className="exit" onClick={this.exit}>退出登陆</div>
            </AlreadyLoginStyle>
        );
    }
}

export default withRouter(connect(mapState)(AlreadyLogin));