import Styled from 'styled-components'

const OtherChannelStyled = Styled.div`
 position: relative;
width: 100%;
paddingBottom: .16rem;
margin: .1rem auto;
height:3.66rem;
background:transparent
padding-bottom:.16rem
.channel-title{
    height: .4rem;
    line-height: .4rem;
    display: flex;
    position: relative;
    justify-content: space-between;
    padding: 0 .14rem;
    .channel-title-head{
        font-size: 16px;
        text-align:center;
        i{
            display:inline-block;
            background-size: 86px 86px;
            background-position: -44px -44px;
            position: relative;
            top: .04rem;
            margin-right: .05rem;
            height: .2rem;
            width: .2rem;
            background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons-catalog@2x.1144a958.png');
        }
    }
    .channel-title-nav{
        max-width: .66rem;
        text-align: center;
        font-size: .13rem;
        color: #9e9e9e;
        &::after{
            content: "";
            height: .16rem;
            width: .16rem;
            display: inline-block;
            position: relative;
            top: 3px;
            right: -3px;
            background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons@2x.98a0c78a.png');
            background-position: -98px -325px;
            background-size: 365px 345px;
        }
    }
}
.channel-body{
    flex-wrap: wrap;
    min-height: 1.7rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 .14rem;
    a{
        width: calc(50vw - 28px);
        margin: 3px;
        height:1.49rem;
        .imgbox{
            width: 100%;
            height: 1.06rem;
            background-size: 100%;
            border-radius: 4px;
            background-repeat: no-repeat;
            background-position: 50%;
            display: block;
            position: relative;
            .commentQuantity{
                width: .8rem;
                height: .2rem;
                padding: 0 5px;
                text-align: right;
                position: absolute;
                top: 0;
                right: 0;
                span{
                    float: right;
                    display: inline-block;
                    position: relative;
                    height: .2rem;
                    line-height: .2rem;
                    padding-left: .18rem;
                    color: #fff;
                    font-size: .12rem;
                    text-shadow: 0 1px 1px rgba(0,0,0,.7);
                    &::before{
                        content: "";
                        position: absolute;
                        top: 4px;
                        left: 0;
                        width: .15rem;
                        height: .13rem;
                        background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons-thumbnails@2x.f1c29abf.png');
                        background-position: -18px -26px;
                        background-size: 56px 55px;
                    }
                    
                }
            }
            .title{
                margin-top: 3px;
                width: 100%;
                height: .4rem;
                word-break: break-all;
                -o-text-overflow: ellipsis;
                text-overflow: ellipsis;
                overflow: hidden;
                display: -moz-box;
                -moz-box-orient: vertical;
                -moz-line-clamp: 2;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                box-orient: vertical;
                line-clamp: 2;
                line-height: .2rem;
            }
        }
    }
}
`
export {OtherChannelStyled}