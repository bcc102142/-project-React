import Styled from 'styled-components'

import border from 'components/styled/border'

const LoginStyle  = Styled.div`
display:flex;
flex-direction:column;
.codeBox{
    display:flex;
    justify-content:space-between;
    .code{
        height:.42rem;
        padding:.05rem 0; 
        width:35%;
        margin-top:.2rem;   
     }
}
.login-error{
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

.LoginFormBox{
    padding:.22rem .41rem 0 .41rem;
    width:100%;
    
    .title{
        color:#000;
        font-size:.16rem;
    }
    .tip{
        display:flex;
        padding-top:.2rem;
        align-items:center
        input{
            width:.16rem;
            height:.16rem;
        }
        p{
            padding-left:.07rem
        }
        span{
            padding-left:1.37rem
        }
    }
    .btnLogin{
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
    .btnRegister{
        color: #000;
        display:block;
        background-color: #fff;
        border-color: #fff;
        height:.4rem;
        margin:.2rem 0;
        font-size: 16px;
        line-height:.4rem;
        text-align:center;
        border-radius:.05rem;
    }
    .otherLogin{
        height:1.12rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        ul{
            display:flex;
            align-items:center;
            width:100%;
            justify-content:space-around;
            padding-top:.1rem;
            li{
                width:.5rem;
                height:.5rem;
            }
            li:nth-of-type(1){
                background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons-share@2x.754f2ea8.png');
                background-size: 154px 153px;
                background-repeat: no-repeat;
                background-position: 0 -104px;
            }
            li:nth-of-type(2){
                background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons-share@2x.754f2ea8.png');
                background-size: 154px 153px;
                background-repeat: no-repeat;
                background-position: -104px -51px;
            }
            li:nth-of-type(3){
                background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons-share@2x.754f2ea8.png');
                background-size: 154px 153px;
                background-repeat: no-repeat;
                background-position: 0 -52px;
            }
        }
    }


}
`


const LoginUsername = Styled.div`
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
const LoginCode = Styled.div`
        margin-top:.2rem;
        width:60%;
        input{
            display: block;
            width:100%;
            height: .42rem;
            line-height: .3rem;
            padding:.05rem .1rem;
            border:none;
        }
        
`

const BorderedloginUsername = border({
    component:LoginUsername,
    color: '#e0e0e0',
    radius:5
})
const BorderedLoginCode = border({
    component:LoginCode,
    color: '#e0e0e0',
    radius:5
})

export { LoginStyle,BorderedloginUsername,BorderedLoginCode }