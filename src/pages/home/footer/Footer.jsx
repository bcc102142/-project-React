import React, { Component } from 'react';
import { FooterStyled } from './FooterStyled'
class Footer extends Component {
    render() {
        return (
            <FooterStyled>
                <div className="footer-top">
                    <a>客户端</a>
                    <i></i>
                    <a href='#top'>返回顶部</a>
                </div>
                <div className="footer-bottom">MissEvan弹幕音频网 京ICP备:14055174号-1</div>
            </FooterStyled>
        );
    }
}

export default Footer;