import styled from "styled-components";
import imgFundo from '../../assets/Inicio/imgFundo.svg';
import icon1 from '../../assets/Inicio/1.png';
import icon2 from '../../assets/Inicio/2.png';
import icon3 from '../../assets/Inicio/3.png';
import icon4 from '../../assets/Inicio/4.png';
import icon5 from '../../assets/Inicio/5.png';

const ContainerMain = styled.div`
    position: relative;
    

`;

const ImgFundo = styled.img`
   @media screen and (max-width: 910px) {
        display: none;
    }
`;

const ContainerInicio = styled.div`
    position: absolute;
    padding-top: 14rem;
    padding-left: 10rem;
    width: 700px;
    
    @media screen and (max-width: 910px) {
        padding-left: 1rem;
        padding-right: 10rem;
        padding-top: 8rem;
        justify-content: center;
        width: 90%;
        height: 100% ;
        position: relative;
    }
 
`;

const TextTitle = styled.h1`
    font-size: 38px;
    font-weight: bold;
`;

const TextSubTitle = styled.h1`
    font-size: 33px;
    font-weight: bold;
`;

const TextSobre = styled.p`
    font-size: 19px;
`;

const ContainerItems = styled.div`
    display: flex;
    margin-top: 3rem;
    gap: 3rem;

    @media screen and (max-width: 910px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);        
        justify-content: center;
        align-items: center;
        gap: 3rem;        
    }
`;

const ContainerIcons = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 910px) {
        justify-content: center;
        align-items: center;
    }
`;

const TextDescriptionIcons = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: #6092BB;
    text-align: center;
`;

const ImgIcon = styled.img`
    width: 100px;
    height: 100px;
`;


export default function Inicio(){
    return(
        <ContainerMain>
            <ContainerInicio>
                <TextTitle>
                    Fábio Pelicer Máquinas:
                    Excelência em Equipamentos para 
                    Vulcanização de Pneus
                </TextTitle>

                <ContainerItems>

                    <ContainerIcons>

                        <ImgIcon src={icon1} alt="Icon Qualidade em cada detalhe"/>
                        <TextDescriptionIcons>QUALIDADE EM CADA DETALHE</TextDescriptionIcons>
                        
                    </ContainerIcons>

                    <ContainerIcons>

                        <ImgIcon src={icon2} alt="Icon Entregamos em todo Brasil"/>
                        <TextDescriptionIcons>ENTREGAMOS EM TODO O BRASIL</TextDescriptionIcons>

                    </ContainerIcons>

                    <ContainerIcons>

                        <ImgIcon src={icon3} alt="Icon Máquinas com garantia"/>
                        <TextDescriptionIcons>MÁQUINAS COM GARANTIA</TextDescriptionIcons>

                    </ContainerIcons>

                    <ContainerIcons>

                        <ImgIcon src={icon4} alt="Icon Suporte e treinamento"/>
                        <TextDescriptionIcons>SUPORTE E TREINAMENTO </TextDescriptionIcons>

                    </ContainerIcons>

                    <ContainerIcons>

                        <ImgIcon src={icon5} alt="Icon Pagamento"/>
                        <TextDescriptionIcons>PAGUE SOMENTE NA ENTREGA</TextDescriptionIcons>

                    </ContainerIcons>                
                    
                </ContainerItems>

                <TextSubTitle>Sobre Fábio Pelicer Máquinas</TextSubTitle>

                <TextSobre>
                    Na Fábio Pelicer Máquinas, valorizamos o trabalho em família. Fundada com base nos valores 
                    de integridade, qualidade e compromisso, somos uma empresa onde toda a família se empenha 
                    para oferecer os melhores equipamentos para vulcanização de pneus. Desde 1978, temos nos 
                    dedicado a fornecer soluções únicas e personalizadas para nossos clientes, com um compromisso 
                    inabalável com a qualidade e a satisfação do cliente.
                </TextSobre>

               

            </ContainerInicio>

            <ImgFundo src={imgFundo} alt="Imagem de fundo" />
            
        </ContainerMain>
    )
}