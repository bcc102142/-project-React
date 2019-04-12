import React, { Component } from 'react';

import http from 'utils/fetch'

import { withRouter } from 'react-router-dom'

import RankingUI from './RankingUI'
class Ranking extends Component {
    constructor(props){
        super(props)
        this.state = {
            list :[],
            isload:false
        }
        this.preventDefault =this.preventDefault.bind(this)
        this.fetchHandler()
    }
   async fetchHandler(){
      let data = await http.get('/mobileWeb/albumList')
      this.setState({
          list : data.info
      },function(){
        this.setState({
            isload:true
        })
    })
    }

    preventDefault(value){
        this.props.history.push("/album/"+value)
    }
    render() {
        let list = this.state.list ? this.state.list :[]
        return (
            <RankingUI {...this.state} click={this.preventDefault} ></RankingUI>
            
        );
    }
}

export default withRouter(Ranking);