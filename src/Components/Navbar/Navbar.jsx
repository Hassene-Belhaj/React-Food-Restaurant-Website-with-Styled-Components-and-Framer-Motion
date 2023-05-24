import React from 'react'
import { Container, DarkLight, DarkLightIconeDiv, LightDark, NavbarDivLinks, NavbarLink, NavbarLogo, NavbarSocialLinks, SocialLinkFb, SocialLinkInsta } from './Navbar.style'
import { Button } from '../../GlobalStyle/Global.style'
import { motion } from 'framer-motion'


const Navbar = ({theme,HandleToggle}) => {

const NavVariants = {
    hidden: {opacity: 0} ,
    visible : {
        opacity : 1 ,
        transition :{
            delayChildren : 0.3,
            staggerChildren : 0.2, 
    },  
    },
};

const Item = {
    hidden :{opacity : 0, y:-100},
    visible : {opacity : 1 ,y: 0},
};

  return (
   
    <Container initial="hidden" animate="visible" variants={NavVariants}>
        <NavbarLogo variants={Item}>
            <h2>Wood<span style={{color:"lightgray"}}>Food</span></h2>
        </NavbarLogo>

    <NavbarDivLinks>
    <motion.div variants={Item}>    
            <NavbarLink >All menus</NavbarLink>
    </motion.div>
    <motion.div variants={Item}>       
            <NavbarLink >Delivery</NavbarLink>
    </motion.div>
    <motion.div variants={Item}>      
            <NavbarLink >Bar</NavbarLink>
    </motion.div>
    <motion.div variants={Item}>
            <NavbarLink >Contacts</NavbarLink>
        </motion.div>       
    </NavbarDivLinks>  
        <DarkLightIconeDiv variants={Item}>
        {theme==="light" ? <LightDark  onClick={HandleToggle} size={20}  /> 
        : <DarkLight onClick={HandleToggle} size={20} />
        }
        </DarkLightIconeDiv>

        <NavbarSocialLinks variants={Item}>
        <Button borderstyle={"14px"} padding={"14px 18px"}><SocialLinkFb size={20} /> </Button>
        <Button borderstyle={"14px"} padding={"14px 18px"}><SocialLinkInsta size={20} /> </Button>
        </NavbarSocialLinks>
</Container>  
)
}

export default Navbar