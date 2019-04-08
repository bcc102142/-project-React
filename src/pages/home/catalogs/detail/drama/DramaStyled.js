import Styled from 'styled-components'

const DramaStyled = Styled.div`
padding:0 .14rem
    .drama-head{
        padding:.14rem 0
        font-size:.16rem
    }
    .drama-item{
        padding-bottom:.2rem
        display: flex;
        justify-content: space-between;
        flex-wrap:wrap
        a{
            display:flex;
            flex-direction:column;
            padding-bottom:.25rem
        p{
            font-size:.13rem;
            color:#000;
            width:1.1rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        div{
                width: 1.1rem;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            span{
                color:#9e9e9e;
                font-size:.11rem
            }
            i{
                color: #616161;
                margin-left: .1rem;
                
                font-size:.11rem

            }
        }
    }
    }
   


`
export { DramaStyled }