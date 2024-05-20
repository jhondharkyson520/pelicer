import styled from "styled-components";
import logo from '../../assets/Header/logo.svg';
import { useState } from "react";
import { IoMenu} from "react-icons/io5";

const HeaderComponent = styled.header`
    justify-content: center;
    position: absolute;
`;


const MenuHeader = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0);
    backdrop-filter: blur(3px);
    
    width: 100%;

    @media screen and (max-width: 910px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const Logo = styled.img`
    width: 20%;
    position: relative;

    @media screen and (max-width: 910px) {
        padding-left: 40px;
        width: 200px;
    }
`;

const LinkMenu = styled.a`
    color: #000;
    text-decoration: none;
    padding-left: 1rem;
    font-size: 18px;
    width: 150px;
    font-family: 'Open Sans';    
    font-weight: bolder;
    cursor: pointer;

    &:hover {
        color: #5F92BB;
    }

    @media screen and (max-width: 910px) {
        color: black
    }
`;

const ContainerLinks = styled.div`
   display: flexbox;

    @media screen and (max-width: 910px) {
        display: none;
    }
`;

const HamburguerBtIcon = styled(IoMenu)`
    size: 30;
    margin-right: 2rem;
`;



const ButtonHamburguer = styled.button`
    padding-right: 40px;
    background-color: transparent;
    border: none;
    display: none;

    @media screen and (max-width: 910px) {
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            cursor: pointer;
            color: #5F92BB;
        }
    }
`;

const ContainerListaHambuguerMenu = styled.div`
    background-color: white;    
    width: 100%;
    height: 520px;
    position: fixed;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    display: flex;
    align-items: baseline;
    border-radius: 0 0 0 15%;
    
`;

const ListaMenuHamburguer = styled.ul`
    display: flex;
    flex-direction: column;
    padding-top: 12rem;
    padding-bottom: 1rem;
    align-items: center;
    list-style-type: none;
    position: absolute;
`;

const ListaMenuHamburguerItem = styled.li`
    
    margin-bottom: 1rem;
    
`;

const LinkMenuHamburguer = styled.a`
    color: black;
    text-decoration: none;
    font-size: 18px;
    width: 150px;
    font-family: 'Open Sans';    
    font-weight: 600;
    position: relative;
    cursor: pointer;

    &:hover {
        color: #5F92BB;
    }

    
`;

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleContato = () => {
        window.open('https://api.whatsapp.com/send?phone=5517981411077&text=Olá, tudo bem? Gostaria de ', '_blank');
      };

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <HeaderComponent>
            
                       
                                    
            <MenuHeader>

                <Logo src={logo} alt=""/>
                <ButtonHamburguer onClick={toggleMenu}>
                    <HamburguerBtIcon size={35}/>
                </ButtonHamburguer>

                {openMenu ? (
                    <ContainerListaHambuguerMenu onClick={toggleMenu}>
                        

                        <ListaMenuHamburguer>
                        

                            <ListaMenuHamburguerItem>
                                <LinkMenuHamburguer href='#home' onClick={toggleMenu}>INÍCIO</LinkMenuHamburguer>
                            </ListaMenuHamburguerItem>

                            <ListaMenuHamburguerItem>
                                <LinkMenuHamburguer href='#produtos' onClick={toggleMenu}>PRODUTOS</LinkMenuHamburguer>
                            </ListaMenuHamburguerItem>

                            <ListaMenuHamburguerItem>
                                <LinkMenuHamburguer href='#ondeestamos' onClick={toggleMenu}>COMPROMISSO</LinkMenuHamburguer>
                            </ListaMenuHamburguerItem>

                            <ListaMenuHamburguerItem>
                                <LinkMenuHamburguer href='#ondeestamos' onClick={toggleMenu}>SUPORTE</LinkMenuHamburguer>
                            </ListaMenuHamburguerItem>

                            <ListaMenuHamburguerItem>
                                <LinkMenuHamburguer href='#ondeestamos' onClick={toggleMenu}>VANTAGENS</LinkMenuHamburguer>
                            </ListaMenuHamburguerItem>

                            <ListaMenuHamburguerItem>
                                <LinkMenuHamburguer onClick={handleContato}>FALE CONOSCO</LinkMenuHamburguer> 
                            </ListaMenuHamburguerItem>

                            <ListaMenuHamburguerItem>
                                <LinkMenuHamburguer onClick={toggleMenu}>FECHAR</LinkMenuHamburguer> 
                            </ListaMenuHamburguerItem>
                        </ListaMenuHamburguer>
                        

                    </ContainerListaHambuguerMenu>
                ) : (
                    <ContainerLinks>
                        <LinkMenu href='#home'>INÍCIO</LinkMenu>
                        <LinkMenu href='#produtos'>PRODUTOS</LinkMenu>
                        <LinkMenu href='#ondeestamos'>COMPROMISSO</LinkMenu>
                        <LinkMenu href='#ondeestamos'>SUPORTE</LinkMenu>
                        <LinkMenu href='#ondeestamos'>VANTAGENS</LinkMenu>
                        <LinkMenu onClick={handleContato}>FALE CONOSCO</LinkMenu> 
                    </ContainerLinks>
                )}
            </MenuHeader>
        </HeaderComponent>
    )
}
