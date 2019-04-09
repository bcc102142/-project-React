import React, { Component } from 'react';

import {SoundDetailStyled,BorderedSoundActionContainer,BorderedSoundInfo,BorderedSoundDrama,BorderedSoundCV} from './SoundDetailStyled'

import http from 'utils/fetch'

class SoundDetail extends Component {
    constructor(props){
        super(props)
        this.state ={
            value : '更多',
            data1 : [],
            otherInfo:{},
            cvmore:'更多',
            soundlike:{}
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.clickCVHandler = this.clickCVHandler.bind(this)
        this.fetchHandler()
    }
   async fetchHandler(){
        let url = '/sound/getsound?soundid='+this.props.match.params.id
        let data = await http.get(url)
        let url1 = '/dramaapi/getdramabysound?sound_id='+this.props.match.params.id
        let data1 = await http.get(url1)
        let url2 = '/sound/getsoundlike?type=15&sound_id='+this.props.match.params.id
        let data2 = await http.get(url2)
        this.setState({
            data1 : data.info,
            otherInfo:data1.info,
            soundlike:data2.info
        })
    }
    render() {
        let sound = this.state.data1.sound ? this.state.data1.sound:{}
        let user = this.state.data1.user ? this.state.data1.user : {}
        let cv =  this.state.otherInfo.cvs ? this.state.otherInfo.cvs : []
        let drama =  this.state.otherInfo.drama ? this.state.otherInfo.drama :{}
        let recommenddramas =  this.state.soundlike.dramas ? this.state.soundlike.dramas :[]
        let sounds =  this.state.soundlike.sounds ? this.state.soundlike.sounds :[]
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
                    <div className="soundPlayerBg" style={{background:`url(${sound.front_cover})` }}> </div>
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
                            <p>{sound.soundstr}</p>
                            <ul>
                                <li>{sound.view_count_formatted}</li>
                                <li>{sound.all_comments}</li>
                                <li>音频id:{sound.id}</li>
                            </ul>
                            <div className="infoBox">
                            <div className="intro" dangerouslySetInnerHTML={{ __html: sound.intro }} />
                                {/* <div className="intro">
                                    <p>简介：</p>
                                    <p>我真的很勤奋相信我（其实是为了下个星期不更新找借口）</p>
                                    <p>这个抓当时看到画风就是心动的感觉了（加上是我推的要支持一下）</p>
                                    <p>收到的时候立马就听了呜呜呜真的是慢悠悠的治愈真好。</p>
                                    <p>——————喜欢请支持正版——————————</p>
                                    
                                    <p>「僕が恋をしたのは神様でした」<br/>この国には、魃(バツ)と呼ばれる神様がいる。<br/>少年テオが仕えるのは、夢のように美しい魃・レイ。<br/>血筋によって決められただけの主従関係だったが、次第にそれは恋心へと変わっていく。<br/>そばにいたいと思う気持ちは日増しに強くなり、熱い身体に触れることも、心地よく感じるようになった。<br/>しかし、魃は人間の数倍の速さで歳を取り、レイもまた、必ずテオより先に寿命を迎えるのだという――。<br/>これは移ろいゆく四季のなかでふたりの永遠を紡ぐ御伽噺。<br/>あおのなちが描く、あたたかくて切ない、神様×健気な少年の恋路をドラマCD化！<br/>巡る四季の情景と共に深まる愛をお楽しみください。<br/></p>

                                    <p>【出演者】テオ（受）：斉藤壮馬、</p>
                                    <p>レイ（攻）：興津和幸</p>
                                </div> */}
                               <span onClick={this.clickHandler}>{this.state.value}</span>
                            </div>
                        </BorderedSoundInfo>
                        <BorderedSoundDrama href="/drama/20542">
                            <div><img style={{height:".6rem",width:".6rem"}} src={drama.cover} alt=""/></div>
                            <div className="soundDramaRight">
                                <div className="soundDramaRightText">
                                    <p>{drama.name}</p>
                                    <span>{drama.catalog_name} 类型：{drama.type_name}</span>
                                    <span>更新至 {drama.newest}</span>
                                </div>
                                <div className="soundDramaRightBtn">追剧</div>
                            </div>
                        </BorderedSoundDrama>
                        <BorderedSoundCV cvmore={this.state.cvmore}>
                            <h4>参演CV</h4>
                            <div className="cv-in-sound-list">
                                {
                                    cv.map((value)=>{
                                        return (
                                            <div className="cv-in-sound" key={value.id}>
                                                <div><img style={{width:".46rem",height:".46rem",borderRadius:"50%"}} src={value.cvinfo.icon} alt=""/></div>
                                                <p>{value.cvinfo.name}</p>
                                                <span>饰：{value.character}</span>
                                                <span>{value.group}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <span onClick={this.clickCVHandler} className="expandBtn"></span>
                        </BorderedSoundCV>

                        <BorderedSoundDrama href="/drama/20542">
                            <div><img style={{height:".6rem",width:".6rem",borderRadius:"50%"}} src={user.icon} alt=""/></div>
                            <div className="soundDramaRight">
                                <div className="soundDramaRightText">
                                    <p>{sound.username}</p>
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
                                {
                                    recommenddramas.map(value =>{
                                        return (
                                            <a href="#" key={value.id}>
                                                <div><img style={{width:"1.05rem",height:"1.36rem"}} src={value.front_cover} alt=""/></div>
                                                <span>{value.name}</span>
                                            </a>
                                        )
                                    })
                                }
                                </div>
                            </div>
                            <div className="sound-block">
                                <p>相似音频</p>
                                <div className="sound-block-like">
                                {
                                    sounds.map(value=>{
                                        return (
                                            <a href="#" key={value.id}>
                                                <img  src={value.front_cover} alt=""/>
                                                <div className="channel-body-title">{value.soundstr}</div>
                                                <div className="channel-body-bottom">
                                                    <span className="channel-body-palytimes">{value.view_count}</span>
                                                    <span className="channel-body-comments">{value.all_comments}</span>
                                                </div>
                                            </a>
                                        )
                                    })
                                }
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
    clickCVHandler(){
        if(this.state.cvmore === '更多'){
            this.setState({
                cvmore : '收起'
            })
        }else{
            this.setState({
                cvmore : '更多'
            })
        }
    }
   

}

export default SoundDetail;