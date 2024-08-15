import React from 'react'
import styled from 'styled-components'
import { experiences } from '../../data/constants';
import ExperienceCard from '../cards/ExperienceCard';
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline } from 'react-vertical-timeline-component';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    margin-top: 50px;
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
    padding: 0 20px;
    text-align: center;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 12px;
    @media screen and (max-width: 960px) {
        font-size: 1rem;
    }
`;

const Experience = () => {
    return (
        <Container id="Experience">
            <Wrapper>
                <Title>Experience</Title>
                <Desc>
                    I've programmed for 5 years now since I was in the highschool and I've been improving myself since then taking some courses.
                </Desc>

                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </Wrapper>
        </Container>
    )
}

export default Experience