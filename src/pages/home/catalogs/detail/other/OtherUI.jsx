import React, { Component } from 'react';

import {BorderedOtherHeadStyled,OtherStyled} from './OtherStyled'

export default (props) =>{
    let son = props.son.son ? props.son.son :{}
    let arr = [{catalog_name:'全区动态',id:1}]
    
    for( let key in son ){
         arr.push(son[key])  
    }
    // let arr2 = [...arr,{id:2}]
    let List =[...props.list]
    Object.values(son).map((value,index)=>{
       if (List[index]){
        List[index].catalog_name = value.catalog_name
        List[index].id = value.id
       }
    })

    return (
        <OtherStyled>
            {
                props.isload ?(
                    <div>
                    <BorderedOtherHeadStyled>
                        {
                            arr.map((value,index)=>{
                                return (
                                    <li  onTouchStart={() => props.navclick(value, arr)} onClick={ ()=>{props.click(index)} } key={value.id}><a className={props.index === index ? 'active' :''} >{value.catalog_name}</a></li>
                                )
                            })
                        }
                    </BorderedOtherHeadStyled>
                    <div className="bcroll" style={{height:"5.45rem"}}>
                    <div>
                    <div id="1" className="other-box">
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
                            props.list1.map(function(value){
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
                        {
                            List.map((value1,index1) =>{
                                return (
                                    <div  className="other-box" key={value1.catalog_name} >
                            <div className="channel-title">
                                <div className="channel-title-head">
                                    {value1.catalog_name}
                                </div>
                                <div className="channel-title-head-right">
                                    更多
                                </div>
                            </div>
                            <div  className="other-box-body">
                            {
                                value1.Datas.map(function(value,index){
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
                                )
                            })
                            
                        }
                    </div>
                </div>
                </div>
                ) :(<img src="https://static.missevan.com/mimages/201603/29/f6b4a63596f56f2bc77d4fb467cab85c160911.gif
                " alt=""/>)
            }
                       
            </OtherStyled>
    )
}