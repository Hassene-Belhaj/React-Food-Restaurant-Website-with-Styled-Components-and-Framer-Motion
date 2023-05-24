import React from 'react'
import { ButtonDiv, Container, EditIcon, EditPhoneDiv, HeroImageDiv, HeroTextDiv, PhoneIcon } from './HeroSection.style'
import { Button } from '../../GlobalStyle/Global.style'

const HeroSection = ({theme}) => {
  return (
    <Container>
           <HeroTextDiv>
            <h2>spring in <br/>
             <span style={{fontSize:"5rem",color:"#FFB766"}}>WoodFood </span>     </h2>
             <p style={{fontSize:"1.5rem"}}>the most delicious outdoor food</p> 
             <ButtonDiv>
               <Button style={{marginRight:"1rem"}} padding={"1rem 2rem"} borderstyle={"25px"}>Capacity</Button>
               <Button style={{marginRight:"1rem"}} padding={"1rem 2rem"} borderstyle={"25px"}>Location</Button>
               <Button style={{marginRight:"1rem"}} padding={"1rem 2rem"} borderstyle={"25px"}>Seat Type</Button>
             </ButtonDiv>
           </HeroTextDiv>
           
           <HeroImageDiv>
            <img style={{height:"90%"}} src="/images/food.png" alt="" />
           </HeroImageDiv>

           <EditPhoneDiv>
             <Button style={{marginRight:"1rem"}} padding={"1rem 1rem"} borderstyle={"50%"}>  <EditIcon  size={40}/></Button>
             <Button style={{background:"#FFB766"}} padding={"1rem 1rem"} borderstyle={"50%"}> <PhoneIcon  size={40}/> </Button>

           
           </EditPhoneDiv>

    </Container>
  )
}

export default HeroSection