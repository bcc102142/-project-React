import React, { Component } from 'react';

import http from 'utils/fetch'

import {SearchDetailStyled,BorderedsearchDetailitem} from './SearchDetailStyled'


class SearchDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            list : [],
            isload:false
        }
        this.fetchHandler()
    }
   async fetchHandler(){
        let search = new URLSearchParams(this.props.location.search)
        let params = search.get("s")
        let url = '/dramaapi/search?s='+params+'&p=1'
        let data = await http.get(url)
        this.setState({
            list:data.info.Datas.slice(0,3)
        },function(){
            this.setState({
                isload:true
            })
        })
    }
    render() {
        return (
            <SearchDetailStyled>
                {
                    this.state.isload?(
                        <div>
                        <div className="searchDetailList">
                        <a href="#">
                        {
                            this.state.list.map(function(value){
                                return (
                                    <BorderedsearchDetailitem key={value.id}>
                                        <div style={{width:".7rem",height:".7rem"}}><img style={{width:".7rem",height:".7rem"}} src={value.cover} alt=""/></div>
                                        <div className="searchDetailListRight">
                                            <p>{value.name}</p>
                                            <div>
                                                <span>{value.catalog_name}</span><span>类型：{value.type_name}</span>
                                            </div>
                                            <div>{
                                                value.serialize ?<span style={{color:"#000"}}>更新至： {value.newest}</span> :'已完结'
                                            }</div>
                                        </div>
                                    </BorderedsearchDetailitem>
                                )
                            })
                        }
                        </a>
                    </div>
                    </div>):(<img src="https://static.missevan.com/mimages/201603/29/f6b4a63596f56f2bc77d4fb467cab85c160911.gif
                " alt=""/>)
                }
               
            </SearchDetailStyled>
        );
    }
}

export default SearchDetail;