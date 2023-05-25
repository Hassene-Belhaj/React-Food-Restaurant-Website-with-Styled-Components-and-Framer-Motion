import { styled } from 'styled-components'
import { FaFacebookF,FaInstagram,FaMoon,FaSun } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


export const Container = styled(motion.div)`
width: 100%;
height: 80px;
padding-top:3rem ;
display: flex;
justify-content:space-between;
align-items: center;
`
export const H2 = styled.h2`

`

export const NavbarLogo = styled(motion.div)`
width: 50px;
padding-left: 3rem;
font-size: 1.3rem;
color: ${({theme})=>(theme.color)};
`

export const NavbarDivLinks = styled(motion.div)`
width: 60%;
display:flex;
justify-content:flex-start;
align-items: center;
padding-left:20rem;
@media screen and (max-width : 1408px){
    width: 80%;
}
@media screen and (max-width : 1080px){
    display: none;
}
`

export const NavbarLink = styled(Link)`
text-decoration: none;
display: inline-block;
font-weight: 500;
margin-right: 4rem;
color: ${({theme})=>theme.color};
cursor: pointer;
transition: all 0.15s ease-in-out;
&:hover {
    color: #FFB766;
    transition: all 0.15s ease-in-out;
}

`


export const DarkLightIconeDiv = styled(motion.div)`
width: 20px;
height: auto;
padding-right: 3rem;
cursor :pointer; 
@media screen and (max-width : 1080px){
}
`

export const DarkLight = styled(FaMoon)`
color: black;
`

export const LightDark = styled(FaSun)`
color: #FFB766;
`

export const SocialLinkFb = styled(FaFacebookF)`
`
export const SocialLinkInsta = styled(FaInstagram)`
`
export const NavbarSocialLinks = styled(motion.div)`
width: 180px;
height: auto;
display: flex;
justify-content: space-between;
align-items: center;
padding-right: 2rem;
@media screen and (max-width : 1408px){
    display: none;
}
`