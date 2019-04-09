import React, { Component } from 'react';

import {SoundDetailStyled,BorderedSoundActionContainer,BorderedSoundInfo,BorderedSoundDrama,BorderedSoundCV} from './SoundDetailStyled'

import http from 'utils/fetch'
import pixelate from 'assets/js/close-pixelate'

class SoundDetail extends Component {
    constructor(props){
        super(props)
        this.state ={
            value : '更多',
            data1 : []
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.fetchHandler()
    }
   async fetchHandler(){
        console.log()
        let url = '/sound/getsound?soundid='+this.props.match.params.id
        let data = await http.get(url)
        this.setState({
            data1 : data.info
        })
    }
    render() {
        let sound = this.state.data1.sound ? this.state.data1.sound : {}
        return (
            <SoundDetailStyled value={this.state.value}>
                <div id="soundPlayer" > 
                    <div className="imgBox"><img id="portrait-image" style={{width:"2.2rem",height:"2.2rem"}} src={sound.front_cover} alt=""/></div>
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
                        <BorderedSoundInfo value={this.state.value}>
                            <p>【兴津和幸×齐藤壮马】テオ-THEO-第 1 话</p>
                            <ul>
                                <li>5.6万</li>
                                <li>603</li>
                                <li>音频id:1144352</li>
                            </ul>
                            <div className="infoBox">
                                <div className="intro">
                                    <p>简介：</p>
                                    <p>我真的很勤奋相信我（其实是为了下个星期不更新找借口）</p>
                                    <p>这个抓当时看到画风就是心动的感觉了（加上是我推的要支持一下）</p>
                                    <p>收到的时候立马就听了呜呜呜真的是慢悠悠的治愈真好。</p>
                                    <p>——————喜欢请支持正版——————————</p>
                                    
                                    <p>「僕が恋をしたのは神様でした」<br/>この国には、魃(バツ)と呼ばれる神様がいる。<br/>少年テオが仕えるのは、夢のように美しい魃・レイ。<br/>血筋によって決められただけの主従関係だったが、次第にそれは恋心へと変わっていく。<br/>そばにいたいと思う気持ちは日増しに強くなり、熱い身体に触れることも、心地よく感じるようになった。<br/>しかし、魃は人間の数倍の速さで歳を取り、レイもまた、必ずテオより先に寿命を迎えるのだという――。<br/>これは移ろいゆく四季のなかでふたりの永遠を紡ぐ御伽噺。<br/>あおのなちが描く、あたたかくて切ない、神様×健気な少年の恋路をドラマCD化！<br/>巡る四季の情景と共に深まる愛をお楽しみください。<br/></p>

                                    <p>【出演者】テオ（受）：斉藤壮馬、</p>
                                    <p>レイ（攻）：興津和幸</p>
                                </div>
                               <span onClick={this.clickHandler}>{this.state.value}</span>
                            </div>
                        </BorderedSoundInfo>
                        <BorderedSoundDrama href="/drama/20542">
                            <div><img style={{height:".6rem",width:".6rem"}} src="//static.missevan.com/dramacoversmini/201903/01/c6606369b23be8675007dec622c40526163514.png" alt=""/></div>
                            <div className="soundDramaRight">
                                <div className="soundDramaRightText">
                                    <p>缇欧-THEO-</p>
                                    <span>日文有声漫画 类型：纯爱</span>
                                    <span>更新至 FT</span>
                                </div>
                                <div className="soundDramaRightBtn">追剧</div>
                            </div>
                        </BorderedSoundDrama>
                        <BorderedSoundCV>
                            <h4>参演CV</h4>
                            <div className="cv-in-sound-list">
                                <div className="cv-in-sound">
                                    <div><img style={{width:".46rem",height:".46rem",borderRadius:"50%"}} src="//static.missevan.com/seiys/201808/31/e976decfed7c7728e5d3397ebd913608143757.jpg" alt=""/></div>
                                    <p>齐藤壮马</p>
                                    <span>饰：テオ</span>
                                    <span>81 Produce</span>
                                </div>
                                <div className="cv-in-sound">
                                    <div><img style={{width:".46rem",height:".46rem",borderRadius:"50%"}} src="//static.missevan.com/seiys/201808/31/e976decfed7c7728e5d3397ebd913608143757.jpg" alt=""/></div>
                                    <p>齐藤壮马</p>
                                    <span>饰：テオ</span>
                                    <span>81 Produce</span>
                                </div>
                            </div>
                        </BorderedSoundCV>

                        <BorderedSoundDrama href="/drama/20542">
                            <div><img style={{height:".6rem",width:".6rem",borderRadius:"50%"}} src="//static.missevan.com/dramacoversmini/201903/01/c6606369b23be8675007dec622c40526163514.png" alt=""/></div>
                            <div className="soundDramaRight">
                                <div className="soundDramaRightText">
                                    <p>缇欧-THEO-</p>
                                    <span>发布于：2019/01/09 17:28</span>
                                </div>
                                <div className="soundDramaRightBtn">关注</div>
                            </div>
                        </BorderedSoundDrama>

                        <div className="soundRelative">
                            <div className="channel-title">
                                <div className="channel-title-head">
                                    音频相关
                                </div>
                            </div>
                            <div className="sound-block">
                                <p>剧集推荐</p>
                                <div className="sound-block-recommend">
                                    <a href="#">
                                        <div><img style={{width:"1.05rem",height:"1.36rem"}} src="//static.missevan.com/dramacoversmini/201807/19/8167478c911ea504a0613b0ed6fce0b9162059.png" alt=""/></div>
                                    <span>K 诸王归来 Prelude 青&白银/赤&绿</span>
                                    
                                    </a>
                                    <a href="#">
                                        <div><img style={{width:"1.05rem",height:"1.36rem"}} src="//static.missevan.com/dramacoversmini/201807/19/8167478c911ea504a0613b0ed6fce0b9162059.png" alt=""/></div>
                                    <span>K 诸王归来 Prelude 青&白银/赤&绿</span>
                                    
                                    </a>
                                    <a href="#">
                                        <div><img style={{width:"1.05rem",height:"1.36rem"}} src="//static.missevan.com/dramacoversmini/201807/19/8167478c911ea504a0613b0ed6fce0b9162059.png" alt=""/></div>
                                    <span>K 诸王归来 Prelude 青&白银/赤&绿</span>
                                    
                                    </a>
                                    <a href="#">
                                        <div><img style={{width:"1.05rem",height:"1.36rem"}} src="//static.missevan.com/dramacoversmini/201807/19/8167478c911ea504a0613b0ed6fce0b9162059.png" alt=""/></div>
                                    <span>K 诸王归来 Prelude 青&白银/赤&绿</span>
                                    
                                    </a>
                                </div>
                            </div>

                            <div className="sound-block">
                                <p>相似音频</p>
                                <div className="sound-block-like">
                                    <a href="#">
                                        <img  src='//static.missevan.com/dramacoversmini/201807/19/8167478c911ea504a0613b0ed6fce0b9162059.png' alt=""/>
                                        <div className="channel-body-title">aaaaa</div>
                                        <div className="channel-body-bottom">
                                            <span className="channel-body-palytimes">3512</span>
                                            <span className="channel-body-comments">5214</span>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <img  src='//static.missevan.com/dramacoversmini/201807/19/8167478c911ea504a0613b0ed6fce0b9162059.png' alt=""/>
                                        <div className="channel-body-title">aaaaa</div>
                                        <div className="channel-body-bottom">
                                            <span className="channel-body-palytimes">3512</span>
                                            <span className="channel-body-comments">5214</span>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <img  src='//static.missevan.com/dramacoversmini/201807/19/8167478c911ea504a0613b0ed6fce0b9162059.png' alt=""/>
                                        <div className="channel-body-title">aaaaa</div>
                                        <div className="channel-body-bottom">
                                            <span className="channel-body-palytimes">3512</span>
                                            <span className="channel-body-comments">5214</span>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <img  src='//static.missevan.com/dramacoversmini/201807/19/8167478c911ea504a0613b0ed6fce0b9162059.png' alt=""/>
                                        <div className="channel-body-title">aaaaa</div>
                                        <div className="channel-body-bottom">
                                            <span className="channel-body-palytimes">3512</span>
                                            <span className="channel-body-comments">5214</span>
                                        </div>
                                    </a>
                              
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </SoundDetailStyled>
        );
    }
    clickHandler(){
        if(this.state.value === '更多'){
            this.setState({
                value : '收起'
            })
        }else{
            this.setState({
                value : '更多'
            })
        }
    }
   

}

export default SoundDetail;