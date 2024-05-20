
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

const ContainerMain = styled.div`
    position: relative;
    

`;


const ContainerInicio = styled.div`
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 5rem;
    
    @media screen and (max-width: 910px) {
        padding-left: 1rem;
        padding-right: 10rem;
        padding-top: 1rem;
        justify-content: center;
        width: 90%;
        height: 100% ;
        position: relative;
        padding-bottom: 0rem;
    }
 
`;

const TextTitle = styled.h1`
    font-size: 28px;
    font-weight: bold;
    color: black;
    text-align: center;
`;


const TextSobre = styled.p`

    padding-left: 15rem;
    padding-right: 15rem;
    font-size: 18px;
    color: black;
    text-align: center;

    @media screen and (max-width: 910px) {
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const ButtonContact = styled.button`

cursor: pointer;
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 5rem;
    padding-right: 5rem;
    align-items: center;
    justify-content: center;
    background-color: #3FB809;
    border: none;
    border-radius: 10px;
    color: white;
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.15);
    transition: transform 0.9s;

    @media screen and (max-width: 910px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    &:hover{
        background-color: #7cb661;
        transform: scale(1.07);
        
    }
`;

export default function Contact(){

    const handleContato = () => {
        window.open('https://api.whatsapp.com/send?phone=5517981411077&text=Olá, tudo bem? Gostaria de ', '_blank');
      };

    return(
        <ContainerMain>
            <ContainerInicio>
                <TextTitle>
                    ENTRE EM CONTATO CONOSCO
                </TextTitle>

                <TextSobre>
                    Se você está procurando equipamentos de vulcanização de pneus de alta qualidade, 
                    confiabilidade e desempenho superior, não procure mais do que a Fabio Pelicer 
                    Máquinas. Entre em contato conosco hoje mesmo para saber mais sobre nossos produtos 
                    e serviços. Estamos aqui para ajudar a impulsionar o seu negócio para o sucesso.
                </TextSobre>

               <ButtonContact onClick={handleContato}>
                        FALE CONOSCO (17) 98141-1077 <FaWhatsapp size={25}/>
               </ButtonContact>

            </ContainerInicio>
            
        </ContainerMain>
    )
}