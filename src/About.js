import React from 'react'
import styled from 'styled-components';
import HeroSection from './components/HeroSection';


const About = () => {
   
    const data = {
        name: "Yadav Ecommerce"
    }
    
  return (
    <Wrapper>
       <HeroSection myData={data}/>
       
    </Wrapper>
  )
}
const Wrapper = styled.section`
height: 100vh;
background-color: ${({ theme }) => theme.colors.bg};
`;

export default About
