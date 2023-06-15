import React from 'react'
import styled from 'styled-components';
import HeroSection from './components/HeroSection';
import { useProductContext } from './components/context/Productcontex';


const About = () => {
   
  const { myName } = useProductContext();

    const data = {
        name: "Yadav Ecommerce"
    }
    
  return (
    <>

    <Wrapper>
      {myName}
       <HeroSection myData={data}/>
       
    </Wrapper>

    </>
  )
}
const Wrapper = styled.section`
height: 100vh;
background-color: ${({ theme }) => theme.colors.bg};
`;

export default About
