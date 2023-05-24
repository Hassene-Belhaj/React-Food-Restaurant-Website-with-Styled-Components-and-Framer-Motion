import { styled } from 'styled-components'
import { AiOutlineEdit , AiOutlinePhone} from 'react-icons/ai'

export const Container = styled.div`
width: 100%;
height: calc(100vh - 80px);
display: flex;
justify-content: center;
background:${({theme})=>theme.background};
transition: all 0.3s ease-in-out;
margin-top: 2rem;
margin-left: 3rem;
position: relative;
`



export const HeroTextDiv = styled.div`
justify-content: center;
align-items: center;
flex: 1;
color: ${({theme})=>theme.color};
font-size: 3rem;

text-transform: capitalize;
`

export const HeroImageDiv = styled.div`
flex: 1;
`
export const ButtonDiv = styled.div`
display: flex;
margin-top: 4rem;
`


export const EditPhoneDiv = styled.div`
position:fixed;
bottom: 3rem;
left : 4rem ;
`




export const EditIcon = styled(AiOutlineEdit)`

`

export const PhoneIcon = styled(AiOutlinePhone)`

`