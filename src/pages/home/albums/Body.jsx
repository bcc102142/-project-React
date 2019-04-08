import React, { Component } from 'react';

import { BodyStyled } from  './BodyStyled'


import Masonry from 'react-masonry-component';
const masonryOptions = {
    transitionDuration: 0
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }


class Head extends Component {
    constructor(props){
        super(props)
    }
    render() {
        
        console.log(this.props)

        let list = this.props.data.albums ? this.props.data.albums : []
        const childElements = list.map(function(value){
            return (
                <li style={{width:"1.63rem",borderRadius:"20px",paddingTop: ".1rem",transform:"scaleY(0.5)"}}  key={value.id}>
                <img className="masonry-img" style={{ borderRadius:"20px"}} src={value.front_cover} alt=""/>
                    <div className="img-box">
                            <div className="sound-num">
                                <span>{value.music_count}</span>
                        </div>
                        </div>
                    <div className="sound.title">{value.title}</div>
                </li>
             );
         });
       
        return (
            <BodyStyled>
                <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
                // onLayoutComplete={function(){

                //    let img = document.getElementsByClassName('masonry-img')
                //     let imglist = Array.from(img)
                //     // console.log(imglist)
                //    imglist.map(
                //        (item)=>{
                //         return item.style.height = item.style.naturalHeight*0.5
                //    }
                //    )
                // }}
            >
                {childElements}
            </Masonry>
            </BodyStyled>
            // <BodyStyled>
            //     {
            //        list.map((value)=>{
            //             return (
                           
            //                 <a href="#" key={value.id}>
            //                     <div className="img-box">
            //                         <img style={{width:"100%"}} src={value.front_cover} alt=""/>
            //                         <div className="sound-num">
            //                             <span>116</span>
            //                         </div>
            //                     </div>
            //                     <div className="sound.title">{value.title}</div>
            //                 </a>
            //             )
            //        }) 
            //     }
            // </BodyStyled>
        );
    }
}

export default Head;