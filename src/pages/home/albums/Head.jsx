import React, { Component } from 'react';

import { HeadStyled } from  './HeadStyled'

class Head extends Component {
    render() {
        return (
            <HeadStyled>
                <div className="channel-title">
                    <div className="channel-title-head">
                        全部音单
                    </div>
                    <div className="channel-title-nav">
                        类型
                    </div>
                </div>
            </HeadStyled>
        );
    }
}

export default Head;