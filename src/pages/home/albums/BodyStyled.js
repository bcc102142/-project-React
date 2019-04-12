import Styled from 'styled-components'

const BodyStyled = Styled.div`
flex-wrap: wrap;
padding: 10px 0;
display: flex;
justify-content: space-around;
align-items: center;
.my-gallery-class{
    width:100%;
    flex-wrap: wrap;
display: flex;
justify-content: space-between;
}
a{
    
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    width:1.63rem;
    padding-left:.2rem;
    .sound.title{
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap
    }
    .img-box{
    .sound-num{
        height: .36rem;
        line-height: .24rem;
        position: relative;
        span{
            
            display: block;
            position: absolute;
            right: 5px;
            bottom:.38rem;
            padding-left: .14rem;
            font-size: .12rem;
            color: #fff;
            &:before{
            content: "";
            display: block;
            position: absolute;
            margin: 4px 0 3px;
            left: 0;
            height: .11rem;
            width: .13rem;
            background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons-thumbnails@2x.f1c29abf.png');
            background-position: 0 -44px;
            background-size: 56px 55px;
        }
        }
        
    }
   } 
}


`
export { BodyStyled }