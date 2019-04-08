import React, { Component } from 'react';

import {BorderedOtherHeadStyled,OtherStyled} from './OtherStyled'

import http from 'utils/fetch'


class Other extends Component {

    constructor(props){
        super(props)
        this.state ={
            list1:[],
            list2:[],
            list3:[],
            isload:false
        }
        this.fetchHandler()
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        console.log(1)
    }
    async fetchHandler(){
        let data = await http.get('/mobileWeb/catalogrank?cid=46')
        let data1 = await http.get('/mobileWeb/catalogmenu?order=3&cid=33&page_size=4')
        let data2 = await http.get('/mobileWeb/catalogmenu?order=3&cid=47&page_size=4')
        this.setState({
            list1 : data.info.slice(0,4),
            list2 : data1.info.Datas,
            list3 : data2.info.Datas

        },function(){
            this.setState({
                isload:true
            })
        })
    }
    render() {
        let list1 = this.state.list1
        let list2 = this.state.list2
        let list3 = this.state.list3

        return (
            <OtherStyled>
                {
                    this.state.isload ?(
                        <div>
                        <BorderedOtherHeadStyled>
                        <li><span className="active">全区动态</span></li> 
                            <li onClick={this.clickHandler}><span>有声日漫</span></li>
                        </BorderedOtherHeadStyled>
                        <div className="other-box">
                            <div className="channel-title">
                                <div className="channel-title-head">
                                    全区动态
                                </div>
                                <div className="channel-title-head-right">
                                    更多
                                </div>
                            </div>
                            <div className="other-box-body">
                            {
                                list1.map(function(value){
                                   let m = Math.floor(value.duration / 1000 /60)
                                   let s = Math.floor((value.duration - m*1000*60)/1000)
                                    s = s <10 ? "0"+s : s
                                    return (
                                        <a href="#" key={value.id}>
                                    <div className="img-box"><img style={{
                                        height:".7rem",width:".7rem"
                                    }} src={value.front_cover} alt=""/></div>
                                    <div className="other-item-right">
                                        <p>{value.soundstr}</p>
                                        <div className="other-item-right-center">
                                            <span>up主:   {value.username}</span>
                                        </div>
                                        <div className="other-item-right-bottom">   
                                            <span className="other-item-right-bottom-left">{value.view_count}</span>
                                            <span className="other-item-right-bottom-right">{m}:{s}</span>
                                        </div>
                                    </div>
                                </a>
                                    )
                                })
                            }
                                
                            </div>
                        </div>
    
                        <div className="other-box">
                            <div className="channel-title">
                                <div className="channel-title-head">
                                    有声日漫
                                </div>
                                <div className="channel-title-head-right">
                                    更多
                                </div>
                            </div>
                            <div className="other-box-body">
                            {
                                list2.map(function(value){
                                   let m = Math.floor(value.duration / 1000 /60)
                                   let s = Math.floor((value.duration - m*1000*60)/1000)
                                    s = s <10 ? "0"+s : s
                                    return (
                                        <a href="#" key={value.id}>
                                    <div className="img-box"><img style={{
                                        height:".7rem",width:".7rem"
                                    }} src={value.front_cover} alt=""/></div>
                                    <div className="other-item-right">
                                        <p>{value.soundstr}</p>
                                        <div className="other-item-right-center">
                                            <span>up主:   {value.username}</span>
                                        </div>
                                        <div className="other-item-right-bottom">   
                                            <span className="other-item-right-bottom-left">{value.view_count}</span>
                                            <span className="other-item-right-bottom-right">{m}:{s}</span>
                                        </div>
                                    </div>
                                </a>
                                    )
                                })
                            }
                                
                            </div>
                        </div>
    
                        <div className="other-box">
                            <div className="channel-title">
                                <div className="channel-title-head">
                                    有声中漫
                                </div>
                                <div className="channel-title-head-right">
                                    更多
                                </div>
                            </div>
                            <div className="other-box-body">
                            {
                                list3.map(function(value){
                                   let m = Math.floor(value.duration / 1000 /60)
                                   let s = Math.floor((value.duration - m*1000*60)/1000)
                                    s = s <10 ? "0"+s : s
                                    return (
                                        <a href="#" key={value.id}>
                                    <div className="img-box"><img style={{
                                        height:".7rem",width:".7rem"
                                    }} src={value.front_cover} alt=""/></div>
                                    <div className="other-item-right">
                                        <p>{value.soundstr}</p>
                                        <div className="other-item-right-center">
                                            <span>up主:   {value.username}</span>
                                        </div>
                                        <div className="other-item-right-bottom">   
                                            <span className="other-item-right-bottom-left">{value.view_count}</span>
                                            <span className="other-item-right-bottom-right">{m}:{s}</span>
                                        </div>
                                    </div>
                                </a>
                                    )
                                })
                            }
                                
                            </div>
                        </div>
                        </div>):(<img src="https://static.missevan.com/mimages/201603/29/f6b4a63596f56f2bc77d4fb467cab85c160911.gif
                " alt=""/>)
                }
          
            </OtherStyled>
        );
    }
}

export default Other;