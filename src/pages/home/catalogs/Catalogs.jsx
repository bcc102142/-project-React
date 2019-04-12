import React, { Component } from 'react';

import { CatalogsStyled } from './CatalogsStyled'

import { withRouter } from 'react-router-dom'

class Catalogs extends Component {
    constructor(props){
        super(props)
        this.click = this.click.bind(this)
    }
    click(value){
        this.props.history.push('/catalogs/'+value)
    }
    render() {
        return (
            <CatalogsStyled>
                <a  onClick={()=>this.click(46)} >
                    <span className="span-img"></span>
                    <span>有声漫画</span>
                </a>
                <a onClick={()=>this.click('drama')}>
                    <span className="span-img"></span>
                    <span>广播剧</span>
                </a>
                <a onClick={()=>this.click(8)}>
                    <span className="span-img"></span>
                    <span>音乐</span>
                </a>
                <a onClick={()=>this.click(54)}>
                    <span className="span-img"></span>
                    <span>催眠</span>
                </a>
                <a onClick={()=>this.click(26)}>
                    <span className="span-img"></span>
                    <span>娱乐</span>
                </a>
                <a onClick={()=>this.click(41)}>
                    <span className="span-img"></span>
                    <span>日抓</span>
                </a>
                <a onClick={()=>this.click(6)}>
                    <span className="span-img"></span>
                    <span>听书</span>
                </a>
                <a onClick={()=>this.click(52)}>
                    <span className="span-img"></span>
                    <span>配音</span>
                </a>
                <a onClick={()=>this.click(65)}>
                    <span className="span-img"></span>
                    <span>铃声</span>
                </a>
               
            </CatalogsStyled>
        );
    }
}

export default withRouter(Catalogs);