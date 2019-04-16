import React, { Component } from 'react';

import http from 'utils/fetch'

import OtherUI from './OtherUI'

import {BorderedOtherHeadStyled,OtherStyled} from './OtherStyled'

import { connect } from 'react-redux'

import { getcatalogsSync,getcatalogsAsync } from './actionCreator'

import BScroll from 'better-scroll'

import _ from 'lodash'

import { withRouter } from 'react-router-dom'

const mapState = (state)=>{
    return {
        data:state.catalogsData.data
    }
}

const mapDispatch = (dispatch)=>{
    return {
        getDataHandler(){
            dispatch(getcatalogsAsync())
        }
    }
}

class Other extends Component {

    constructor(props){
        super(props)
        this.state ={
            list1:[],
            list2:[],
            list3:[],
            data:{},
            list:[],
            isload:false,
            index :0
        }
        this.itemClickHandler = this.itemClickHandler.bind(this)
        this.fetchHandler()
        this.bool = false
    }
    clickHandler(index){
        this.setState({
            index:index
        })
    }
    itemClickHandler(data){
       this.props.history.push('/item/'+data)
    }
    async fetchHandler(){
        this.props.getDataHandler()
        let id = this.props.id
        let data = await http.get('/mobileWeb/catalogrank?cid='+id)
        let data3 = this.props.data
        let list = []
        this.setState({
            data : data3[id]
        },function(){
            // console.log(this.state.data)//有可能是undefined
            if(this.state.data){
                Object.keys(this.state.data.son).map(async (value)=>{
                    let dataList = await http.get('/mobileWeb/catalogmenu?order=3&cid=' + value + '&page_size=4')
                    list.push(dataList.info)
                    this.setState({
                         list1 : data.info.slice(0,4),
                         list : list,
                         isload:true
                     })
                 })
            }
            
            
        })
    }
      handleNavClick(value, arr) {
          let index = 0
        for(let i = 0;i<arr.length;i++){
           if(value.id === arr[i].id) {
            index = i
           }
            
        }
          this.bcroll.scrollTo(0,-400*index)
      }

    render() {
        
        if(document.querySelector('.bcroll')&&!this.bool){
            this.bool = true
            this.bcroll =  new BScroll('.bcroll',{
                click: true,
                probeType:2
            })
            let that = this

            // this.bcroll.on('scroll',function(){
            //     if(that.bcroll.y<0){
            //      that.setState({
            //          index:Math.floor(-that.bcroll.y /300) 
            //      }) 
                    // console.log(-that.bcroll.y /300) 
            //     }
            // })

            this.bcroll.on('scroll', _.debounce(function(){
                if(that.bcroll.y<0){
                 that.setState({
                     index:Math.floor(-that.bcroll.y /320) 
                 })
                 console.log(-that.bcroll.y /320) 
                }
            }, 100))
            
          }
         
        let son = this.state.data? this.state.data :{}
        // let son = this.state.data.son? this.state.data.son :{}

        // let arr = [{catalog_name:'全区动态',id:1}]
        
        // for( let key in son ){
        //      arr.push(son[key])  
        // }
        // // let arr2 = [...arr,{id:2}]
        // let List =[...this.state.list]
        // Object.values(son).map((value,index)=>{
        //    if (List[index]){
        //     List[index].catalog_name = value.catalog_name
        //     List[index].id = value.id
        //    }
        // })
        return (
            <OtherUI {...this.state} itemClick={this.itemClickHandler} navclick={(value,arr)=>{ this.handleNavClick(value,arr) }} click={(index)=>{ this.clickHandler(index) }} son={son}></OtherUI>
        );
        // return (
        //     <OtherStyled>
        //         {
        //             this.state.isload ?(
        //                 <div>
        //                 <BorderedOtherHeadStyled>
        //                     {
        //                         arr.map((value,index)=>{
        //                             return (
        //                                 <li onClick={ ()=>{this.clickHandler(index)} } key={value.id}><a className={this.state.index === index ? 'active' :''} >{value.catalog_name}</a></li>
        //                             )
        //                         })
        //                     }
        //                 </BorderedOtherHeadStyled>
        //                 <div className="bcroll" style={{height:"5.5rem"}}>
        //                 <div >
        //                 <div id="1" className="other-box">
        //                     <div className="channel-title">
        //                         <div className="channel-title-head">
        //                             全区动态
        //                         </div>
        //                         <div className="channel-title-head-right">
        //                             更多
        //                         </div>
        //                     </div>
        //                     <div className="other-box-body">
        //                     {
        //                         this.state.list1.map(function(value){
        //                            let m = Math.floor(value.duration / 1000 /60)
        //                            let s = Math.floor((value.duration - m*1000*60)/1000)
        //                             s = s <10 ? "0"+s : s
        //                             return (
        //                                 <a href="#" key={value.id}>
        //                             <div className="img-box"><img style={{
        //                                 height:".7rem",width:".7rem"
        //                             }} src={value.front_cover} alt=""/></div>
        //                             <div className="other-item-right">
        //                                 <p>{value.soundstr}</p>
        //                                 <div className="other-item-right-center">
        //                                     <span>up主:   {value.username}</span>
        //                                 </div>
        //                                 <div className="other-item-right-bottom">   
        //                                     <span className="other-item-right-bottom-left">{value.view_count}</span>
        //                                     <span className="other-item-right-bottom-right">{m}:{s}</span>
        //                                 </div>
        //                             </div>
        //                         </a>
        //                             )
        //                         })
        //                     }
                                
        //                     </div>
        //                 </div>
        //                     {
        //                         List.map((value1,index1) =>{
        //                             return (
        //                                 <div  className="other-box" key={value1.catalog_name} >
        //                         <div className="channel-title">
        //                             <div className="channel-title-head">
        //                                 {value1.catalog_name}
        //                             </div>
        //                             <div className="channel-title-head-right">
        //                                 更多
        //                             </div>
        //                         </div>
        //                         <div  className="other-box-body">
        //                         {
        //                             value1.Datas.map(function(value,index){
        //                                let m = Math.floor(value.duration / 1000 /60)
        //                                let s = Math.floor((value.duration - m*1000*60)/1000)
        //                                 s = s <10 ? "0"+s : s
        //                                 return (
        //                                     <a href="#" key={value.id}>
        //                                 <div className="img-box"><img style={{
        //                                     height:".7rem",width:".7rem"
        //                                 }} src={value.front_cover} alt=""/></div>
        //                                 <div className="other-item-right">
        //                                     <p>{value.soundstr}</p>
        //                                     <div className="other-item-right-center">
        //                                         <span>up主:   {value.username}</span>
        //                                     </div>
        //                                     <div className="other-item-right-bottom">   
        //                                         <span className="other-item-right-bottom-left">{value.view_count}</span>
        //                                         <span className="other-item-right-bottom-right">{m}:{s}</span>
        //                                     </div>
        //                                 </div>
        //                             </a>
        //                                 )
        //                             })
        //                         }
                                
        //                         </div>
    
        //                     </div>
        //                             )
        //                         })
                                
        //                     }
        //                 </div>
        //             </div>
        //             </div>
        //             ) :(<img src="https://static.missevan.com/mimages/201603/29/f6b4a63596f56f2bc77d4fb467cab85c160911.gif
        //             " alt=""/>)
        //         }
                           
        //         </OtherStyled>
        // )
    }
}

export default withRouter(connect(mapState,mapDispatch)(Other)) ;