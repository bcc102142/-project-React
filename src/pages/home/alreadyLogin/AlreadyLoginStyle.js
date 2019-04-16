import Styled from 'styled-components'

const AlreadyLoginStyle  = Styled.div`
.bg{
    height: 1.2rem;
   
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;
    background-image: url('http://www.missevan.com/images/index/eyes1.jpg');
}
.userList{
    ul{
        display:flex;
        background:#fff;
        padding:.2rem;
        li{
            display:flex;
            flex-direction:column;
            padding:0 .1rem;
            justify-content:center;
            p{
                text-align:center;
            }
        }
        li:nth-of-type(3){
            padding-left:1.5rem;
        }
    }
}
.username{
   display:flex;
   flex-direction:column;
   align-items:center;
   padding:.2rem;
   position:absolute;
   top:1rem;
   left:0;
   right:0;
   img{
    border-radius:50%;
   }
   span{
    line-height: .22rem;
    font-size: .16rem;
    font-weight: 700;
   }
}
.changePassword{
    display:flex;
    align-items:center;
    background:#fff;
    padding:.2rem;
}
.mylike{
    padding-top:.2rem
    padding-left:.1rem;
}
.mylikeList{
        display:flex;
        flex-wrap:wrap;
        align-items: center;
        padding:.1rem .1rem .1rem 0;
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
            height: .20rem;
            text-overflow: ellipsis;
            overflow: hidden;
            box-orient: vertical;
            line-clamp: 2;
            line-height: .18rem;
            margin: 4px 0;
            color: #616161;
            font-size: .13rem;
            padding-bottom:.05rem;
            white-space: nowrap;
        }
        .channel-body-bottom{
            display: flex;
            justify-content: space-around;
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
.exit{
    display:flex;
    align-items:center;
    background:#fff;
    padding:.2rem;
}


`

export { AlreadyLoginStyle }