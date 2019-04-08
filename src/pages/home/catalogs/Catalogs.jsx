import React, { Component } from 'react';

import { CatalogsStyled } from './CatalogsStyled'



class Catalogs extends Component {
    render() {
        return (
            <CatalogsStyled>
                <a href="/catalogs/cartoon">
                    <span className="span-img"></span>
                    <span>有声漫画</span>
                </a>
                <a href="/catalogs/drama">
                    <span className="span-img"></span>
                    <span>广播剧</span>
                </a>
                <a href="/catalogs/music">
                    <span className="span-img"></span>
                    <span>音乐</span>
                </a>
                <a href="/catalogs/hypnosis">
                    <span className="span-img"></span>
                    <span>催眠</span>
                </a>
                <a href="/catalogs/amusement">
                    <span className="span-img"></span>
                    <span>娱乐</span>
                </a>
                <a href="/catalogs/dayCatch">
                    <span className="span-img"></span>
                    <span>日抓</span>
                </a>
                <a href="/catalogs/Lbooks">
                    <span className="span-img"></span>
                    <span>听书</span>
                </a>
                <a href="/catalogs/dub">
                    <span className="span-img"></span>
                    <span>配音</span>
                </a>
                <a href="/catalogs/ring">
                    <span className="span-img"></span>
                    <span>铃声</span>
                </a>
               
            </CatalogsStyled>
        );
    }
}

export default Catalogs;