import Styled from 'styled-components'

const HeadStyled = Styled.div`

.channel-title{
    height: .24rem;
    line-height: .4rem;
    display: flex;
    position: relative;
    justify-content: space-between;
    padding: 0 0 0 .14rem;
    margin: .2rem 0;
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
    .channel-title-nav{
        text-align:center;
        max-width: .66rem;
        line-height:.24rem
        font-size: .13rem;
        color: #9e9e9e;
        background:#fff;
        border-radius: .2rem;
        width: .64rem;
        height: .24rem;
        &::after{
            /* content: "";
            height: .16rem;
            width: .16rem;
            display: inline-block;
            position: relative;
            top: 3px;
            right: -3px;
            background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons@2x.98a0c78a.png');
            background-position: -98px -325px;
            background-size: 365px 345px; */
            content: "";
            display: block;
            position: relative;
            float: right;
            top: 7px;
            right: 12px;
            width: 8px;
            height: 8px;
            box-sizing: border-box;
            border: 1px solid #757575;
            border-bottom: none;
            border-left: none;
            transform: rotate(45deg);
        }
    }
}
`
export { HeadStyled }