import React, { Component } from 'react';

import { SwiperStyled } from './SwiperStyled'

import { Carousel, ActivityIndicator } from 'antd-mobile';

import { connect } from 'react-redux'

import { getDataAsync } from './actionCreater'

const mapState = (state) => {
  return {
    data:state.data
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
      <SwiperStyled>
        <Carousel
          infinite={true}
          autoplay={true}
        >
        {
         list.map(function(value,index){
           return <img style={{width:"100%"}} src={value.pic} key={index} alt=""/>
          })
        } 
        </Carousel>
      </SwiperStyled>
    );
  }
  fetchHandler(){
    this.props.fetchHandler()
  }


}

export default connect(mapState,mapDispatch)(swiper)


// export default swiper;