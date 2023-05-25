import { styled } from 'styled-components'
import { AiOutlineEdit , AiFillPhone} from 'react-icons/ai'
import {motion} from 'framer-motion'


export const Container = styled(motion.div)`
height: calc(100vh - 100px);
background:${({theme})=>theme.background};
transition: all 0.3s ease-in-out;
margin-top: 4rem;
margin-left: 4rem;
position: relative;

@media screen and (max-width:768px){
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
width:50%;
color: ${({theme})=>theme.color};
font-size: 3rem;
text-transform: capitalize;
@media screen and (max-width:768px){
display: block;
text-align: center;
width: 100%;
font-size: 2rem;

}
`

export const HeroImageDiv = styled(motion.div)`
width: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
@media screen and (max-width:768px){
display    :block ;
}
`


export const ButtonDiv = styled(motion.div)`
display: flex;
justify-content: center;
@media screen and (max-width : 1280px) {
display: block;
margin-top:1rem;
}
`



export const EditPhoneDiv = styled(motion.div)`
position:absolute;
bottom: 100px;
left: 5px;
@media screen and (max-width : 1280px) {
left: 50%;
border-top: 0;
transform: translate(50%,50%);
}
`


export const EditIcon = styled(AiOutlineEdit)`
`

export const PhoneIcon = styled(AiFillPhone)`
`