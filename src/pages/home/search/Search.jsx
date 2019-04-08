import React, { Component } from 'react';

import http from 'utils/fetch'

import { SearchStyled,HotSearch,BorderHotSearch,Bordera } from './SearchStyled'

class Search extends Component {
    constructor(props){
        super(props)
        this.state ={
            list : []
        }
        this.fetchHandler()
    }
   async fetchHandler(){
        let data = await http.get('/mobileWeb/hotsearch')
        // let a = await http.get('/dramaapi/search?s=撒野&p=1')
        this.setState({
            list:data.info,
            isload :false
        },function(){
            this.setState({
                isload:true
            })
        })
    }
    render() {
        return (
            <SearchStyled>
                {
                    this.state.isload ? (
                        <div>
                        <HotSearch><BorderHotSearch>热门搜索</BorderHotSearch></HotSearch>
                        <div className="searchContent">
                        {
                            this.state.list.map(function(value){
                                return (
                                    // <Bordera href={"/searchItem/"+value.key} key={value.key}>{value.key}</Bordera>
                                    <Bordera href={'/searchItem?s='+value.key+'&t=drama'} key={value.key}>{value.key}</Bordera>
                                )
                            })
                        }
                        </div>
                        </div>):(<img src="https://static.missevan.com/mimages/201603/29/f6b4a63596f56f2bc77d4fb467cab85c160911.gif
                " alt=""/>)
                }
              
            </SearchStyled>
        );
    }
}

export default Search;