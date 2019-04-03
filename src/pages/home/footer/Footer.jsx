import React, { Component } from 'react';
import { FooterStyled } from './FooterStyled'
class Footer extends Component {
    render() {
        return (
            <FooterStyled>
                <div className="footer-top">
                    <button>客户端</button>
                    <i></i>
                    <button>返回顶部</button>
                </div>
                <div className="footer-bottom">MissEvan弹幕音频网 京ICP备:14055174号-1</div>
            </FooterStyled>
        );
    }
}

export default Footer;