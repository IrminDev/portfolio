import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants';
import { Tilt } from "react-tilt";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
`;

const Title = styled.div`
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 12px;
    text-align: center;
    color: ${({ theme }) => theme.text_primary};
    @media screen and (max-width: 960px) {
        font-size: 2rem;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    gap: 12px;
    flex-direction: column;
    @media screen and (max-width: 960px) {
    }
`;

const Desc = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 12px;
    @media screen and (max-width: 960px) {
        font-size: 1rem;
    }
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;
const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;
const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 50px;
  justify-content: center;
`;

const Skill = styled.div`
    width: 100%;
    max-width: 500px;
    background-color: rgba(17, 25, 40, 0.83);
    border: 1px solid rgba(255, 255, 255, 0.125);
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    border-radius: 16px;
    padding: 18px 36px;
    @media (max-width: 768px) {
        max-width: 400px;
        padding: 10px 36px;
    }

    @media (max-width: 500px) {
        max-width: 330px;
        padding: 10px 36px;
    }
`;

const Skills = () => {
    return (
        <Container id="Skills">
            <Wrapper>
                <Title>Skills</Title>
                <Desc>Here are some of the technologies I've worked with:</Desc>

                <SkillsContainer>
                    {skills.map((skill, index) => (
                        <Tilt key={index} options={{ max: 25 }}>
                            <Skill key={index}>
                                <SkillTitle>{skill.title}</SkillTitle>
                                <SkillList>
                                    {skill.skills.map((item, index) => (
                                        <SkillItem key={index}>
                                            <SkillImage src={item.image} alt={item.name} />
                                            {item.name}
                                        </SkillItem>
                                    ))}
                                </SkillList>
                            </Skill>
                        </Tilt>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>    
    )
}   

export default Skills