import styled from "styled-components";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

const ContainerFooter = styled.footer`
    display: flex;
    justify-content: center;
    gap: 10rem;
    width: 100%;
    height: 250px;

  
    @media (max-width: 1152px) {
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        height: 450px;
        padding-bottom: 8rem;
    }
`;

const ContainerFooterItem = styled.div`
    display: flex;
    flex-direction: column;
    color: black;
    margin-top: 1rem;
    
`;

const TextTituloFooter = styled.h1`
    font-family: 'Cardo';
    font-weight: bold;
    font-size: 18px;
`;

const ContainerFooterSocialMedias = styled.div`
    display: flex;
    gap: 1rem;
`;

const TextFooter = styled.p`
    color: #3c3d3f;
    font-size: 16px;
    font-family: 'Open Sans';
`;

const ContainerItemsContato = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;



const StyledLink = styled.a`
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const InstagramIcon = styled(FaInstagram)`
    cursor: pointer;
    transition: transform 0.9s;
    color: black;

    &:hover {
        transform: scale(1.2);
    }
`;

const MainIcon = styled(TfiEmail)`
    cursor: pointer;
    transition: transform 0.9s;
    color: black;

    &:hover {
        transform: scale(1.2);
    }
`;

const WhatsappIcon = styled(FaWhatsapp)`
    cursor: pointer;
    transition: transform 0.9s;

    &:hover {
        transform: scale(1.2);
    }
`;

export default function Footer(){
    return(
        
        <ContainerFooter>

            <ContainerFooterItem>

                <TextTituloFooter style={{textAlign: "center"}}>
                    Redes Sociais
                </TextTituloFooter>

                <ContainerFooterSocialMedias>
                    <StyledLink href="https://www.instagram.com/fabiopelicer.maquinas/" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon size={30}/>
                    </StyledLink>
                    <StyledLink href="https://api.whatsapp.com/send?phone=5517981411077&text=Ol%C3%A1,%20tudo%20bem?%20Gostaria%20de" target="_blank" rel="noopener noreferrer">
                        <WhatsappIcon size={30}/>
                    </StyledLink>
                    <StyledLink href="mailto:fabiopelicermaquinas@gmail.com" target="_blank" rel="noopener noreferrer">
                        <MainIcon size={30}/>
                    </StyledLink>
                </ContainerFooterSocialMedias>
                
            </ContainerFooterItem>

            <ContainerFooterItem>    

                <TextTituloFooter>
                    Contato
                </TextTituloFooter>

                   <ContainerItemsContato>
                        <TfiEmail  size={20}/>
                        <TextFooter>
                            fabiopelicermaquinas@gmail.com
                        </TextFooter>
                   </ContainerItemsContato>

                   <ContainerItemsContato>
                        <BsFillTelephoneFill size={20}/>
                        <TextFooter>
                            (17) 98141-1077
                        </TextFooter>
                    </ContainerItemsContato>

                    <ContainerItemsContato>
                        <FaMapLocationDot size={20}/>
                        <TextFooter>
                            Estrada Silvio Pelicer, 500, Brejo Alegre - <br/>São José do Rio Preto, SP
                        </TextFooter>
                    </ContainerItemsContato>

            </ContainerFooterItem>           

        </ContainerFooter>

    )
}