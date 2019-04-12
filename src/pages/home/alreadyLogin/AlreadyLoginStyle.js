import Styled from 'styled-components'

const AlreadyLoginStyle  = Styled.div`
.username{
   display:flex;
   align-items:center;
   padding:.2rem;
   span{
       padding-left:.5rem;
   }
}
.changePassword{
    display:flex;
    align-items:center;
    background:#fff;
    padding:.2rem;
}
.mylike{
    background:#000;
    display:flex;
    flex-direction:column;
    color:#fff;
    span{
        padding-left:.3rem
        padding-top:.1rem
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