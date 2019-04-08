import Styled from 'styled-components'

import border from 'components/styled/border.js'


const SearchDetailStyled = Styled.div`
.searchDetailList{
    padding:.1rem;
    a{  
      
    }
}
`
const searchDetailitem = Styled.div`
            margin-left:.1rem;
            padding:.1rem .1rem .1rem 0;
            width:100%;
            height: .9rem;
            display:flex;
            .searchDetailListRight{
                flex:1;
                display:flex;
                flex-direction:column;
                padding-left:.1rem;
                width:60%;
                p{
                    width: 100%;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    color: #000;
                }
                div{
                    display:flex;
                    justify-content:space-between;
                    padding-top:.08rem;
                    color: #9e9e9e;
                    font-size: .12rem;
                    span{
                        width:50%;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                }
            }
`

const BorderedsearchDetailitem = border({
    component:searchDetailitem,
    width: '0 0 1px 0'
})

export { SearchDetailStyled,BorderedsearchDetailitem }