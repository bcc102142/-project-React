import Styled from 'styled-components'

import border from 'components/styled/border.js'


const SoundDetailStyled = Styled.div`
#soundPlayer{
    height: 3.25rem;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;

    .soundPlayerBg{
        position:absolute;
        top:0;
        width:100%;
        height:100%;
        z-index:1
        filter: blur(.2rem);

    }
    .imgBox{
        position:relative;
        z-index:2;
        img{
            border-radius:1.5rem
        }
       
    }
    .soundController{
        position: absolute;
        z-index: 5;
        right: .1rem;
        bottom: .2rem;
        width: .48rem;
        height: .3rem;
        background-color: hsla(0,0%,84%,.4);
        box-shadow: 0 0 5px 0 rgba(0,0,0,.4);
        border-radius: .08rem;
        cursor: pointer;
        text-align: center;
        transition: bottom .5s ease;
        .btnPlay{
            background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons-sound@2x.50e9596e.png');
            background-size: 110px 102px;
            margin-left: 1px;
            background-position: 0 -30px;
            display: inline-block;
            width: .28rem;
            height: .28rem;
            margin-top: 1px;
            background-repeat: no-repeat;
        }
        }
        .progress-bar{
            position: absolute;
            bottom: -1px;
            width: 100%;
            height: 4px;
            padding: 1px 0;
            z-index: 4;
            cursor: none;
            user-select: none;
            &::before{
                content: "";
                display: block;
                position: absolute;
                top: -2px;
                right: 0;
                bottom: -2px;
                left: 0;
            }
            &::after{
                content: "";
                display: block;
                position: absolute;
                left: 0;
                top: 1px;
                right: 0;
                bottom: 1px;
                background-color: #d6d6d6;
                z-index: -1;
            }
            .played{
                position: absolute;
                top: 1px;
                left: 0;
                width: 0;
                height: 2px;
                width:0%;
                .draggable{
                    position: absolute;
                    top: -7px;
                    right: -7px;
                    width: .16rem;
                    height: .16rem;
                    border-radius: 50%;
                    border: 4px solid rgba(0,0,0,.3);
                    cursor: pointer;
                    user-select: none;
                    &::before{
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 8px;
                        height: 8px;
                        background-color: #fff;
                        border-radius: 50%;
                    }
            }
        }
       
        }
        .soundTime{
            position: absolute;
            bottom: -.14rem;
            left: 0;
            width: 100%;
            font-size: 9px;
            color: #a6a6a6;
            height: 14px;
            line-height: 12px;
            padding: 1px 5px;
            pointer-events: none;
            z-index:1
        }
    }

    .soundTab{
        ul{
            display:flex;
            font-size:.12rem;
            height:.4rem;
            li{
                width:33%
                display:flex;
                align-items:center;
                justify-content:center;
                position:relative;
                &::after{
                    content: "";
                    width: .74rem;
                    height: 100%;
                    display: block;
                    position: absolute;
                    bottom: -1px;
                    border-bottom: 2px solid transparent;
                    z-index: 1;
                    color: #c14a3f;
                    border-color: #c14a3f;
                }
            }
        }
    }
    .tabContent{
            padding : .12rem
        

                }
            }
        }
   
}
.soundRelative{
           
    .channel-title{
        height: .24rem;
        line-height: .4rem;
        display: flex;
        position: relative;
        justify-content: space-between;
        padding: 0 .14rem 0 .14rem;
        margin: .1rem 0;
        align-items:center
        .channel-title-head{
        font-size: 16px;
        text-align:center;
        i{
            display:inline-block;
            background-size: 86px 86px;
            position: relative;
            top: .04rem;
            margin-right: .05rem;
            height: .2rem;
            width: .2rem;
            
        }
        &::before{
            content: "";
            display: block;
            position: absolute;
            left: 0;
            top: 10%;
            height: 80%;
            background-color: #000;
            width: 4px;
            border-radius: 4px;
        }
    }  
}
.sound-block{
    padding: .15rem 0;
    p{
        font-size: .13rem;
        color: #979797;
    }
    .sound-block-recommend{
        display:flex;
        flex-wrap:wrap;
        a{
            width:33%;
            padding:0 .06rem;
            padding-top:.1rem;
            span{
                display:inline-block;
                width:1.06rem;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                margin-top: 2px;
                color: #424242;
                font-size: .13rem;
            }
        }
    }
    .sound-block-like{
        display:flex;
        flex-wrap:wrap;
        align-items: center;
        a{
            width: 33%;
            height: 1.63rem;
            padding-top:.1rem;
        img{
            width: 1.06rem;
            height: 1.06rem;
            display: block;
            overflow: hidden;
            position: relative;
            border-radius: 4px;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: 100%;
        }
        .channel-body-title{
            width: 100%;
            height: .26rem;
            word-break: break-all;
            text-overflow: ellipsis;
            overflow: hidden;
            box-orient: vertical;
            line-clamp: 2;
            line-height: .18rem;
            margin: 4px 0;
            color: #616161;
            font-size: .13rem;
        }
        .channel-body-bottom{
            display: flex;
            justify-content: space-between;
            span{
                position: relative;
                padding-left: .14rem;
                font-size: .11rem;
                line-height: .11rem;
                color: #bdbdbd;
            }
            .channel-body-palytimes{
                &::before{
                    background-size: 56px 55px;
                    background-position: -44px -14px;
                    background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons-thumbnails@2x.f1c29abf.png');
                    content: "";
                    display: block;
                    position: absolute;
                    left: 0;
                    height: .1rem;
                    width: .12rem;
                }
            }
            .channel-body-comments{
                &::before{
                    background-size: 56px 55px;
                    background-position: -44px -14px;
                    background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons-thumbnails@2x.f1c29abf.png');
                    content: "";
                    display: block;
                    position: absolute;
                    left: 0;
                    height: .1rem;
                    width: .12rem;
                }
            }
        }
    }
    }
}
}
`
const SoundInfo = Styled.div`
                display:flex;
                flex-direction:column;
                padding-bottom:.18rem;
                >p:nth-of-type(1){
                    font-size: .14rem;
                    font-weight: 400;
                    min-height: .24rem;
                    line-height: .24rem;
                }
                ul{
                    display:flex;
                    list-style-type: none;
                    height: .14rem;
                    line-height: .14rem;
                    font-size: .1rem;
                    color: #757575;
                    align-items:center;
                    padding : .1rem 0;
                    li{
                        padding-left: .16rem;
                        margin-right: .2rem;
                        position: relative;
                        &::before{
                            content: "";
                            position: absolute;
                            top: 1px;
                            left: 1px;
                            width: .12rem;
                            height: .1rem;
                            background-repeat: no-repeat;
                            background-size: 100%;
                            background-size: 56px 55px;
                            background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons-thumbnails@2x.f1c29abf.png');
                        }
                    }
                    li:nth-of-type(1){
                        &::before{
                        background-position: -44px -14px;
                        }
                    }
                    li:nth-of-type(2){
                        &::before{
                            background-position: -44px -26px;
                        }
                        
                    }
                        
                    }
                    .infoBox{
                        .intro{
                            font-size: .12rem;
                            color: #9e9e9e;
                            width: 100%;
                            word-break: break-all;
                            line-height:.2rem;
                            height:${props => props.value ==='更多' ?'.4rem':'auto'}
                            
                            overflow:hidden;
                        }
                    }
                    span{
                        margin-left: calc(100% - 50px);
                        color: #c14a3f;
                        font-size: .12rem;
                    }

`

