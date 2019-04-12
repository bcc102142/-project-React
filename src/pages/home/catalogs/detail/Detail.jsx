import React, { Component } from 'react';

import DetailUI from './DetailUI'

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
            case "46" : 
            title = "有声漫画";break;
            case "8" : 
            title = "音乐";break;
            case "54" : 
            title = "催眠";break;
            case "26" : 
            title = "娱乐";break;
            case "41" : 
            title = "日抓";break;
            case "6" : 
            title = "听书";break;
            case "52" : 
            title = "配音";break;
            case "65" : 
            title = "铃声";break;
        }
        return (
            <DetailUI title={title} params={params}></DetailUI>
        );
    }
}

export default Detail;