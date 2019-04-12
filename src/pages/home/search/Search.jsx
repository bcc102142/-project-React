import React, { Component } from 'react';

import http from 'utils/fetch'

import SearchUI from './SearchUI'

import { connect }  from  'react-redux'
 
import { withRouter } from 'react-router-dom'

 const mapDispatch = (dispatch)=>{
     return {
        setUrlParams(params){
            dispatch({
                type:"getParams",
                urlParams:params
            })
        }
     }
 }

class Search extends Component {
    constructor(props){
        super(props)
        this.state ={
            list : [],
            isload:false
        }
        this.click = this.click.bind(this)
        this.fetchHandler()
    }
   async fetchHandler(){
        let data = await http.get('/mobileWeb/hotsearch')
        this.setState({
            list:data.info,
            isload :false
        },function(){
            this.setState({
                isload:true
            })
        })
    }
    click(e){
        this.props.setUrlParams(e)
        this.props.history.push('/searchItem/'+e)
        window.location.reload()

    }
    render() {
        return (
            <SearchUI {...this.state} click={this.click}></SearchUI>
        );
    }
}

export default withRouter(connect(null,mapDispatch)(Search));