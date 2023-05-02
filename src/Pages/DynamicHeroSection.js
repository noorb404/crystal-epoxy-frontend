import React from 'react';
import styled from 'styled-components';

const Hero = styled.section`
  position: relative;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 389px) {
    height: auto;
    padding-top: 50%;
    background-position: top center;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  color: #fff;
  z-index: 1;
  margin-top: -50px;

  @media screen and (max-width: 767px) {
    margin-top: -20px;
    padding-top: 40%;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  color:#ffff;
  @media screen and (max-width: 767px) {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 30px;

  @media screen and (max-width: 767px) {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
`;

const DynamicHeroSection = ({ title, subtitle, image }) => {
  return (
    <Hero image={image}>
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
      </HeroContent>
    </Hero>
  );
};

export default DynamicHeroSection;
