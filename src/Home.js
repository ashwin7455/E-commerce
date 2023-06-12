import React from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/FeatureProduct";



const Home = () => {
    const data = {
        name: "Yadav Store"
    }
  return (
    <>
      <Wrapper>
        <HeroSection  myData = {data}/>
        <FeatureProduct/>
        <Services/>
        <Trusted/>
        
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  height: full;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default Home;
