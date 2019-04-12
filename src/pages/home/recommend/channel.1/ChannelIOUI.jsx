import React, { Component } from 'react';

import {ChannelStyled} from './ChannelStyled'

const ChannelIOUI = (props) => {
    return (
        <ChannelStyled>
        <div className="channel-title">
            <div className="channel-title-head">
                <i style={{
                backgroundPosition: "-22px 0",
                backgroundImage: "url('//static.missevan.com/assets/m/images/build/sprite-icons-catalog@2x.1144a958.png')"
            }}></i>
                人气M音
            </div>
            <div className="channel-title-nav" onClick={props.onClick}>
                排行榜
            </div>
        </div>
        <div className="channel-body" id="channel-body-scroll">
        <div  style={{display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                margin : "0 .14rem"}}>
        {
            props.list.map((value)=>{
               return( <a onClick={(data)=>props.click(value.id)} key={value.id} style={{padding:"0 .1rem"}}>
                    <img src={value.front_cover} alt=""/>
                    <div className="channel-body-title">{value.soundstr}</div>
                    <div className="channel-body-bottom">
                        <span className="channel-body-palytimes">{value.view_count}</span>
                        <span className="channel-body-comments">{value.comment_count}</span>
                    </div>
                </a>)
            })
        }
        </div>
            
        </div>
    </ChannelStyled>
    )
}

export default ChannelIOUI