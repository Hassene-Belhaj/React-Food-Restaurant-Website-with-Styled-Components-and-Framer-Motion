import React from 'react'
import { ButtonDiv, Container, EditIcon, EditPhoneDiv, HeroContainer, HeroImage, HeroImageDiv, HeroTextDiv, PhoneIcon, Smdiv, Span } from './HeroSection.style'
import { Button } from '../../GlobalStyle/Global.style'
import {motion} from 'framer-motion'

const HeroSection = ({theme}) => {

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
        hidden :{opacity : 0, x:-100},
        visible : {opacity : 1 ,x: 0},
    };

    const ItemTwo = {
        hidden :{opacity : 0, y:50},
        visible : {opacity : 1 ,y: 0},
    };

 

  return (
    <Container initial="hidden" animate="visible" variants={NavVariants}>
      <HeroContainer>

           <HeroTextDiv>
            <motion.div variants={Item}><h2>spring in <br/>
            
             <Span>WoodFood</Span></h2></motion.div>

             <motion.div variants={Item}> <p style={{fontSize:"1.5rem"}}>the most delicious outdoor food</p> </motion.div>

             <ButtonDiv>
             <motion.div variants={Item}> <Button style={{marginRight:"1rem"}} padding={"1rem 2rem"} borderstyle={"25px"}>Capacity</Button></motion.div>

             <motion.div variants={Item}>   <Button style={{marginRight:"1rem"}} padding={"1rem 2rem"} borderstyle={"25px"}>Location</Button></motion.div>
             
             <motion.div variants={Item}> <Button style={{marginRight:"1rem"}} padding={"1rem 2rem"} borderstyle={"25px"}>Seat Type</Button></motion.div>
            
              
             </ButtonDiv>
             
             <Smdiv variants={Item}>
             <Button style={{marginRight:"1rem"}} padding={"1rem 1rem"} borderstyle={"50%"}>
                <EditIcon size={40}/>
              </Button>          
              <Button style={{background:"#FFB766"}} padding={"1rem 1rem"} borderstyle={"50%"}>
                <PhoneIcon size={40}/> </Button>
             </Smdiv>
           
           </HeroTextDiv>
           
           <HeroImageDiv variants={ItemTwo}>
            <HeroImage  variants={ItemTwo} src="/images/food.png" alt="" />
            {/* <HeroImageDivBG></HeroImageDivBG> */}
           </HeroImageDiv>

      </HeroContainer>

          <motion.div variants={Item}>
           <EditPhoneDiv variants={Item}>
              <Button style={{marginRight:"1rem"}} padding={"1rem 1rem"} borderstyle={"50%"}>
                <EditIcon size={40}/>
              </Button>          
              <Button padding={"1rem 1rem"} borderstyle={"50%"}>
                <PhoneIcon size={40}/> </Button>
           </EditPhoneDiv>
           </motion.div> 

    </Container>
  )
}

export default HeroSection