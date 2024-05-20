import styled from "styled-components";

const ContainerMain = styled.div`
    position: relative;
    

`;


const ContainerInicio = styled.div`
    
    
    @media screen and (max-width: 910px) {
    
    }
 
`;

const TextTitle = styled.h1`
    padding-top: 2rem;
    font-size: 28px;
    font-weight: bold;
    color: black;
    text-align: center;
`;


const TextSobre = styled.p`
    padding-top: 1rem;
    padding-bottom: 2rem;
    padding-left: 15rem;
    padding-right: 15rem;
    font-size: 17px;
    color: black;
    text-align: center;

    @media screen and (max-width: 910px) {
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

export default function Commitment(){
    return(
        <ContainerMain>
            <ContainerInicio>
                <TextTitle>
                    NOSSO COMPROMISSO COM A QUALIDADE
                </TextTitle>

                <TextSobre>
                    Na Fabio Pelicer Máquinas, utilizamos apenas matérias-primas 
                    da mais alta qualidade em todos os nossos produtos. Cada máquina 
                    é cuidadosamente projetada e fabricada para garantir durabilidade, 
                    eficiência e desempenho superior. Nossa equipe dedicada trabalha 
                    incansavelmente para garantir que cada cliente receba um produto 
                    que atenda às suas necessidades específicas.
                </TextSobre>

               

            </ContainerInicio>
            
        </ContainerMain>
    )
}