import Styled from 'styled-components'

import border from 'components/styled/border.js'

const SearchStyled  = Styled.div`
height:5rem;
.searchContent{
    display:flex;
    flex-wrap:wrap;
    padding:.15rem .1rem 0 .1rem;
}


`
const contenta  = Styled.a`
padding:.04rem .10rem;
background:#fff;
color:#9e9e9e;
font-size:.12rem;
margin: 5px 6px;
border-radius:.2rem;
`

const HotSearch = Styled.div`
padding:.1rem .1rem 0 0;
`
const HotSearchDiv =  Styled.div`
     margin-left:.1rem;
     padding-bottom:.1rem;
`


const BorderHotSearch = border({
    component:HotSearchDiv,
    width:'0 0 1px 0',
})

const Bordera = border({
    component:contenta,
    radius: 20,
    color:'#9e9e9e'
})

export { SearchStyled,HotSearch,BorderHotSearch,Bordera }