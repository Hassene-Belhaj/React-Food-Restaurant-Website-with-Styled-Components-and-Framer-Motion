import React from 'react'
import { ButtonDiv, Container, HeroImageDiv, HeroTextDiv } from './HeroSection.style'
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

    </Container>
  )
}

export default HeroSection