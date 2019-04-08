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
            .soundInfo{
                ul{
                    display:flex;

                }
            }
        }
   
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

const BorderedSoundActionContainer = border({
    component:SoundActionContainer,
    width:'0 0 1px 0'
})

export  { SoundDetailStyled,BorderedSoundActionContainer }