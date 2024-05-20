import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const CheckIcon = styled(FaCheck)`
    color: #0D8784;
    padding-right: 1rem;
`;

const ContainerMain = styled.div`
    position: relative;
    

`;

const ContainerInicio = styled.div`
        
    @media screen and (max-width: 910px) {
        
    }
 
`;

const TextTitle = styled.h1`
    font-size: 28px;
    font-weight: bold;
    color: black;
    text-align: center;
    padding-top: 2rem;
`;


const TextSobre = styled.p`
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

const TextVantagens = styled.p`
    font-size: 17px;
    color: black;
    padding-left: 7rem;
    padding-right: 7rem;
    padding-top: 1rem;

    @media screen and (max-width: 910px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }
`;

export default function Advantages(){
    return(
        <ContainerMain>
            <ContainerInicio>
                <TextTitle>
                    Soluções Únicas e Personalizadas
                </TextTitle>

                <TextSobre>
                    Na Fabio Pelicer Máquinas, entendemos que cada cliente é único. 
                    Por isso, oferecemos soluções personalizadas que podem ser adaptadas 
                    às necessidades específicas de cada cliente. Seja qual for o tamanho 
                    ou a complexidade do projeto, nossa equipe está preparada para criar 
                    uma solução sob medida que atenda às suas necessidades.
                </TextSobre>

                <TextTitle>
                    Explore as Vantagens Exclusivas da Fábio Pelicer Máquinas
                </TextTitle>

                <TextVantagens>
                    <CheckIcon/>
                    <strong>Troca Facilitada:</strong> Além disso, proporcionamos a possibilidade de dar outra máquina PLC 
                    como entrada na negociação, oferecendo flexibilidade e oportunidades para nossos clientes.
                </TextVantagens>

                <TextVantagens>
                    <CheckIcon/>
                    <strong>Logística Eficiente:</strong> Garantimos entrega rápida e facilitada, com o menor frete do 
                    mercado, para que você receba seu equipamento com agilidade e segurança em qualquer 
                    lugar do país.
                </TextVantagens>

                <TextVantagens>
                    <CheckIcon/>
                    <strong>Rápido Retorno de Investimento:</strong> Com nossos produtos, o retorno de investimento pode ser 
                    alcançado em até 3 meses, proporcionando um excelente custo-benefício para sua empresa.
                </TextVantagens>

                <TextVantagens>
                    <CheckIcon/>
                    <strong>Suporte Completo:</strong> Oferecemos treinamento e suporte especializado para operar a máquina 
                    de vulcanização, garantindo que você aproveite ao máximo seu equipamento desde o primeiro 
                    dia.
                </TextVantagens>

                <TextVantagens>
                    <CheckIcon/>
                    <strong>Garantia Estendida:</strong> Para sua tranquilidade, todos os nossos produtos são acompanhados 
                    de 10 anos de garantia na estrutura e 1 ano na parte elétrica, assegurando qualidade e 
                    durabilidade.
                </TextVantagens>

                <TextVantagens>
                    <CheckIcon/>
                    <strong>Suporte Vitalício:</strong> Além disso, proporcionamos suporte vitalício para orientação de 
                    manutenção, para que você tenha assistência contínua ao longo da vida útil do equipamento.
                </TextVantagens>


                <TextVantagens>
                    <CheckIcon/>
                    <strong>Atendimento Personalizado:</strong> Nosso atendimento é rápido e personalizado, garantindo 
                    que você receba todas as informações de que precisa com apenas uma ligação, para 
                    uma experiência de compra mais eficiente e satisfatória.
                </TextVantagens>               

            </ContainerInicio>
            
        </ContainerMain>
    )
}