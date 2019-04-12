import React, { Component } from 'react';

import {SearchDetailStyled,BorderedsearchDetailitem} from './SearchDetailStyled'

export default (props) => {
    return (
        <SearchDetailStyled>
        {
            props.isload?(
                <div>
                <div className="searchDetailList">
                <a href="#">
                {
                    props.list.map(function(value){
                        return (
                            <BorderedsearchDetailitem key={value.id}>
                                <div style={{width:".7rem",height:".7rem"}}><img style={{width:".7rem",height:".7rem"}} src={value.cover} alt=""/></div>
                                <div className="searchDetailListRight">
                                    <p>{value.name}</p>
                                    <div>
                                        <span>{value.catalog_name}</span><span>类型：{value.type_name}</span>
                                    </div>
                                    <div>{
                                        value.serialize ?<span style={{color:"#000"}}>更新至： {value.newest}</span> :'已完结'
                                    }</div>
                                </div>
                            </BorderedsearchDetailitem>
                        )
                    })
                }
                </a>
            </div>
            </div>):(<img src="https://static.missevan.com/mimages/201603/29/f6b4a63596f56f2bc77d4fb467cab85c160911.gif
        " alt=""/>)
        }
       
    </SearchDetailStyled>
    )
}