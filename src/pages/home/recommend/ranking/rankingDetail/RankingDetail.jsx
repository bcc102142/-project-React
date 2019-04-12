import React, { Component } from 'react';

import http from 'utils/fetch'

import RankingDetailUI from './RankingDetailUI'

class RankingDetail extends Component {
    constructor(props){
        super(props)
        this.state ={
            info:{},
            isload:false
        }
        this.fetchHandler()
    }
   async fetchHandler(){
       let url ='/sound/soundalllist?albumid=' + this.props.match.params.id
        let data = await http.get(url)
        this.setState({
            info:data.info
        },function(){
            this.setState({
                isload:true
            })
        })
   
    }
    render() {
        let album = this.state.info.album ? this.state.info.album :{}
        let list = this.state.info.sounds ? this.state.info.sounds : []
        return (
            <RankingDetailUI {...this.state}></RankingDetailUI>
        );
    }
}

export default RankingDetail;