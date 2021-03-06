import React, { Component } from 'react';

import {RecommendStyled} from './RecommendStyled'
import Swiper from './swiper/swiper'
import Channel from './channel/Channel'
import ChannelO from './channel.1/ChannelO'

import OtherChannel from './OtherChannel/OtherChannel'
import http from 'utils/fetch'
class Recommend extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <RecommendStyled>
                <Swiper ></Swiper>
                <ChannelO></ChannelO>
                <OtherChannel></OtherChannel>
                <Channel></Channel>
            </RecommendStyled>
        );
    }
}

export default Recommend;