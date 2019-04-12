import React, { Component } from 'react';

import { BodyStyled } from  './BodyStyled'

import {withRouter } from 'react-router-dom'

import $ from 'jquery'

import Masonry from 'react-masonry-component';
const masonryOptions = {
    transitionDuration: 10,
    // columnWidth: 200,
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }


class Head extends Component {
    constructor(props){
        super(props)
        this.click = this.click.bind(this)
    }
    click(data){
        this.props.history.push('/album/'+data)
    }
    compementDidMount(){
        
        // $('.grid').masonry({
        //     columnWidth: 200,
        //     itemSelector: '.grid-item'
        //   });
    }
    render() {
        let list = this.props.data.albums ? this.props.data.albums : []
       let that = this
        const childElements = list.map(function(value){
            return (
                <a onClick={(data)=>that.click(value.id)} style={{width:"1.63rem",borderRadius:"20px",paddingTop: ".1rem",transform:"scaleY(0.5)"}}  key={value.id}>
                <img className="masonry-img" style={{ borderRadius:"20px"}} src={value.front_cover} alt=""/>
                    <div className="img-box">
                            <div className="sound-num">
                                <span>{value.music_count}</span>
                        </div>
                        </div>
                    <div className="sound.title">{value.title}</div>
                </a>
             );
         });
       
        return (
            <BodyStyled>

                {/* <div className="grid">
                    {
                        <div className="grid">
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            
                        </div>
                    }
                       
                </div> */}

                <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
      
            >
                {childElements}
                </Masonry>
            </BodyStyled>
            
        );
    }
}

export default withRouter(Head);