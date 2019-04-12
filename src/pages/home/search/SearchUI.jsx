import React, { Component } from 'react';

import { SearchStyled,HotSearch,BorderHotSearch,Bordera } from './SearchStyled'

export default (props)=>{
    return (
        <SearchStyled>
                {
                    props.isload ? (
                        <div>
                        <HotSearch><BorderHotSearch>热门搜索</BorderHotSearch></HotSearch>
                        <div className="searchContent">
                        {
                            props.list.map(function(value){
                                let value1 = value.key
                                return (
                                    <Bordera onClick={()=>props.click(value.key)}   key={value.key}>{value.key}</Bordera>
                                )
                            })
                        }
                        </div>
                        </div>):(<img src="https://static.missevan.com/mimages/201603/29/f6b4a63596f56f2bc77d4fb467cab85c160911.gif
                " alt=""/>)
                }
              
            </SearchStyled>
    )
}