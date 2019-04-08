import Styled from 'styled-components'

import border from 'components/styled/border'

const OtherStyled = Styled.div`
.other-box{
        padding:0 .15rem
        
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
    .channel-title-head-right{
        text-align: center;
        font-size: 13px;
        color: #9e9e9e;
      
        &::after{
            content: "";
            display: block;
            position: absolute;
            top: 4px;
            right: -3px;
            width:.16rem;
            height:.16rem;
            background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons@2x.5a1ba5bd.png');
            background-position: -44px -325px;
            background-size: 365px 345px; 
        }
    }
    
    
    
}
    .other-box-body{
        display:flex;
        flex-direction:column
       a{   
            .img-box{
                padding:10px;
            }
            color:#000;
            display:flex;
           
            height: .9rem;
            .other-item-right{
                display:flex;
                flex:1;
                flex-direction:column
                padding:.1rem 0;
                justify-content:space-around
                p{  
                    width:2.55rem
                    height:.36rem;
                    font-size:.16rem;
                    word-break: break-all;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                .other-item-right-center{
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    font-size: .12rem;
                    height: .2rem;
                    line-height: .2rem;
                    color: #9e9e9e;
                }
             
                .other-item-right-bottom{
                    display:flex;
                    align-items:center
                    .other-item-right-bottom-left{
                    font-size: 12px;
                    color: #9e9e9e;
                    margin-right: .2rem;
                    padding-left: .18rem;
                    width: .66rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    display: inline-block;
                    position: relative;
                    &::before{
                        content: "";
                        display: block;
                        position: absolute;
                        left: 2px;
                        top: 4px;
                        width: .12rem;
                        height: .12rem;
                        line-height: .12rem;
                        background-size: 56px 55px;
                        background-position: -44px -14px;
                        background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons-thumbnails@2x.f1c29abf.png');
                    }
                }
                .other-item-right-bottom-right{
                    font-size: 12px;
                    color: #9e9e9e;
                    margin-right: .2rem;
                    padding-left: .18rem;
                    width: .66rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    display: inline-block;
                    position: relative;
                    &::before{
                        content: "";
                        display: block;
                        position: absolute;
                        left: 2px;
                        top: 4px;
                        width: .12rem;
                        height: .12rem;
                        line-height: .12rem;
                        background-size: 56px 55px;
                        background-position:-15px -44px;
                        background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons-thumbnails@2x.f1c29abf.png');
                    }
                }
                }
               
                
            }
       }

    }
}




`
const otherHead =Styled.ul`
    padding:0 .1rem
    height: .35rem;
    line-height: .35rem;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    display:flex;
    li{
        padding: 0 .05rem
        span{
            color:#9e9e9e;
            height: 20px;
            position: relative;
            width:100%
            padding-bottom:.1rem
         
            &.active{
                color:#000;
                &::after{
                content: "";
                width: 100%;
                display: block;
                position: absolute;
                bottom: 1px;
                border-bottom: 2px solid transparent;
                z-index: 1;
                border-color: #000;
            }
            }
            
        }
    }
   


`


const BorderedOtherHeadStyled = border({
    component:otherHead
})



export {BorderedOtherHeadStyled ,OtherStyled}