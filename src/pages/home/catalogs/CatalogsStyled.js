import Styled from 'styled-components'

const CatalogsStyled = Styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    padding: .15rem .15rem 1.1rem .15rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    a{
        height: 1.05rem;
        width: 1.05rem;
        display: inline-block;
        position: relative;
        margin: 10px 0;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 0 1px 1px 0 rgba(0,0,0,.2);
        text-align: center;
        .span-img{
            display: block;
            height: .5rem;
            width: .5rem;
            margin: 15px auto 8px;
            background-position: 50%;
            background-repeat: no-repeat;
            -moz-background-size: 100%;
            -o-background-size: 100%;
            background-size: 100%;
            background-image: url('//static.missevan.com/app/46.png');
        }
        
    }
    a:nth-of-type(2) .span-img{
        background-image: url("//static.missevan.com/app/5.png");
    }
    a:nth-of-type(3) .span-img{
        background-image: url("//static.missevan.com/app/8.png");
    }
    a:nth-of-type(4) .span-img{
        background-image: url("//static.missevan.com/app/54.png");
    }
    a:nth-of-type(5) .span-img{
        background-image: url("//static.missevan.com/app/26.png");
    }
    a:nth-of-type(6) .span-img{
        background-image: url("//static.missevan.com/app/41.png");
    }
    a:nth-of-type(7) .span-img{
        background-image: url("//static.missevan.com/app/6.png");
    }
    a:nth-of-type(8) .span-img{
        background-image: url("//static.missevan.com/app/52.png");
    }
    a:nth-of-type(9) .span-img{
        background-image: url("//static.missevan.com/app/65.png");
    }
`

export {CatalogsStyled}