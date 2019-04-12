import React, { Component } from 'react';


import Bscroll from 'better-scroll'

import {withRouter} from 'react-router-dom'

import {connect} from 'react-redux'

import ChannelIOUI from './ChannelIOUI'

const mapState = (state)=>{
    return {
        data:state.data.data
    }
}

class ChannelO extends Component {
    constructor(props){
        super(props)
        this.navClickHandler = this.navClickHandler.bind(this)
        this.click = this.click.bind(this)

    }
    componentDidMount(){
        new Bscroll('#channel-body-scroll',{
            scrollX:true,
            click:true
        })
    }
    click(data){
        this.props.history.push("/item/"+data)
    }
    navClickHandler(){
        this.props.history.push('/recommend/ranking')
    }
    render() {
        let list = this.props.data.info ?  this.props.data.info.sound :[]
        return (
            <ChannelIOUI list={list} click={this.click} onClick={this.navClickHandler}></ChannelIOUI>
       
        );
    }
}

export default withRouter(connect(mapState)(ChannelO))