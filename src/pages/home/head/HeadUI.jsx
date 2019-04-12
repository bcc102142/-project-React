import React, { Component } from 'react';

import {HeadStyled,SuggestItem,AsideMenu} from './HeadStyled'

import { HotSearch,BorderHotSearch } from '.././search/SearchStyled'

export default (props)=>{
     
    return (
        <HeadStyled isshow={props.isshow}>
        { 
           (function name(params) {
            switch(props.path){
                case 0 : return  <div className="headInput"><span></span><input type="text" onInput={props.inputHandler} onChange={props.changeHandler}  value={props.value}/></div>
                default : return <i onClick={props.clickHandler} ></i>
            }
           })()
        }
        <div style={{display:"flex"}}>
     
        {
            (function name(params) {
                switch(props.path){
                    case "/search" : return  <span  onClick={props.clickHandler} className="headCansel" >取消</span>
                    case "/searchItem" : return  <span  onClick={props.clickHandler} className="headCansel" >取消</span>
                    default : return  <i className="search"  onClick={(e)=>props.click(e)}></i>
                }
               })()
        }
     
        <i className="menu"  onClick={props.menuClickhandler}></i>
        </div>
        <SuggestItem display={props.display}>
            <HotSearch><BorderHotSearch>搜索:'{props.value}'</BorderHotSearch></HotSearch>
            <ul>
                {   
                    props.list.map(function(value){
                       let data = encodeURIComponent(value)
                    return (
                        <li onClick={(e,value)=>{props.click1(e,data)}} key={value}><a><i></i><span>{value}</span></a></li>
                        )
                    })
                }
            </ul>
        </SuggestItem>
            <AsideMenu  isshow={props.isshow}>
                <i  onClick={(data)=>props.loginHandler(props.isLogin ? "/alreadylogin" :"/login")}  className="login">
                    <div><img style={{height:".7rem",width:".7rem"}} src={props.userinfo.avatar?('http://localhost:3000')+props.userinfo.avatar:'//static.missevan.com/assets/images/home/default-icon.jpg'} alt=""/></div>
                    <span> {props.isLogin ? props.userinfo.username :"点击登陆"} </span>
                </i>
                <i onClick={props.homeHandler} className="aStyle toHome" >
                    M-主站
                </i>
                <i href="/" className="aStyle alive">
                    M-直播
                </i>
                <i href="/" className="aStyle wallet">
                    M-钱包
                </i>
            </AsideMenu>   
    </HeadStyled>
    )
}