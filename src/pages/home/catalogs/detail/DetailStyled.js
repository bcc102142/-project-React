import Styled from 'styled-components'

const DetailStyled = Styled.div`

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
.two-butoon{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
    height: .7rem;
    padding: .2rem 0 .1rem;
    width: 100%;
    .updateTime{
        width: 1.72rem;
        height: .4rem;
        line-height: .38rem;
        background-color: #fff;
        font-size: .14rem;
        font-weight: 700;
        margin: 0;
        padding: 0;
        color: #000;
        padding-left: .3rem;
        display: inline-block;
        position: relative;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 3px;
        &::before{
            top: 1px;
            background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons@2x.5a1ba5bd.png');
            background-position: -38px -287px;
            background-size: 365px 345px;
            content: "";
            display: block;
            position: absolute;
            height: .35rem;
            width: .35rem;
            left: .32rem;
            background-repeat: no-repeat;
        }
    }
    .filter{
        width: 1.72rem;
        height: .4rem;
        line-height: .38rem;
        background-color: #fff;
        font-size: .14rem;
        font-weight: 700;
        margin: 0;
        padding: 0;
        color: #000;
        padding-left: .3rem;
        display: inline-block;
        position: relative;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 3px;
        &::before{
            top: 1px;
            background-position: -75px -287px;
            background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons@2x.5a1ba5bd.png');
            background-size: 365px 345px;
            content: "";
            display: block;
            position: absolute;
            height: .35rem;
            width: .35rem;
            left: .32rem;
            background-repeat: no-repeat;
        }
    }
}



`
export { DetailStyled }