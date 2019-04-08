import React, { Component } from 'react';

import http from 'utils/fetch'

import { RankingDetailStyled,SoundItemStyled,BorderedSoundItem } from './RankingDetailStyled'

class RankingDetail extends Component {
    constructor(props){
        super(props)
        this.state ={
            info:{},
            isload:false
        }
        this.fetchHandler()
    }
   async fetchHandler(){
       let url ='/sound/soundalllist?albumid=' + this.props.match.params.id
        let data = await http.get(url)
        this.setState({
            info:data.info
        },function(){
            this.setState({
                isload:true
            })
        })
   
    }
    render() {
        let album = this.state.info.album ? this.state.info.album :{}
        let list = this.state.info.sounds ? this.state.info.sounds : []
        console.log(list)
        return (
            <RankingDetailStyled>{
                this.state.isload?(
                    <div>
                    <div className="rankDetailHead" >
                    <div className="rankDtailHeadImgBox"><img  src={album.front_cover} alt=""/></div>
                    <div className="rankDtailHeadTextBox">
                        <p>{album.title}</p>
                        <div>
                            <img src="//static.missevan.com/avatars/201705/24/9a949cdc469813199b0446bd32570bf6152029.jpg" alt=""/> <span>猫耳FM</span>
                        </div>
                    </div>
                    <div className="rankDetailHeadbg" style={{background: "url(" + `${album.front_cover}` + ")" }}></div>
                </div>

                <div className="soundList">
                {   
                    list.map(function(value){
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
        );
    }
}

export default RankingDetail;