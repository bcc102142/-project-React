import Styled from 'styled-components'

const ChannelStyled  = Styled.div`
position: relative;
width: 100%;
paddingBottom: .16rem;
margin: .1rem auto;
height:2.3rem;
background:transparent
padding-bottom:.16rem;
overflow:hidden;
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
            position: relative;
            top: .04rem;
            margin-right: .05rem;
            height: .2rem;
            width: .2rem;
            
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
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin : 0 .14rem
    a{
        width: auto;
        height: 1.63rem;
       
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
            height: .36rem;
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
`

export { ChannelStyled }