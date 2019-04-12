import React, { Component } from 'react';

import {DetailStyled} from './DetailStyled'

import Drama from './drama/Drama'

import Other from './other/Other'

export default (props) =>{
    return (
      
            <DetailStyled>
                {
                        <div>
                        <div className="detail-head">{props.title}</div>{
                            props.params === 'drama' ?(<div className="two-butoon" >
                            <a href="#" className="updateTime">更新时间</a>
                            <a href="#" className="filter">分类筛选</a>
                        </div>) :""
                        }
                         { props.params === 'drama' ? <Drama ></Drama> : <Other id={props.params}></Other>}
                         </div> 
                }
               
                
            </DetailStyled>
        
    )
}