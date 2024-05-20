import styled from "styled-components";
import imgFundo from '../../assets/Support/imgSupport.jpg';

const ContainerMain = styled.div`
    position: relative;
    

`;

const ImgFundo = styled.img`
    position: relative;
    width: 50%;
    height: 500px;
    
    @media screen and (max-width: 910px) {
        display: none;
    }
`;


const ContainerInicio = styled.div`
    
    display: flex;
    background-color: #008E95;
    
    @media screen and (max-width: 910px) {
        
    }
 
`;

const ContainerText = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2rem;
    padding-right: 2rem;
    
    
    @media screen and (max-width: 910px) {
        
    }
 
`;

const TextTitle = styled.h1`
    font-size: 28px;
    font-weight: bold;
    color: white;
    text-align: center;
`;


const TextSobre = styled.p`
text-align: center;
    font-size: 18px;
    color: white;
`;

export default function Support(){
    return(
        <ContainerMain>
            <ContainerInicio>
                <ContainerText>
                    <TextTitle>
                        SUPORTE TOTAL AO CLIENTE
                    </TextTitle>

                    <TextSobre>
                        Entendemos que o sucesso de nossos clientes é o nosso sucesso. 
                        Por isso, oferecemos suporte total, desde o momento da compra até o 
                        treinamento e além. Nossa equipe experiente está sempre à disposição para 
                        fornecer assistência técnica, orientação e treinamento personalizado para 
                        garantir que nossos clientes aproveitem ao máximo seus equipamentos.
                    </TextSobre>
                </ContainerText>

                <ImgFundo src={imgFundo} alt="Imagem de fundo" />

            </ContainerInicio>

            
            
        </ContainerMain>
    )
}