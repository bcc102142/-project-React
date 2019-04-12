import React, { Component } from 'react';

import { RankingStyled } from './RankingStyled'

export default (props) => {
    return (
        <RankingStyled>
               <div className="detail-head">排行榜</div>
               {
                   props.isload ?(
                    props.list.map(function(value){
                        return (
                         <a  onClick={(data)=>props.click(value.album.id)} className="ranking-body" key={value.album.id}>
                         <div className="ranking-item">
                             <div className="ranking-item-img">
                                 <div className="ranking-item-img-box"><img style={{height:"1.1rem",width:"1.1rem",borderRadius: '4px'}} src={"//static.missevan.com/coversmini/"+value.album.cover_image} alt=""/></div>
                                 <span>10</span>
                             </div>
                             <div className="ranking-item-list">
                                 {
                                    value.sounds ? value.sounds.map(function(value){
                                        return (
                                            <div key={value.id}>
                                                {value.soundstr}
                                            </div>
                                        )
                                    }) :""
                                 }
                             </div>
                         </div>
                         </a>
                        )
                    })
                   ): (<img src="https://static.missevan.com/mimages/201603/29/f6b4a63596f56f2bc77d4fb467cab85c160911.gif
                   " alt=""/>)
                
               }
            
           
            </RankingStyled>
    )
}