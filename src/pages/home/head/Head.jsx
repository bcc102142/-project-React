import React, { Component } from 'react';

import {HeadStyled,SuggestItem,AsideMenu} from './HeadStyled'

import { withRouter } from 'react-router-dom'

import { HotSearch,BorderHotSearch } from '.././search/SearchStyled'

import http from 'utils/fetch'

class Head extends Component {
    constructor(props){
        super(props)
        this.state ={
            value :(new URLSearchParams(this.props.location.search)).get("s") || '',
            display:'none',
            list : [],
            isshow:false,
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
        this.inputHandler = this.inputHandler.bind(this)
        this.menuClickhandler = this.menuClickhandler.bind(this)

    }
    render() {
        let path = this.props.location.pathname;
        let that = this
        return (
            <HeadStyled isshow={this.state.isshow}>
                { 
                   (function name(params) {
                    switch(path){
                        case "/search" : return  <div className="headInput"><span></span><input type="text" onInput={that.inputHandler} onChange={that.changeHandler}  value={that.state.value}/></div>
                        case "/searchItem" : return  <div className="headInput"><span></span><input type="text"  onInput={that.inputHandler} onChange={that.changeHandler} value={that.state.value}/></div>
                        default : return <i onClick={that.clickHandler} ></i>
                    }
                   })()
                }
                <div style={{display:"flex"}}>
                <a href="/search">
                {
                    (function name(params) {
                        switch(path){
                            case "/search" : return  <a href="/" className="headCansel" >取消</a>
                            case "/searchItem" : return  <a href="/" className="headCansel" >取消</a>
                            default : return  <i className="search"></i>
                        }
                       })()
                }
                </a>
                <i className="menu"  onClick={this.menuClickhandler}></i>
                </div>
                <SuggestItem display={this.state.display}>
                    <HotSearch><BorderHotSearch>搜索:'{this.state.value}'</BorderHotSearch></HotSearch>
                    <ul>
                        {   
                            this.state.list.map(function(value){
                               let data = encodeURIComponent(value)
                            return (
                                <li key={value}><a href={"/searchItem?s="+ data}><i></i><span>{value}</span></a></li>
                                )
                            })
                        }
                    </ul>
                </SuggestItem>
                    <AsideMenu  isshow={this.state.isshow}>
                        <a href="#" className="login">
                            <div><img src="//static.missevan.com/assets/images/home/default-icon.jpg" alt=""/></div>
                            <span>点击登陆</span>
                        </a>
                        <a href="/" className="aStyle toHome" >
                            M-主站
                        </a>
                        <a href="/" className="aStyle alive">
                            M-直播
                        </a>
                        <a href="/" className="aStyle wallet">
                            M-钱包
                        </a>
                    </AsideMenu>   
            </HeadStyled>
        );
    }
    clickHandler(){
        this.props.history.push('/')
    }
    changeHandler(e){
        this.setState({
            value : e.target.value
        })
    }
    menuClickhandler(){
        console.log(this.state.isshow.toString())
        this.setState({
            isshow:!this.state.isshow
        })
    }
    inputHandler(e){
        //改变输入框状态
        this.setState({
            value : e.target.value,
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
   async fetchHandler(){
       let url = '/sound/suggest?s='+this.state.value
       let data = await http.get(url)
       this.setState({
            list : data.info
       })
   }
}

export default withRouter(Head);