import React, { Component } from 'react';

import {DramaStyled} from './DramaStyled'


export default (props) =>{
    return (
        <DramaStyled>
                {
                    props.isload ?(
                        <div>
                        <div>
                        <div className="drama-head">新作速递</div>
                        <div className="drama-item">
                        {
                            props.list.last.map(function(value){
                                return (
                                    <a href="#" key={value.id}>
                                    <div>
                                        <img style={{height:"1.1rem",width:"1.1rem"}} src={'//static.missevan.com/dramacoversmini/'+value.cover} alt=""/>
                                    </div>
                                    <p>{value.name}</p>
                                    <div>
                                        <span>更新至</span><i>{value.newest}</i>
                                    </div>
                                </a>
                                )
                            })
                        }
                        </div>
                    </div>
                    <div>
                        <div className="drama-head">经典作品</div>
                        <div className="drama-item">
                        {
                            props.list.classic.map(function(value){
                                return (
                                    <a href="#" key={value.id}>
                                    <div>
                                        <img style={{height:"1.1rem",width:"1.1rem"}} src={'//static.missevan.com/dramacoversmini/'+value.cover} alt=""/>
                                    </div>
                                    <p>{value.name}</p>
                                    <div>
                                        <span>更新至</span><i>{value.newest}</i>
                                    </div>
                                </a>
                                )
                            })
                        }
                        </div>
                    </div>
                    <div>
                        <div className="drama-head">小编推荐</div>
                        <div className="drama-item">
                        {
                            props.list.recommend.map(function(value){
                                return (
                                    <a href="#" key={value.id}>
                                    <div>
                                        <img style={{height:"1.1rem",width:"1.1rem"}} src={'//static.missevan.com/dramacoversmini/'+value.cover} alt=""/>
                                    </div>
                                    <p>{value.name}</p>
                                    <div>
                                        <span>更新至</span><i>{value.newest}</i>
                                    </div>
                                </a>
                                )
                            })
                        }
                        </div>
                    </div>
                     </div>
                    ):(<img src="https://static.missevan.com/mimages/201603/29/f6b4a63596f56f2bc77d4fb467cab85c160911.gif
                    " alt=""/>)
                }
               
            </DramaStyled>
    )
}