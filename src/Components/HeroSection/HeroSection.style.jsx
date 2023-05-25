import { styled } from 'styled-components'
import { AiOutlineEdit , AiFillPhone} from 'react-icons/ai'
import {motion} from 'framer-motion'


export const Container = styled(motion.div)`
width: 100%;
height: calc(100vh - 100px);
background:${({theme})=>theme.background};
transition: all 0.3s ease-in-out;
margin-top: 2rem;
margin-left: 4rem;
position: relative;
@media screen and (max-width:768px){
width: 100%;
margin-left: 0;
}
`

export const HeroContainer =styled(motion.div)`
width: 100%;
height:auto;
display: flex;
@media screen and (max-width:768px){
display: block;
}
`
export const Span = styled.span`
font-size: 4rem;
color: #FFB766;
@media screen and (max-width:768px){
font-size: 3rem;
width: 100%;
margin: auto;
}
`





export const HeroTextDiv = styled(motion.div)`
display: flex;
width: 100%;
height: 100%;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
width:100%;
color: ${({theme})=>theme.color};
font-size: 3rem;
text-transform: capitalize;
@media screen and (max-width:768px){
display: block;
text-align: center;
font-size: 2rem;

}
`

export const HeroImageDiv = styled(motion.div)`
width: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
margin-right: 2rem;
margin-top: 1rem;
@media screen and (max-width:768px){  
width: 100%;
display :block;
position: relative;

}
`
export const HeroImage= styled(motion.img)`
max-width: 100%;
margin-right: 4rem;
@media screen and (max-width:768px){  
width: 100%;
display :block;
position: relative;

}
`


export const HeroImageDivBG = styled(motion.div)`
    @media screen and (max-width:768px){
        position: absolute;
        width: 100%;
        inset: 0;
        background: rgba(0,0,0,0.4);
}
`


export const ButtonDiv = styled(motion.div)`
display: flex;
justify-content: center;
@media screen and (max-width : 1280px) {
display    :none ;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
margin-top:1rem;
}
`

export const Smdiv = styled(motion.div)`
display: none;
@media screen and (max-width:768px){
width: 100%;
display: flex;
justify-content: center;
align-items: center;
}
`


export const EditPhoneDiv = styled.div`
position:absolute;
bottom: 5rem;
left: 5px;
@media screen and (max-width : 768px) {
display    :none ;
bottom:5rem;
left: 50%;
transform:translateX(-50%);
}
`


export const EditIcon = styled(AiOutlineEdit)`
`

export const PhoneIcon = styled(AiFillPhone)`
`