import React, { Component } from 'react';

import {AlreadyLoginStyle} from './AlreadyLoginStyle'

import { connect } from 'react-redux'

import { setLikeListAsync } from './actionCreator'

import {withRouter} from 'react-router-dom'

import http from 'utils/fetch'

import request from 'utils/request';

const mapState = (state)=>{
    return {
        info : state.isLogin.info
    }
}

const mapDispatch = (dispatch)=>{
    return {
        getLikeList(data){
            dispatch({
                type : 'getLikeList',
                likeList:data
            })
        }
        //换成在action中获取
        // setLikeList(id){
        //     dispatch(setLikeListAsync(id))
        // }
    }
}

class AlreadyLogin extends Component {
    constructor(props){
        super(props)
        this.state={
            itemList:[]
        }
        this.exit = this.exit.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.click = this.click.bind(this)
        
       
    }
    click(data){
        this.props.history.push("/item/"+data)
        window.location.reload()
    }
     fetchHandler(){
        let arr = []
        if(this.props.info.like){
            this.props.info.like.map(async(value)=>{
                let url = '/sound/getsound?soundid='+value.list_id
                let data = await http.get(url)
                arr.push(data.info.sound)
                this.props.getLikeList(arr)
                localStorage.setItem('likeList',JSON.stringify(arr))
                // this.props.setLikeList(value.list_id)
            })
        }
    }
    exit(){
        localStorage.removeItem('token')
        localStorage.removeItem('likeList')
         this.props.history.push("/login")
         window.location.reload()
    }
    changePassword(){
        this.props.history.push("/changePassword")
    }
   
   
    render() {
        let likeList = this.props.info.like ? this.props.info.like :[]
        
        if(localStorage.getItem('likeList')){
            this.fetchHandler()
        }
        return (
            <AlreadyLoginStyle>
                <div className="bg">
                    
                </div>
                <div  className="username">
                        <div><img style={{height:".7rem",width:".7rem"}} src={('http://localhost:3000')+this.props.info.avatar} alt=""/></div>
                        <span> {this.props.info.username} </span>
                </div>
                <div className="userList">
                    <ul>
                        <li >
                            <p>0</p>
                            <span>声音</span>
                        </li>
                        <li><p>0</p>
                            <span>音单</span></li>
                        <li><p>0</p>
                            <span>关注</span></li>
                        <li><p>0</p>
                            <span>粉丝</span></li>
                    </ul>
                </div>
                <div className="changePassword" onClick={this.changePassword}>修改密码 </div>
                
                <div className="mylike">我的喜欢
                    <div className="mylikeList">
                    {
                        localStorage.getItem('likeList') ? JSON.parse(localStorage.getItem('likeList')).map( (value)=>{
                            return (
                                <a onClick={(data)=>this.click(value.id)} key={value.id}>
                                    <img  src={value.front_cover} alt=""/>
                                    <div className="channel-body-title">{value.soundstr}</div>
                                    <div className="channel-body-bottom">
                                        <span className="channel-body-palytimes">{value.view_count}</span>
                                        <span className="channel-body-comments">{value.all_comments}</span>
                                    </div>
                                </a>
                            )
                        }):('')
                    }


                    </div>
                </div>
                <div className="exit" onClick={this.exit}>退出登陆</div>
            </AlreadyLoginStyle>
        );
    }
}

export default withRouter(connect(mapState,mapDispatch)(AlreadyLogin));