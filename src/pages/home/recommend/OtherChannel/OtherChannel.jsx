import React, { Component } from 'react';

import {connect } from 'react-redux'

import OtherChannelUI from './OtherChannelUI'

const mapState =(state) =>{
    return {
        data:state.data.data
    }
}


class OtherChannel extends Component {
    render() {
        let list = this.props.data.info ? this.props.data.info.channel:[]
        return (
            <OtherChannelUI list={list}></OtherChannelUI>
        );
    }
}

export default connect(mapState)(OtherChannel)
