import React, { Component } from 'react';

import HeadStyled from './HeadStyled'

class Head extends Component {
    render() {
        return (
            <HeadStyled>
                <i></i>
                <a href="www.baidu.com">
                <i className="search"></i>
                <i className="menu"></i>
                </a>
            </HeadStyled>
        );
    }
}

export default Head;