import React, { Component } from 'react';

import { RankingDetailStyled,SoundItemStyled,BorderedSoundItem } from './RankingDetailStyled'

export default (props) => {
    return (
        <RankingDetailStyled>{
            props.isload?(
                <div>
                <div className="rankDetailHead" >
                <div className="rankDtailHeadImgBox"><img  src={props.info.album.front_cover} alt=""/></div>
                <div className="rankDtailHeadTextBox">
                    <p>{props.info.album.title}</p>
                    <div>
                        <img src={props.info.owner.boardiconurl2} alt=""/> <span>{props.info.album.username}</span>
                    </div>
                </div>
                <div className="rankDetailHeadbg" style={{background: "url(" + `${props.info.album.front_cover}` + ")" }}></div>
            </div>

            <div className="soundList">
            {   
                props.info.sounds.map(function(value){
                    let m = Math.floor(value.duration / 1000 /60)
                    let s = Math.floor((value.duration - m*1000*60)/1000)
                    s = s <10 ? "0"+s : s
                    return (
                        <div key={value.id}>
                            <BorderedSoundItem>
                            <div>
                                <img style={{width:".5rem",height:".5rem"}} src={value.front_cover} alt=""/>
                            </div>
                            <div className="soundItemRight">
                                <p>{value.soundstr}</p>
                                <div className="other-item-right-bottom">   
                                    <span className="other-item-right-bottom-left">{value.view_count_formatted}</span>
                                    <span className="other-item-right-bottom-right">{m}:{s}</span>
                                </div>
                            </div>
                            </BorderedSoundItem>
                        </div>
                    )
                })
            }
            </div></div>
            ) :(<img src="https://static.missevan.com/mimages/201603/29/f6b4a63596f56f2bc77d4fb467cab85c160911.gif
            " alt=""/>)
            }
        </RankingDetailStyled>
        )
}