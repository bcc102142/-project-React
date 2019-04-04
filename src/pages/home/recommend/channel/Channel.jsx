import React, { Component } from 'react';

import {ChannelStyled} from './ChannelStyled'

import http from 'utils/fetch'


class Channel extends Component {
    constructor(props){
        super(props)
        this.state={
            data:{}
        }
        this.fetchHandler()
    }

    render() {
        let list0 = this.state.data.music ? this.state.data.music[0].objects_point: []
        let list1 = this.state.data.music ? this.state.data.music[1].objects_point: []
        let list2 = this.state.data.music ? this.state.data.music[2].objects_point: []
        let list3 = this.state.data.music ? this.state.data.music[3].objects_point: []
        let list4 = this.state.data.music ? this.state.data.music[4].objects_point: []
        let list5 = this.state.data.music ? this.state.data.music[5].objects_point: []
        let list6 = this.state.data.music ? this.state.data.music[6].objects_point: []
        let list7 = this.state.data.music ? this.state.data.music[7].objects_point: []
        let list8 = this.state.data.music ? this.state.data.music[8].objects_point: []


        return (
            <>
            <ChannelStyled>
                <div className="channel-title">
                    <div className="channel-title-head">
                        <i style={{
                        backgroundPosition: "-22px 0",
                        backgroundImage: "url('//static.missevan.com/assets/m/images/build/sprite-icons-catalog@2x.1144a958.png')"
                    }}></i>
                        有声漫画
                    </div>
                    <div className="channel-title-nav">
                        更多
                    </div>
                </div>
                <div className="channel-body">
                {
                    list0.map((value)=>{
                       return( <a href="#" key={value.id}>
                            <img src={'//static.missevan.com/coversmini/'+value.cover_image} alt=""/>
                            <div className="channel-body-title">{value.soundstr}</div>
                            <div className="channel-body-bottom">
                                <span className="channel-body-palytimes">{value.view_count}</span>
                                <span className="channel-body-comments">{value.comment_count}</span>
                            </div>
                        </a>)
                    })
                }
                    
                </div>
            </ChannelStyled>

            <ChannelStyled>
            <div className="channel-title">
                <div className="channel-title-head">
                    <i style={{
                        backgroundPosition: "-44px -22px",
                        backgroundImage: "url('//static.missevan.com/assets/m/images/build/sprite-icons-catalog@2x.9cd9a995.png')"
                    }}></i>
                    广播剧
                </div>
                <div className="channel-title-nav">
                    更多
                </div>
            </div>
            <div className="channel-body">
            {
                list1.map((value)=>{
                   return( <a href="#" key={value.id}>
                        <img src={'//static.missevan.com/coversmini/'+value.cover_image} alt=""/>
                        <div className="channel-body-title">{value.soundstr}</div>
                        <div className="channel-body-bottom">
                            <span className="channel-body-palytimes">{value.view_count}</span>
                            <span className="channel-body-comments">{value.comment_count}</span>
                        </div>
                    </a>)
                })
            }
                
            </div>
        </ChannelStyled>

        <ChannelStyled>
            <div className="channel-title">
                <div className="channel-title-head">
                    <i style={{
                        backgroundPosition: "-22px -44px",
                        backgroundImage: "url('//static.missevan.com/assets/m/images/build/sprite-icons-catalog@2x.9cd9a995.png')"
                    }}></i>
                    音乐
                </div>
                <div className="channel-title-nav">
                    更多
                </div>
            </div>
            <div className="channel-body">
            {
                list2.map((value)=>{
                   return( <a href="#" key={value.id}>
                        <img src={'//static.missevan.com/coversmini/'+value.cover_image} alt=""/>
                        <div className="channel-body-title">{value.soundstr}</div>
                        <div className="channel-body-bottom">
                            <span className="channel-body-palytimes">{value.view_count}</span>
                            <span className="channel-body-comments">{value.comment_count}</span>
                        </div>
                    </a>)
                })
            }
                
            </div>
        </ChannelStyled>

        <ChannelStyled>
            <div className="channel-title">
                <div className="channel-title-head">
                    <i style={{
                        backgroundPosition: "-22px -66px",
                        backgroundImage: "url('//static.missevan.com/assets/m/images/build/sprite-icons-catalog@2x.9cd9a995.png')"
                    }}></i>
                    催眠
                </div>
                <div className="channel-title-nav">
                    更多
                </div>
            </div>
            <div className="channel-body">
            {
                list3.map((value)=>{
                   return( <a href="#" key={value.id}>
                        <img src={'//static.missevan.com/coversmini/'+value.cover_image} alt=""/>
                        <div className="channel-body-title">{value.soundstr}</div>
                        <div className="channel-body-bottom">
                            <span className="channel-body-palytimes">{value.view_count}</span>
                            <span className="channel-body-comments">{value.comment_count}</span>
                        </div>
                    </a>)
                })
            }
                
            </div>
        </ChannelStyled>

        <ChannelStyled>
            <div className="channel-title">
                <div className="channel-title-head">
                    <i style={{
                        backgroundPosition: "-66px 0",
                        backgroundImage: "url('//static.missevan.com/assets/m/images/build/sprite-icons-catalog@2x.9cd9a995.png')"
                    }}></i>
                    娱乐
                </div>
                <div className="channel-title-nav">
                    更多
                </div>
            </div>
            <div className="channel-body">
            {
                list4.map((value)=>{
                   return( <a href="#" key={value.id}>
                        <img src={'//static.missevan.com/coversmini/'+value.cover_image} alt=""/>
                        <div className="channel-body-title">{value.soundstr}</div>
                        <div className="channel-body-bottom">
                            <span className="channel-body-palytimes">{value.view_count}</span>
                            <span className="channel-body-comments">{value.comment_count}</span>
                        </div>
                    </a>)
                })
            }
                
            </div>
        </ChannelStyled>

        <ChannelStyled>
            <div className="channel-title">
                <div className="channel-title-head">
                    <i style={{
                        backgroundPosition: "-66px -22px",
                        backgroundImage: "url('//static.missevan.com/assets/m/images/build/sprite-icons-catalog@2x.9cd9a995.png')"
                    }}></i>
                    日抓
                </div>
                <div className="channel-title-nav">
                    更多
                </div>
            </div>
            <div className="channel-body">
            {
                list5.map((value)=>{
                   return( <a href="#" key={value.id}>
                        <img src={'//static.missevan.com/coversmini/'+value.cover_image} alt=""/>
                        <div className="channel-body-title">{value.soundstr}</div>
                        <div className="channel-body-bottom">
                            <span className="channel-body-palytimes">{value.view_count}</span>
                            <span className="channel-body-comments">{value.comment_count}</span>
                        </div>
                    </a>)
                })
            }
                
            </div>
        </ChannelStyled>

        <ChannelStyled>
            <div className="channel-title">
                <div className="channel-title-head">
                    <i style={{
                        backgroundPosition: "0 -44px",
                        backgroundImage: "url('//static.missevan.com/assets/m/images/build/sprite-icons-catalog@2x.9cd9a995.png')"
                    }}></i>
                    听书
                </div>
                <div className="channel-title-nav">
                    更多
                </div>
            </div>
            <div className="channel-body">
            {
                list6.map((value)=>{
                   return( <a href="#" key={value.id}>
                        <img src={'//static.missevan.com/coversmini/'+value.cover_image} alt=""/>
                        <div className="channel-body-title">{value.soundstr}</div>
                        <div className="channel-body-bottom">
                            <span className="channel-body-palytimes">{value.view_count}</span>
                            <span className="channel-body-comments">{value.comment_count}</span>
                        </div>
                    </a>)
                })
            }
                
            </div>
        </ChannelStyled>

        <ChannelStyled>
            <div className="channel-title">
                <div className="channel-title-head">
                    <i style={{
                        backgroundPosition: "0 -66px",
                        backgroundImage: "url('//static.missevan.com/assets/m/images/build/sprite-icons-catalog@2x.9cd9a995.png')"
                    }}></i>
                    配音
                </div>
                <div className="channel-title-nav">
                    更多
                </div>
            </div>
            <div className="channel-body">
            {
                list7.map((value)=>{
                   return( <a href="#" key={value.id}>
                        <img src={'//static.missevan.com/coversmini/'+value.cover_image} alt=""/>
                        <div className="channel-body-title">{value.soundstr}</div>
                        <div className="channel-body-bottom">
                            <span className="channel-body-palytimes">{value.view_count}</span>
                            <span className="channel-body-comments">{value.comment_count}</span>
                        </div>
                    </a>)
                })
            }
                
            </div>
        </ChannelStyled>
        <ChannelStyled>
            <div className="channel-title">
                <div className="channel-title-head">
                    <i style={{
                        backgroundPosition: "-66px -66px",
                        backgroundImage: "url('//static.missevan.com/assets/m/images/build/sprite-icons-catalog@2x.9cd9a995.png')"
                    }}></i>
                    铃声
                </div>
                <div className="channel-title-nav">
                    更多
                </div>
            </div>
            <div className="channel-body">
            {
                list8.map((value)=>{
                   return( <a href="#" key={value.id}>
                        <img src={'//static.missevan.com/coversmini/'+value.cover_image} alt=""/>
                        <div className="channel-body-title">{value.soundstr}</div>
                        <div className="channel-body-bottom">
                            <span className="channel-body-palytimes">{value.view_count}</span>
                            <span className="channel-body-comments">{value.comment_count}</span>
                        </div>
                    </a>)
                })
            }
                
            </div>
        </ChannelStyled>
        </>
        );
    }
   async fetchHandler(){
        let data = await http.get('/sound/newhomepagedata')
        this.setState({
            data
        })
    }
}

export default Channel