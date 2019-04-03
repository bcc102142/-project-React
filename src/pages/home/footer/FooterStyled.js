import Styled from 'styled-components'

const FooterStyled = Styled.div `

width: 100%;
flex-direction: column;
position: relative;
height: .7rem;
padding: .1rem .2rem;
color: #9e9e9e;
font-size: .14rem;
.footer-bottom{
    text-align: center;
    width: 100%;
    font-size: .12rem;
}
.footer-top{
    display: flex;
    justify-content: space-around;
    align-items: center;
    i{
        height: .16rem;
        width: .16rem;
        background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons@2x.22244f46.png');
        background-position: -18px -325px;
        background-size: 365px 341px;
    }
    button{
        background: transparent;
        color: #9e9e9e;
        border: none;
        width: .6rem;
        text-rendering: auto;
        color: initial;
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: start;
        margin: 0em;
        font: 400 13.3333px Arial;
    }
}

`

export { FooterStyled }