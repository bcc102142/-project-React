import React, { Component } from 'react';

import { SwiperStyled } from './SwiperStyled'

import { Carousel, ActivityIndicator } from 'antd-mobile';


const SwiperUI = (props)=>{
    return (
        <SwiperStyled>
            <Carousel
            infinite={true}
            autoplay={true}
            >
            {
            props.list.map(function(value,index){
            return <img style={{width:"100%"}} src={value.pic} key={index} alt=""/>
            })
            } 
            </Carousel>
      </SwiperStyled>
    )
}

export default SwiperUI