const SoundActionContainer = Styled.div`
        display:flex;
        background:#fff;
        padding-top:.22rem;
        align-items:center;
        padding: .24rem .12rem .1rem;
        ul{
            display:flex;
            flex 1;
            justify-content:space-around;
            li{
                display:flex;
                flex-direction:column;
                align-items:center;
                font-size: .1rem
                i{
                    display: block;
                    width: .36rem;
                    height: .36rem;
                    padding: 8px;
                    border-radius: 50%;
                    background-color: #f5f5f5;
                    background-position: 50%;
                    background-repeat: no-repeat;
                    background-size: 100%;
                }
                .share{
                    &::after{
                        background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons-sound@2x.50e9596e.png');
                        background-size: 110px 102px;
                        background-position: 0 -60px;
                        content: "";
                        display: block;
                        height: 100%;
                        background-repeat: no-repeat;
                    }
                }
                .like{
                    &::after{
                        background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons-sound@2x.50e9596e.png');
                        background-size: 110px 102px;
                        background-position: -22px -60px;
                        content: "";
                        display: block;
                        height: 100%;
                        background-repeat: no-repeat;
                    }
                }
                .download{
                    &::after{
                        background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons-sound@2x.50e9596e.png');
                        background-size: 110px 102px;
                        background-position: -66px -60px;
                        content: "";
                        display: block;
                        height: 100%;
                        background-repeat: no-repeat;
                    }
                }
            }
        }
        .openInApp{
            width: 1.2rem;
            height: .32rem;
            line-height:.32rem;
            text-align:center;
            font-size: .12rem;
            background:#c14a3f;
            color:#fff;
            border-radius:.05rem;
        }
`
const SoundDrama = Styled.a`
    height: 1.04rem;
    width:100%;
    display:flex;
    padding: .18rem 2px .18rem 0;
    border-bottom: 1px solid #e0e0e0;
   
    .soundDramaRight{
        display:flex;
        justify-content:space-between;
        align-items:center;
        .soundDramaRightText{
            padding-left:.1rem;
            display:flex;
            flex-direction:column;
            justify-content:space-around
            span{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #9e9e9e;
                font-size: .12rem;
            }
            p{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #000;
                font-size: .14rem;
            }
            display:flex;
            flex-direction:column;
           
        }
        .soundDramaRightBtn{
            display:flex;
            justify-content:center
            align-items:center;
            margin-left:.65rem;
            height:.26rem;
            width:.65rem;
            background-color: #c14a3f;
            color: #fff;
            border-radius: 3px;
        }
    }

`

const SoundCV = Styled.div`
.cv-in-sound-list{
    display:flex;
    .cv-in-sound{
        display:flex;
        flex-direction:column;
        justify-content:center;
        padding:.05rem;
        padding-left:.15rem;
        div{
            display:flex;
            justify-content:center;
        }
        p{
            height: .18rem;
            margin-top: 5px;
            font-size: .12rem;
            line-height: .18rem;
        }
        span{
            height: .16rem;
            color: #9e9e9e;
            font-size: 10px;
            line-height: .16rem;
            overflow: hidden;
            text-align: center;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
}
}


`

const BorderedSoundActionContainer = border({
    component:SoundActionContainer,
    width:'0 0 1px 0'
})

const BorderedSoundInfo = border({
    component:SoundInfo,
    width:'0 0 1px 0'
})

const BorderedSoundDrama = border({
    component:SoundDrama,
    width:'0 0 1px 0'
})

const BorderedSoundCV = border({
    component:SoundCV,
    width:'0 0 1px 0'
})

export  { SoundDetailStyled,BorderedSoundActionContainer,BorderedSoundInfo,BorderedSoundDrama,BorderedSoundCV }