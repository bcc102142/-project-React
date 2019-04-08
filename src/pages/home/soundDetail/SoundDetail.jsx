import React, { Component } from 'react';

import {SoundDetailStyled,BorderedSoundActionContainer} from './SoundDetailStyled'

import pixelate from 'assets/js/close-pixelate'

class SoundDetail extends Component {
    render() {
        return (
            <SoundDetailStyled>
                <div id="soundPlayer" > 
                    <div className="imgBox"><img id="portrait-image" style={{width:"2.2rem",height:"2.2rem"}} src="//static.missevan.com/coversmini/201901/09/9bd6b216f4ee808757785359a2a11216092822.jpeg" alt=""/></div>
                    <div className="soundController">
                        <div className="btnPlay"></div>
                    </div>
                    <div className="progress-bar">
                        <div className="played">   
                            <div className="draggable"></div>
                        </div>
                    </div>
                    <div className="soundTime">
                        <i>0.00</i>
                        <i style={{float:"right"}}>1.00</i>
                    </div>


                    <div className="soundPlayerBg" style={{background:"url(" +"//static.missevan.com/coversmini/201901/09/9bd6b216f4ee808757785359a2a11216092822.jpeg" +")" }}> </div>
                </div>
                <BorderedSoundActionContainer >
                    <ul>
                        <li><i className="share"></i><span>分享</span></li>
                        <li><i className="like"></i><span>喜欢</span></li>
                        <li><i className="download"></i><span>下载</span></li>
                    </ul>
                    <div className="openInApp">用客户端打开</div>
                </BorderedSoundActionContainer>
                
                <div className="soundTab">
                    <ul>
                        <li>简介</li>
                        <li>评论</li>
                        <li>图片</li>
                    </ul>
                </div>
                <div className="tabContent">
                    <div>
                        <div className="soundInfo">
                            <p>【兴津和幸×齐藤壮马】テオ-THEO-第 1 话</p>
                            <ul>
                                <li>5.6万</li>
                                <li>603</li>
                                <li>音频id:1144352</li>
                            </ul>
                            <p>简介：</p>
                            <div>
                                <p>我真的很勤奋相信我（其实是为了下个星期不更新找借口）</p>
                            </div>
                        </div>
                    </div>
                
                </div>
                        
                

            </SoundDetailStyled>
        );
    }
   

}

export default SoundDetail;