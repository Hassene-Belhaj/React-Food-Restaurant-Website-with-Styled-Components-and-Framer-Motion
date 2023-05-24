import React from 'react'
import {Container, GlobalStyle } from './GlobalStyle/Global.style'
import { ThemeProvider } from 'styled-components'
import Navbar from './Components/Navbar/Navbar'
import useLocalStorage from 'use-local-storage'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import HeroSection from './Components/HeroSection/HeroSection'


const App = () => {

const [theme,setTheme] = useLocalStorage("dark")

const light = {
  background : "#fff" ,
  color : "#000",
}

const dark = {
  background : "#000" ,
  color : "#fff",
}

const HandleToggle = () => {
  setTheme(theme === "dark" ? "light" : "dark")
}


  return (
      <Router>
    <ThemeProvider theme={theme === "dark" ? light : dark} >
      <GlobalStyle />
    <Container>
      <Navbar theme={theme} HandleToggle={HandleToggle} />
      <HeroSection theme={theme}  />
    </Container> 
    </ThemeProvider>
      </Router>
  )
}

export default App