import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants';
import TypewriterComponent from 'typewriter-effect';
import HeroBgAnimation from '../HeroBgAnimation';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { headContainerAnimation, headTextAnimation } from '../../utils/motion';
import StarCanvas from '../canvas/Stars';

const HeroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 80px 30px;

    @media screen and (max-width: 960px) {
        padding: 66px 16px;
    }

    @media screen and (max-width: 640px) {
        padding: 32px 16px;
    }
`;

const HeroInnerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    max-width: 1200px;

    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`;

const HeroLeftContainer = styled.div`
    width: 100%;
    order: 1;
    padding: 20px;
    @media screen and (max-width: 960px) {
        gap: 6px;
        margin-top: 20px;
        order: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const HeroRightContainer = styled.div`
    width: 100%;
    order: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 960px) {
        order: 1;
        margin-bottom: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (max-width: 640px) {
        margin-bottom: 20px;
    }
`;

const HeroImage = styled.img`
    border-radius: 50%;
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    border: 2px solid ${({ theme }) => theme.primary};

    @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
    }
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    line-height: 1.1;

    @media screen and (max-width: 960px) {
        text-align: center;
        font-size: 2.2rem;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 640px) {
        font-size: 1.8rem;
    }
`;

const TextLoop = styled.div`
    font-size: 2.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.text_primary};
    line-height: 1.1;
    gap: 12px;

    @media screen and (max-width: 960px) {
        text-align: center;
        font-size: 1.6rem;
    }

    @media screen and (max-width: 640px) {
        font-size: 1.2rem;
    }
`;

const Span = styled.span`
    cursor: pointer;
    color: ${({ theme }) => theme.primary};
`;

const Subtitle = styled.div`
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.text_secondary};
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 20px;
    @media screen and (max-width: 960px) {
        text-align: center;
        font-size: 1.2rem;
    }

    @media screen and (max-width: 640px) {
        font-size: 0.8rem;
    }
`;

const LinkedInButton = styled.a`
    display: inline-block;
    text-decoration: none;
    -webkit-appearance: button;
    -moz-appearance: button;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 10px 0;

    background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

     &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    color: white;

    margin-top: 20px;
`;

const HeroBg = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 1360px;
    overflow: hidden;
    padding: 0 30px;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);

    @media (max-width: 960px) {
        justify-content: center;
        padding: 0 0px;
    }
`;

const Hero = () => {
    return (
        <HeroContainer id="About">
            <HeroBg>
                <StarCanvas />
                <HeroBgAnimation />
            </HeroBg>

            <motion.div {...headContainerAnimation}>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <Title>Hello there! I'm <br/> {Bio.name}</Title>
                        <motion.div {...headTextAnimation}>
                            <TextLoop>
                                and I'm a <Span>
                                    <TypewriterComponent 
                                        options={{
                                            strings: Bio.roles,
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </Span>
                            </TextLoop>
                        </motion.div>
                        <motion.div {...headContainerAnimation} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Subtitle>{Bio.description}</Subtitle>
                            <LinkedInButton href={Bio.linkedin} >Check my LinkedIn</LinkedInButton>
                        </motion.div>
                    </HeroLeftContainer>
                    <HeroRightContainer>
                        <motion.div {...headContainerAnimation}>
                            <Tilt>  
                                <HeroImage src={Bio.image} alt="Hero Image" />
                            </Tilt>
                        </motion.div>
                    </HeroRightContainer>
                </HeroInnerContainer>
            </motion.div>
        </HeroContainer>
    )   
}

export default Hero