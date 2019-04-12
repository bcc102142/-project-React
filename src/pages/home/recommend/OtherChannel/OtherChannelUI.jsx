import React, { Component } from 'react';

import {OtherChannelStyled} from './OtherChannelStyled'


export default (props) => {
    return (
        <OtherChannelStyled>
        <div className="channel-title">
           <div className="channel-title-head">
               <i></i>
               频道
           </div>
           <div className="channel-title-nav">
               更多
           </div>
       </div>
       <div className="channel-body">
       {
           props.list.map(function(value,index){
               return (
                   <a href={"/channel/"+value.id} key={value.id}>
                   <div className="imgbox">
                       <img style={{width:"100%" ,height: "100%"}} src={value.smallpic} alt=""/>
                       <div className="commentQuantity">
                           <span>{value.follow_num}</span>
                       </div> 
                       <div className="title">{value.name}</div>
                   </div>
               </a>
                   )
           })
       }
       </div>
   </OtherChannelStyled>
    )
}
