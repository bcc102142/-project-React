import Styled from 'styled-components'

const HeadStyled  = Styled.div `
    position: sticky;
    top:0px;
    z-index:666;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .1rem;
    line-height: .2rem;
    background-color: #000;
    height:.45rem;
    flex:0 0 auto;
    .headInput{
        width:2.75rem;
        height:.3rem
        input{
            border:none;
            padding-left:.3rem;
            width:100%;
            height:100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            border-radius:.1rem;
        }
        span{
            display: block;
            position: absolute;
            top: .15rem;
            left: .17rem;
            width: .14rem;
            height: .14rem;
            background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons@2x.5a1ba5bd.png');
            background-position: -309px -262px;
            background-size: 365px 345px;
            opacity: .3;
        }
    }
    i{
        width: 1.02rem;
        height: .2rem;
        margin: 0;
        display: inline-block;
        background-position: 50%;
        background-repeat: no-repeat;
        line-height: .2rem;
        background-size: 100%;
        background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAAoCAYAAACy9xVmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RURDOTdFNkZDQjhFMTFFODg1ODBEQUYwMDA4MDM4QTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RURDOTdFNzBDQjhFMTFFODg1ODBEQUYwMDA4MDM4QTAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFREM5N0U2RENCOEUxMUU4ODU4MERBRjAwMDgwMzhBMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFREM5N0U2RUNCOEUxMUU4ODU4MERBRjAwMDgwMzhBMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgy0adIAAAzwSURBVHja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')
    
    }
   
       display:flex;
       align-items:center;
        .search{
            width: .22rem;
            height: .2rem;
            background-size: 392px 375px;
            background-position: -367px -54px;
            background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons@2x.db0ede62.png');
            margin-right:.2rem
        }
        .headCansel{
            margin-right:.2rem;
            color: #fff;;
        }
        
     
    
    .menu{
            margin: 0;
            background-position: -367px -76px;
            flex: 0 1 auto;
            width: .22rem;
            height: .2rem;
            background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons@2x.db0ede62.png');
            background-size:  392px 375px;
        }

    
`

const SuggestItem = Styled.div`
    display:${ props =>props.display }
    position:absolute;
    top:.45rem;
    left:0;
    width:100%;
    height:6.22rem;
    background:#f5f5f5;
    z-index:999;
    ul{
        padding-left:.1rem;

        li{
            padding-top:.2rem;
            a{
                i{
                    display: inline-block;
                    position: relative;
                    width: .13rem;
                    height: .13rem;
                    margin: 0 .1rem 0 0;
                    background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons@2x.5a1ba5bd.png');
                    background-position: -352px -164px;
                    background-size: 365px 345px;
                    vertical-align: top;
                }
            }
        }
    }
`

const AsideMenu = Styled.div`
    position:absolute;
    top:.45rem;
    right:0;
    width:100%;
    transition:all 0.5s ;
    height:${ props =>props.isshow ? '6.22rem' :0 };
    background:#000;
    z-index:999;
    overflow:hidden;
    .login{
        height: 1.1rem;
        padding: .2rem .3rem;
        margin-bottom: .2rem;
        width:100%;
        background:#3d3d3d
        display:flex;
        align-items:center;
        div{
            border-radius:.4rem;
            overflow:hidden;
            img{
                width:.7rem;
                height: .7rem;
            }
          
        }
        span{
            padding-left:.3rem;
            color:#fff;
            font-size:.16rem;
        }
        &::after{
            position:absolute;
            content:"";
            display:block;
            background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons@2x.5a1ba5bd.png');
            background-position: -352px -220px;
            background-size: 365px 345px;
            height: .14rem;
            width: .08rem;
            right:.1rem;
            top:.45rem;
        }
    }
    .aStyle{
        margin-bottom:1px;
        width:100%;
        height:.38rem;
        padding-left:.36rem;
        line-height:.36rem;
        background:#3d3d3d;
        color:#fff;
        font-size:.16rem;
        position:relative;
        &::after{
            position:absolute;
            content:"";
            display:block;
            background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons@2x.5a1ba5bd.png');
            background-position: -352px -220px;
            background-size: 365px 345px;
            height: .14rem;
            width: .08rem;
            right:.1rem;
            top:.1rem;
        }
        &::before{
            position:absolute;
            content:"";
            display:block;
            height: .16rem;
            width: .16rem;
            left:.1rem
            top:.1rem;

        }
    }
    .toHome{
        &::before{
            background: url('//static.missevan.com/assets/m/images/build/sprite-svg.e8ca344d.svg') -2px -43px/82px 61px;
        }
    }
    .alive{
        &::before{
            background: url('//static.missevan.com/assets/m/images/build/sprite-svg.e8ca344d.svg') -46px -2px/82px 61px;
        }
    }
    .wallet{
        &::before{
            background: url('//static.missevan.com/assets/m/images/build/sprite-svg.e8ca344d.svg') -22px -43px/82px 61px;
        }
    }

`


export  {HeadStyled, SuggestItem,AsideMenu}