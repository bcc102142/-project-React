import Styled from 'styled-components'


const RankingStyled = Styled.div`
flex:1 0 auto;
.detail-head{
    display: block;
    line-height: .4rem;
    background-color: #fff;
    color: #000;
    text-align: center;
    font-size: .16rem;
    border-bottom: 1px solid #e0e0e0;
    position: relative;
    height: .4rem;
    top: 0;
    left: 0;
    right: 0;
}
.ranking-body{
    display: block;
    position: relative;
    height: 100%;
    width: 100%;
    .ranking-item{
        display: flex;
        position: relative;
        height: 1.3rem;
        width: 100%;
        padding: .1rem;
        justify-content: space-around;
        align-items: center;
        .ranking-item-list{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            position: relative;
            height: 100%;
            width: 60%;
        }
        .ranking-item-img{
            position: relative;
            span{
                bottom: 0;
                right: 0;
                height: .18rem;
                line-height: .18rem;
                position: absolute;
                display: block;
                right: 5px;
                padding-left: .14rem;
                font-size: .12rem;
                color: #fff;
                z-index:2
                &::before{
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
            .ranking-item-img-box{
                position:relative;
                z-index:1;
                &::before{
                    content:"";
                    position:absolute;
                    display:block;
                    width:1.1rem ;
                    height:1.1rem;
                    border-radius: 4px;
                    top:-3px;
                    right:-3px;
                    border:1px solid #bdbdbd
                    z-index:-1;
                }
                &::after{
                    content:"";
                    position:absolute;
                    display:block;
                    width:1.1rem ;
                    height:1.1rem;
                    border-radius: 4px;
                    top:-6px;
                    right:-6px;
                    border:1px solid #bdbdbd
                    z-index:-1;
                }
                


                }
            }
        }
    }
    
}
`

export { RankingStyled }