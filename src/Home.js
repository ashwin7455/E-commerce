import React from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";



const Home = () => {
    const data = {
        name: "Yadav Store"
    }
  return (
    <>
      <Wrapper>
        <HeroSection  myData = {data}/>
        <Services/>
        <Trusted/>
        
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  height: 200vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default Home;
