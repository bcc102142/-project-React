import React, { Component } from 'react';

import { connect } from 'react-redux'

import { getDataAsync } from './actionCreater'

import SwiperUI from './swiperUI'

const mapState = (state) => {
  return {
    data:state.data.data
  }
}

const mapDispatch =(dispatch) =>{
    return {
      fetchHandler(){
        dispatch(getDataAsync())
      }
    }
} 

class swiper extends Component {
  constructor(props){
    super(props)
    this.fetchHandler()
  }

  render() {
    let list = this.props.data.info ? this.props.data.info.banner :[]
    return (
      <SwiperUI list={list}></SwiperUI>
    );
  }
  fetchHandler(){
    this.props.fetchHandler()
  }
}

export default connect(mapState,mapDispatch)(swiper)

