import React, { Component } from 'react';

import {SoundDetailStyled,BorderedSoundActionContainer,BorderedSoundInfo,BorderedSoundDrama,BorderedSoundCV,BorderedCommentsItemBody} from './SoundDetailStyled'

import http from 'utils/fetch'

import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'

import request from 'utils/request';

import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import { isArray } from 'util';

// import DetailComment from "./DetailComment/DetailComment"

const mapState = (state)=>{
    return {
        info : state.isLogin.info,
        likeList:state.likeList.likeList,
    }
}

const mapDispatch = (dispatch)=>{
    return {
        setLikeList(data){
            dispatch({
                type : 'setLikeList',
                likeItem:data
            })
        },
        getLikeList(data){
            dispatch({
                type : 'getLikeList',
                likeList:data
            })
        }
    }
}

class SoundDetail extends Component {
    constructor(props){
        super(props)
        this.state ={
            value : '更多',
            data1 : [],
            otherInfo:{},
            cvmore:'更多',
            soundlike:{},
            isload:false,
            index:0,
            comments:{},
            imgList:[],
            islike:false
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.clickCVHandler = this.clickCVHandler.bind(this)
        this.tabHandler = this.tabHandler.bind(this)
        this.click = this.click.bind(this)
        this.likeClick = this.likeClick.bind(this)
        this.fetchHandler()
        
       
    }
    jugislike(){
       let likeList = JSON.parse(localStorage.getItem('likeList')) ? JSON.parse(localStorage.getItem('likeList')):[]
     
        

        let arrlist = likeList.filter(value=>{
            return value.id === this.state.data1.sound.id
        })
        if(arrlist.length>0) {
            this.setState({
                islike:true
            })
        }
    }
    successToast() {
        Toast.success('喜欢成功!!!', 1);
      }
      
      failToast() {
        Toast.fail('喜欢过了!!!', 1);
      }
      
   async likeClick() {
       if(Object.keys(this.props.info).length===0){
           //没登陆跳转到登陆
            this.props.history.push('/login')
           return false
       } 
       let List = []
       //放用户信息,遍历是不是已经喜欢
       if(!JSON.parse(localStorage.getItem('likeList'))){
          
       }else{
            List = this.props.likeList.length !== 0 ? this.props.likeList : JSON.parse(localStorage.getItem('likeList'))
       }
       console.log(List)
    //    console.log(List,JSON.parse(localStorage.getItem('likeList')))
       let arr = List.filter(value=>{
            return value.id === this.state.data1.sound.id
        })
        if(arr.length>0) {
            this.failToast()
            
        }else{
            this.successToast()
            this.setState({
                islike:true
            })
            let data = await this.updateItem({itemId:this.state.data1.sound.id,...this.props.info});
            //重新获取数据丢到数组
               
                if(this.props.info.like){
                    
                    let arr = [this.state.data1.sound]
                    
                    if(!JSON.parse(localStorage.getItem('likeList'))){
                        localStorage.setItem('likeList',JSON.stringify([this.state.data1.sound]) )
                    }
                    console.log(arr)
                    this.props.info.like.map(async(value)=>{
                        let url = '/sound/getsound?soundid='+value.list_id
                        let data = await http.get(url)
                        arr.push(data.info.sound)
                        this.props.getLikeList(arr)
                        localStorage.setItem('likeList',JSON.stringify(arr) )
                        // this.props.setLikeList(value.list_id)
                    })
                }
            
           
        }
    }
    updateItem = (data) => {
        return request({
            url:'/api/v1/users/item',
            data,
            type:'put',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        })
    }
    click(data){
        this.props.history.push("/item/"+data)
        window.location.reload()
        
    }
   async fetchHandler(){
        let url = '/sound/getsound?soundid='+this.props.match.params.id
        let data = await http.get(url)
        let url1 = '/dramaapi/getdramabysound?sound_id='+this.props.match.params.id
        let data1 = await http.get(url1)
        let url2 = '/sound/getsoundlike?type=15&sound_id='+this.props.match.params.id
        let data2 = await http.get(url2)
        let url3 = '/site/getcomment?order=3&type=1&eId='+this.props.match.params.id+'&p=1&pagesize=10'
        let url4 = '/sound/getSortedImage?soundid='+this.props.match.params.id
        let imgList =  await http.get(url4)


        let comments = await fetch(url3,{
            method:"POST",
        　　headers: {
            　　　　'Content-Type': 'application/x-www-form-urlencoded'
        　　},
        }).then(res =>res.json()).then(result=>result)
        this.setState({
            data1 : data.info,
            otherInfo:data1.info,
            soundlike:data2.info,
            comments:comments,
            imgList:imgList
        },function(){
            this.jugislike()//进入时判断是否喜欢
            this.setState({
                isload:true
            })
        })
    }
    tabHandler(index){
        this.setState({
            index:index
        })
    }
    render() {
        let sound = this.state.data1.sound ? this.state.data1.sound:{}
        let user = this.state.data1.user ? this.state.data1.user : {}
        let cv =  this.state.otherInfo.cvs ? this.state.otherInfo.cvs : []
        let drama =  this.state.otherInfo.drama ? this.state.otherInfo.drama :{}
        let recommenddramas =  this.state.soundlike.dramas ? this.state.soundlike.dramas :[]
        let sounds =  this.state.soundlike.sounds ? this.state.soundlike.sounds :[]
        let num = this.state.comments.successVal ? this.state.comments.successVal.comment.num :''
        let commentList = this.state.comments.successVal ? this.state.comments.successVal.comment.Datas :[]
        let imgList = this.state.imgList.info ? this.state.imgList.info :[]
        
        return (
            <SoundDetailStyled value={this.state.value}>
                {
                    this.state.isload ?(<>
                        
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
            <BorderedSoundActionContainer {...this.state}>
                <ul>
                    <li><i className="share"></i><span>分享</span></li>
                    <li><i className="like"  onClick={this.likeClick}></i><span>喜欢</span></li>
                    <li><i className="download"></i><span>下载</span></li>
                </ul>
                <div className="openInApp">用客户端打开</div>
            </BorderedSoundActionContainer>
            
            <div className="soundTab">
                <ul>
                    <li onClick={()=>{this.tabHandler(0)}} className={ this.state.index ===0 ? "active" :""}>简介</li>
                    <li onClick={()=>{this.tabHandler(1)}} className={ this.state.index ===1 ? "active" :""}>评论{'('+num+')'}</li>
                    <li onClick={()=>{this.tabHandler(2)}} className={ this.state.index ===2 ? "active" :""}>图片</li>
                </ul>
            </div>

{/* 图片 */}
            <div  className={ this.state.index ===2 ? "imgContent" :"imgContent active"}>
                        {
                            imgList.map(value=>{
                                return (
                                    <div key={value.id}><img style={{width:"100%",height:"100%"}} src={value.front_cover} alt=""/></div>
                                )
                            })
                           
                        }
            </div>





{/* 评论 */}
            <div className={ this.state.index ===1 ? "test" :"test active"}>
                 <div id="comments">
                        {
                            commentList.map((value)=>{
                                return (
                                    <div className="commentsItem" key={value.id}>
                                        <div><img style={{height:".4rem",width:".4rem",borderRadius: "50%"}} src={value.icon} alt=""/></div>
                                        <BorderedCommentsItemBody >
                                        <div className="commentsItemRight" >
                                            <p>{value.username}</p>
                                            <span>{value.ctime}</span>
                                            <i>{value.comment_content}</i>
                                        </div>
                                        <div className="commentsItemCompliment">{value.like_num}</div>
                                            {
                                             value.sub_comment_num ?(
                                                
                                                <ul>
                                                    {
                                                        value.subcomments.map((value1)=>{
                                                            return (
                                                                <li key={value1.id}>
                                                                    <a className="commentUser" href="#">{value1.username}</a>
                                                                    <div className="commentTime">{value1.ctime}</div>
                                                                    <div className="commentContent">{value1.comment_content}</div>
                                                                </li>
                                                            )
                                                        })
                                                       
                                                    }
                                                    
                                                </ul>
                                             ):('')
                                            }
                                        
                                        </BorderedCommentsItemBody>
                                    </div>
                                )
                            })
                        }

                      
                 </div>       
            </div>
{/* 简介 */}
            <div className={ this.state.index ===0 ? "tabContent" :"tabContent  active"}>
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
                           <span onClick={this.clickHandler}>{this.state.value}</span>
                        </div>
                    </BorderedSoundInfo>
                        {
                            Object.keys(drama).length !== 0 ? (
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
                            ):('')
                        }
                    {
                       cv.length !==0 ? (
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
                        ) :""
                    }
                   

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

                        {
                          recommenddramas.length !==0 ?(
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
                          ):('') 
                        }
                       


                        <div className="sound-block">
                            <p>相似音频</p>
                            <div className="sound-block-like">
                            {
                                sounds.map(value=>{
                                    return (
                                        <a onClick={(data)=>this.click(value.id)} key={value.id}>
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
                    </>):(<img src="https://static.missevan.com/mimages/201603/29/f6b4a63596f56f2bc77d4fb467cab85c160911.gif
                " alt=""/>)
                }


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

export default withRouter(connect(mapState,mapDispatch)(SoundDetail));