import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled, { useTheme } from 'styled-components'
import { Bio } from '../data/constants';
import { MenuRounded } from '@mui/icons-material';

const Nav = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.bg};
    height: 80px;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;
    color: white;
`

const NavbarContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    color: white;
`;

const NavLogo = styled(Link)`
    width: 80%;
    text-decoration: none;
    color: inherit;
    padding: 0 6px;
    font-size: 1.5rem;
    font-weight: 600;
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    padding: 0 6px;
    @media screen and (max-width: 860px) {
        display: none;
    }
`;

const NavItem = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }

`;

const ButtonContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 6px;
    @media screen and (max-width: 860px) {
        display: none;
    }
`;

const GithubButton = styled.a`
    border: 1px solid ${({ theme }) => theme.primary};
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px 20px;
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.primary};
    transition: all 0.3s ease;
    text-decoration: none;
    &:hover {
        background-color: ${({ theme }) => theme.primary};
        color: white;
    }
`;

const MobileIcon = styled.div`
    color: ${({ theme }) => theme.text_primary};
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    @media screen and (min-width: 861px) {
        display: none;
    }
`;

const MobileMenu = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: end;
    gap: 16px;
    padding: 0 6px;
    list-style: none;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background-color: ${({ theme }) => theme.card_light + 99};
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;

    transition: all 0.3s ease;
    transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: ${({ isOpen }) => isOpen ? '999' : '-1'};
`;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to={'./'}>IrminDev</NavLogo>

                <MobileIcon onClick={() => setIsOpen(!isOpen)}>
                    <MenuRounded />
                </MobileIcon>

                <NavItems>
                    <NavItem href='#About' >About</NavItem>
                    <NavItem href='#Skills'>Skills</NavItem>
                    <NavItem href='#Experience'>Experience</NavItem>
                    <NavItem href='#Projects'>Projects</NavItem>
                    <NavItem href='#Education'>Education</NavItem>
                    <NavItem href='#Achievements'>Achievements</NavItem>
                </NavItems>

                {isOpen ? (
                    <MobileMenu isOpen={isOpen}>
                        <NavItem href='#About' onClick={() => setIsOpen(!isOpen)}>About</NavItem>
                        <NavItem href='#Skills' onClick={() => setIsOpen(!isOpen)}>Skills</NavItem>
                        <NavItem href='#Experience' onClick={() => setIsOpen(!isOpen)}>Experience</NavItem>
                        <NavItem href='#Projects' onClick={() => setIsOpen(!isOpen)}>Projects</NavItem>
                        <NavItem href='#Education' onClick={() => setIsOpen(!isOpen)}>Education</NavItem>
                        <NavItem href='#Achievements' onClick={() => setIsOpen(!isOpen)}>Achievements</NavItem>
                        <GithubButton onClick={() => setIsOpen(!isOpen)} href={Bio.github} style={{
                            backgroundColor: theme.primary,
                            color: theme.text_primary,
                        }}>Github</GithubButton>
                    </MobileMenu>
                ) : null
                }

                <ButtonContainer>
                    <GithubButton href={Bio.github}>Github</GithubButton>
                </ButtonContainer>
            </NavbarContainer>
        </Nav>   
    )
}

export default Navbar