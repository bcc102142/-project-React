import React, { Component } from 'react';

import { AlbumsStyled } from './AlbumsStyled'

import Head from './Head'
import Body from './Body'

import http from 'utils/fetch'

class Albums extends Component {
    constructor(props){
        super(props)
        this.state = {
            data :{}
        }
        this.fetchHandler()
    }
    render() {
        
        return (
            <AlbumsStyled>
               <Head ></Head>
               <Body data={this.state.data}></Body>
            </AlbumsStyled>
        );
    }
   async fetchHandler(){
    let data =await http.get('/explore/tagalbum?order=0')
        this.setState({
            data:data
        })
    }
}



export default Albums;