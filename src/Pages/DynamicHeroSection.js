import React from 'react';
import styled from 'styled-components';

import heroImage from './path/to/image.jpg';

const Hero = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;

  @media screen and (max-width: 767px) {
    height: auto;
    padding-top: 50%;
    background-position: top center;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  color: #fff;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    font-size: 2rem;
    margin-bottom: 10px;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 30px;

  @media screen and (max-width: 767px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

const HeroImage = styled.img`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
  }
`;

const DynamicHeroSection = ({ title, subtitle, image }) => {
  return (
    <Hero image={image}>
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
      </HeroContent>
      <HeroImage src={image} alt="" />
    </Hero>
  );
};

export default DynamicHeroSection;
