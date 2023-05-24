import { styled,createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

html{
    background: ${({theme})=>theme.background};
    color: ${(theme)=>theme.color};
    scroll-behavior: smooth;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
}
`
export const Container = styled.div`
width: 100%;
height: 100vh;
`





export const Button = styled.button`
padding: ${({padding})=>padding};
border: 2px solid lightgray;
color: ${({color})=>color};
border-radius:${({borderstyle})=>borderstyle};
text-transform: capitalize;
font-weight: 500;
font-size: 1.1rem;
transition: all 0.2s ease-in-out;
cursor : pointer ;
&:hover {
    background-color: #FFB766;
    transition: all 0.2s ease-in-out;
}
`