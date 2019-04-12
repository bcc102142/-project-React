import Styled from 'styled-components'
import border from 'components/styled/border.js'


const RankingDetailStyled = Styled.div`
flex:1 0 auto;
.rankDetailHead{
   height:1.5rem;
   padding:.1rem;
   width:100%;
   position:relative;
   display:flex;
   align-items:center;
   
        .rankDtailHeadImgBox{
                width:1.1rem;
                height:1.1rem;
                position:relative;
                z-index:2;
                
            img{
                width:1.1rem;
                height:1.1rem;
                display:block
            }
        }
        .rankDtailHeadTextBox{
            flex:1;
            height:1.1rem;
            position:relative;
            z-index:2;
            padding-left:.2rem;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            p{
                width: calc(100% - 10px);
                height: .5rem;
                word-break: break-all;
                text-overflow: ellipsis;
                overflow: hidden;
                box-orient: vertical;
                line-clamp: 2;
                line-height: .25rem;
                color: #fff;
            }
            div{
                width:1rem;
                display:flex;
                justify-content:space-between;
                span{
                    word-break: break-all;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    box-orient: vertical;
                    line-clamp: 2;
                    line-height: .29rem;
                    color: #fff;
            }
                img{
                    height: .25rem;
                    width: .25rem;
                    display: block;
                    margin: 2px;
                    border-radius: 50%;
                }
            }
            
        }
        .rankDetailHeadbg{
            width:100%;
            height:100%;
            left:0;
            position:absolute;
            top:0;
            filter: blur(.2rem);
        }
    
}
.soundList{
    display: block;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

`

const SoundItemStyled = Styled.div`
width:100%-.1rem;
height:.7rem;
padding:.1rem 0 .1rem 0;
margin-left:.1rem;
padding-right:0;
display:flex;
    .soundItemRight{
                display:flex;
                width:80%;
                flex-direction:column
                justify-content:space-around;
                padding-left:.1rem;
                
                p{  
                    width:100%;
                    height:.36rem;
                    font-size:.16rem;
                    word-break: break-all;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                .other-item-right-bottom{
                    display:flex;
                    align-items:center;
                    width:100%;
                    .other-item-right-bottom-left{
                    font-size: 12px;
                    color: #9e9e9e;
                    margin-right: .2rem;
                    padding-left: .18rem;
                    width: .66rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    display: inline-block;
                    position: relative;
                    &::before{
                        content: "";
                        display: block;
                        position: absolute;
                        left: 2px;
                        top: 4px;
                        width: .12rem;
                        height: .12rem;
                        line-height: .12rem;
                        background-size: 56px 55px;
                        background-position: -44px -14px;
                        background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons-thumbnails@2x.f1c29abf.png');
                    }
                }
                .other-item-right-bottom-right{
                    font-size: 12px;
                    color: #9e9e9e;
                    margin-right: .2rem;
                    padding-left: .18rem;
                    width: .66rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    display: inline-block;
                    position: relative;
                    &::before{
                        content: "";
                        display: block;
                        position: absolute;
                        left: 2px;
                        top: 4px;
                        width: .12rem;
                        height: .12rem;
                        line-height: .12rem;
                        background-size: 56px 55px;
                        background-position:-15px -44px;
                        background-image: url('//static.missevan.com/assets/m/images/build/sprite-icons-thumbnails@2x.f1c29abf.png');
                    }
                }
                }
               
                
            }
`

const BorderedSoundItem = border({
    component:SoundItemStyled,
    width:'0 0 1px 0'
})

export { RankingDetailStyled,SoundItemStyled,BorderedSoundItem }