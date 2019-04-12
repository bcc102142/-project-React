import Styled from 'styled-components'

import border from 'components/styled/border'

const RegisterStyle  = Styled.div`
display:flex;
flex-direction:column;
margin-bottom:2.25rem;
.RegisterFormBox{
    padding:.22rem .41rem 0 .41rem;
    width:100%;
    .btnRegister{
        color: #fff;
        background-color: #c14a3f;
        border-color: #c14a3f;
        height:.4rem;
        margin:.3rem 0;
        font-size: 16px;
        line-height:.4rem;
        text-align:center;
        border-radius:.05rem;
    }
    .returnLogin{
        display:flex;
        justify-content:space-between;
        padding-top:.2rem;
        p{
            color: #9e9e9e;
        }
        span{
        }
    }
}
.register-error{
    color:yellow;
    z-index: 999;
    width:150px;
    height:50px;
    line-height:50px;
    text-align:center;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom:0;
    margin: auto;
    background: skyblue;
    border-radius: 10px;
    display:none;
    z-index: 10
}
`

const RegisterUsername = Styled.div`
        margin-top:.2rem;
        input{
            display: block;
            width: 100%;
            height: .42rem;
            line-height: .3rem;
            padding:.05rem .1rem;
            border:none;
        }
`

const BorderedRegisterUsername= border({
    component:RegisterUsername,
    color: '#e0e0e0',
    radius:5
})
export { RegisterStyle,BorderedRegisterUsername }