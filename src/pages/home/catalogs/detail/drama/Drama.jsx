import React, { Component } from 'react';

import http from 'utils/fetch'

import DramaUI from './DramaUI'

class Drama extends Component {
    constructor(props){
        super(props)
        this.state ={
            list:[],
            isload :false
        }
        this.fetchHandler()
    }
    render() {
        let last = this.state.list.last ?this.state.list.last :[]
        let classic = this.state.list.classic ?this.state.list.classic :[]
        let recommend = this.state.list.recommend ?this.state.list.recommend :[]
        
        return (
            <DramaUI {...this.state}></DramaUI>
        );
    }
   async fetchHandler(){
        let data =await http.get('/drama/rest/mobile/homepage')
        this.setState({
            list : data.info
        },function(){
            this.setState({
                isload:true
            })
        })
    }
}

export default Drama;