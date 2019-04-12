import React, { Component } from 'react';

import http from 'utils/fetch'

import SearchDetailUI from './SearchDetailUI'

class SearchDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            list : [],
            isload:false
        }
        this.fetchHandler()
    }
   async fetchHandler(){
        let params = this.props.match.params.id
        let url = '/dramaapi/search?s='+params+'&p=1'
        let data = await http.get(url)
        this.setState({
            list:data.info.Datas.slice(0,3)
        },function(){
            this.setState({
                isload:true
            })
        })
    }
    render() {
        return (
            <SearchDetailUI {...this.state}></SearchDetailUI>
        );
    }
}

export default SearchDetail;