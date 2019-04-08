import React, { Component } from 'react';

import {DetailStyled} from './DetailStyled'

import Drama from './drama/Drama'

import Other from './other/Other'

class Detail extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let params = this.props.match.params.params
        let title =''
        switch(params){
            case "drama" : 
            title = "广播剧";break;
            case "cartoon" : 
            title = "有声漫画";break;
            case "music" : 
            title = "音乐";break;
            case "hypnosis" : 
            title = "催眠";break;
            case "amusement" : 
            title = "娱乐";break;
            case "dayCatch" : 
            title = "日抓";break;
            case "Lbooks" : 
            title = "听书";break;
            case "dub" : 
            title = "配音";break;
            case "ring" : 
            title = "铃声";break;
        }
        return (
            <DetailStyled>
                <div className="detail-head">{title}</div>{
                    params === 'drama' ?(<div className="two-butoon" >
                    <a href="#" className="updateTime">更新时间</a>
                    <a href="#" className="filter">分类筛选</a>
                </div>) :""
                }
                 { params === 'drama' ? <Drama></Drama> : <Other></Other>}
                
            </DetailStyled>
        );
    }
}

export default Detail;