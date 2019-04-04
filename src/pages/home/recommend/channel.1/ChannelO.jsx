import React, { Component } from 'react';

import {ChannelStyled} from './ChannelStyled'

import Bscroll from 'better-scroll'

import {connect} from 'react-redux'

const mapState = (state)=>{
    return {
        data:state.data
    }
}

class ChannelO extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        new Bscroll('#channel-body-scroll',{
            scrollX:true,
            click:true
        })
    }
    render() {
        // let list0 = this.state.data.music ? this.state.data.music[0].objects_point: []
        let list = this.props.data.info ?  this.props.data.info.sound :[]
        console.log(list)
        return (
            
            <ChannelStyled>
                <div className="channel-title">
                    <div className="channel-title-head">
                        <i style={{
                        backgroundPosition: "-22px 0",
                        backgroundImage: "url('//static.missevan.com/assets/m/images/build/sprite-icons-catalog@2x.1144a958.png')"
                    }}></i>
                        有声漫画
                    </div>
                    <div className="channel-title-nav">
                        更多
                    </div>
                </div>
                <div className="channel-body" id="channel-body-scroll">
                <div  style={{display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        margin : "0 .14rem"}}>
                {
                    list.map((value)=>{
                       return( <a href="#" key={value.id} style={{padding:"0 .1rem"}}>
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
       
        );
    }
}

export default connect(mapState)(ChannelO)