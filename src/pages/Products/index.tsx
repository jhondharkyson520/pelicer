import styled from "styled-components";

import imgAbridor from '../../assets/Products/imgMaquinaP2.png';
import imgAlmaChicote from '../../assets/Products/imgAlmaChicote.png';
import imgAutoClave from '../../assets/Products/imgAutoClave.png'
import imgDescolador from '../../assets/Products/imgDescolador.png';
import imgEnvelopadeiraHorizontal from '../../assets/Products/imgEnvelopadeiraHorizontal.png';
import imgEnvelopadeiraVertical from '../../assets/Products/imgEnvelopadeiraVertical.png';
import imgEsmerilhoChicote from '../../assets/Products/imgEsmerilhoChicote.png';
import imgExaminadora from '../../assets/Products/imgExaminadora.png';
import imgExtrusoraPaineis from '../../assets/Products/imgExtrusoraPaineis.png';
import imgMaquinaBanda from '../../assets/Products/imgMaquinaBanda.png';
import imgMaquinaCoxoPasseio from '../../assets/Products/imgMaquinaCoxoPasseio.png';
import imgMaquinaP1 from '../../assets/Products/imgMaquinaP1.png';
import imgMaquinaP2_5 from '../../assets/Products/imgMaquinaP2.5.png';
import imgMaquinaP2_5Dupla from '../../assets/Products/imgMaquinaP2.5Dupla.png';
import imgMaquinaP2 from '../../assets/Products/imgMaquinaP2.png';
import imgMaquinaP2Dupla from '../../assets/Products/imgMaquinaP2Dupla.png';
import imgMaquinaP2Tripla from '../../assets/Products/imgMaquinaP2Tripla.png';
import imgMaquinaP3 from '../../assets/Products/imgMaquinaP3.png';
import imgMaquinaP4 from '../../assets/Products/imgMaquinaP4.png';
import imgMaquinaTalao from '../../assets/Products/imgMaquinaTalao.png';
import imgMesaMontagem from '../../assets/Products/imgMesaMontagem.png';
import imgRodaAgricola from '../../assets/Products/imgRodaAgricola.png';
import imgRodaCaminhao from '../../assets/Products/imgRodaCaminhao.png';
import imgSargentoUniversal from '../../assets/Products/imgSargentoUniversal.png';
import imgSargentoPasseio from '../../assets/Products/imgSargentoPasseio.png';
import imgTalaoAluminio from '../../assets/Products/imgTalaoAluminio.png';
import imgTornoRaspa from '../../assets/Products/imgTornoRaspa.png';
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";





const ContainerMain = styled.div`
    position: relative;
    

`;

const ImgMaquinaP2 = styled.img`

    width: 250px;
    height: 210px;

    @media screen and (max-width: 910px) {
        width: 170px;
        height: 100px;
    }

`;

const ContainerInicio = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    @media screen and (max-width: 910px) {
    
    }
 
`;

const ContainerProductsItem = styled.div`
    margin-top: 2rem;
    padding-left: 8rem;
    padding-right: 8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);        
    justify-content: center;
    gap: 3rem;
    
    @media screen and (max-width: 910px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
 
`;

const ContainerProductsDescription = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 500px;
    transition: transform 0.9s;
    cursor: pointer;
   
    
    @media screen and (max-width: 910px) {
        width: 100%;
        height: auto;
    }

    &:hover{
        transform: scale(1.07);
        
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

const TextTitleProduct = styled.h1`
    font-size: 18px;
    font-weight: bold;
    color: black;
    text-align: center;
`;


const TextSobreProduct = styled.p`
    
    font-size: 16px;
    color: black;

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
    background-color: #004767;
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
        background-color: #004667a9;
        transform: scale(1.07);
        
    }
`;

const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SearchContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const SearchInput = styled.input`
    padding-right: 30px; 
    width: 100%;
    border-radius: 9px;
    width: 500px;
    height: 30px;
    font-size: 20px;
    padding-left: 0.5rem;

    @media screen and (max-width: 910px) {
        width: 280px;
        height: 30px;
    }
   
`;

const SearchIcon = styled(IoMdSearch)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px; 
`;


export default function Products(){

    const handleContato = (productName: string) => {
        const message = `Olá, gostaria de saber mais sobre a ${productName}.`;
        window.open(`https://api.whatsapp.com/send?phone=5517981411077&text=${encodeURIComponent(message)}`, '_blank');
    };
    
      const products = [
        {
            title: 'Máquina P1',
            description: 'A Máquina P1 é ideal para vulcanizar pneus de camionetes e retroescavadeiras com aros de 15 a 18 polegadas. Equipada com um painel digital de fácil uso, 3 pares de talões de alumínio, e um consumo de energia de 5,5 kW/hora (cada pneu consome em média 9 kW). Com capacidade de produção diária de 4 a 5 pneus e peso de 120 kg, é a escolha perfeita para eficiência e precisão.',
            image: imgMaquinaP1
        },
        {
            title: 'Máquina P2',
            description: 'Projetada para pneus de carga, a Máquina P2 atende a aros de 20, 22, 22.5, e 305x24.5 polegadas. Conta com painel digital, 3 pares de talões de alumínio, e um consumo de energia de 8 kW/hora (cada pneu consome em média 16 kW). Com capacidade para produzir de 3 a 4 pneus por dia e pesando 200 kg, é uma solução robusta e eficiente para o seu negócio.',
            image: imgMaquinaP2
        },
        {
            title: 'Máquina P2 Dupla',
            description: 'A Máquina P2 Dupla eleva a produtividade com capacidade para vulcanizar pneus de carga em aros de 20, 22, 22.5, e 305x24.5 polegadas. Equipado com um painel digital e 4 pares de talões de alumínio, seu consumo de energia é de 15 kW/hora (cada pneu consome em média 30 kW). Produz de 6 a 8 pneus por dia e pesa 240 kg, proporcionando maior eficiência e resultados superiores.',
            image: imgMaquinaP2Dupla
        },
        {
            title: 'Máquina P2 Tripla',
            description: 'Para máxima produtividade, a Máquina P2 Tripla vulcaniza pneus de carga com aros de 20, 22, 22.5, e 305x24.5 polegadas. Com painel digital, 5 pares de talões de alumínio, e consumo de energia de 25.5 kW/hora (cada remessa de 3 pneus consome em média 51 kW), produz de 9 a 12 pneus por dia e pesa 280 kg, otimizando seu processo de vulcanização.',
            image: imgMaquinaP2Tripla
        },
        {
            title: 'Máquina P2.5',
            description: 'A Máquina P2.5 é versátil, ideal para pneus de carga e agrícolas, com aros de 20 a 34 polegadas. Inclui painel digital e 4 pares de talões de alumínio, com consumo de energia de 15 kW/hora (cada pneu consome em média 16 kW). Produz de 3 a 4 pneus por dia e pesa 230 kg, oferecendo flexibilidade e eficiência em uma única máquina.',
            image: imgMaquinaP2_5
        },
        {
            title: 'Máquina P2.5 Dupla',
            description: 'A Máquina P2.5 Dupla é projetada para máxima eficiência em pneus de carga e agrícolas, com aros de 20 a 34 polegadas. Com painel digital, 6 pares de talões de alumínio, e consumo de energia de 22 kW/hora (cada remessa de 2 pneus consome em média 45 kW), produz de 6 a 8 pneus por dia e pesa 280 kg, garantindo alta produtividade.',
            image: imgMaquinaP2_5Dupla
        },
        {
            title: 'Máquina P3',
            description: 'Especial para pneus agrícolas, a Máquina P3 atende a aros de 24 a 34 polegadas. Equipado com painel digital, seu consumo de energia é de 15 kW/hora (cada pneu consome em média 40 kW). Com capacidade de produção diária de 2 a 3 pneus e peso de 300 kg, é a solução robusta para necessidades agrícolas.',
            image: imgMaquinaP3
        },
        {
            title: 'Máquina P4',
            description: 'A Máquina P4 é ideal para vulcanizar pneus agrícolas e fora de estrada com aros de 24 a 38 polegadas. Conta com painel digital e um consumo de energia de 22 kW/hora (cada pneu consome em média 50 kW). Produz de 1 a 2 pneus por dia e pesa 320 kg, oferecendo potência e precisão para grandes demandas.',
            image: imgMaquinaP4
        },
        {
            title: 'Máquina Talão',
            description: 'A prensa Máquina Talão é projetada para reparar trincos nos talões dos aros de 20, 22, e 22.5 polegadas. Com 3 rodas e 3 anéis, consumo de energia de 5 kW/hora (cada pneu consome em média 8 kW), capacidade de produção diária de 4 a 5 pneus e peso de 180 kg, é uma ferramenta essencial para manutenção eficiente.',
            image: imgMaquinaTalao
        },
        {
            title: 'Roda para Conserto de Pneus de Caminhão',
            description: 'A Roda Especial é uma solução prática para vulcanização, substituindo a bexiga. Disponível em diversos tamanhos, garante versatilidade e eficiência nos consertos de pneus de caminhão.',
            image: imgRodaCaminhao
        },
        {
            title: 'Roda para Conserto de Pneus Agrícola',
            description: 'A Roda para Conserto de Pneus Agrícolas oferece uma solução eficiente para reparos em pneus agrícolas, disponível em diversos tamanhos para atender suas necessidades.',
            image: imgRodaAgricola
        },
        {
            title: 'Talão de Alumínio',
            description: 'O Talão de Alumínio é especialmente projetado para rodas de vulcanização, disponível em diversos tamanhos para atender diferentes necessidades.',
            image: imgTalaoAluminio
        },
        {
            title: 'Esmerilho de Chicote',
            description: 'O Esmerilho Chicote é equipado com motor trifásico – mono de 1,5 CV, 220/380 V, 60 Hz, rotação de 450 rpm, caneta de 5/8, cabo flexível de 30 mm x 2,0 m, e pesa 30 kg. Acompanha engate rápido, cabide e escova de aço emborrachada para máxima eficiência.',
            image: imgEsmerilhoChicote
        },
        {
            title: 'Alma do Chicote',
            description: 'A Alma (cabo interno do chicote) é uma peça essencial para manutenção e reparo do equipamento.',
            image: imgAlmaChicote
        },
        {
            title: 'Extrusora e Painéis Digitais',
            description: 'A Extrusora Digital e Painéis Digitais proporcionam controle preciso e eficiência para os processos de vulcanização.',
            image: imgExtrusoraPaineis
        },
        {
            title: 'Abridor de Pneus 3 Pistões',
            description: 'O Abridor de Pneus 3 Pistões é projetado para facilitar a abertura e reparo de pneus, garantindo eficiência no processo.',
            image: imgAbridor
        },
        {
            title: 'Auto Clave',
            description: 'A Auto Clave é uma ferramenta essencial para processos de vulcanização, oferecendo alta eficiência e confiabilidade.',
            image: imgAutoClave
        },
        {
            title: 'Torno Raspa com Gabarito',
            description: 'O Torno Raspa com Gabarito proporciona precisão e facilidade na raspagem e preparação de pneus para vulcanização.',
            image: imgTornoRaspa
        },
        {
            title: 'Examinadora de Pneus',
            description: 'A Examinadora de Pneus permite uma inspeção detalhada e precisa, garantindo qualidade nos reparos e manutenção.',
            image: imgExaminadora
        },
        {
            title: 'Máquina de tirar Banda Vertical',
            description: 'A Máquina de Tirar Banda Vertical é projetada para remover bandas de rodagem com precisão e eficiência.',
            image: imgMaquinaBanda
        },
        {
            title: 'Mesa de Montagem',
            description: 'A Mesa de Montagem oferece uma plataforma robusta e estável para a montagem e reparo de pneus.',
            image: imgMesaMontagem
        },
        {
            title: 'Envelopadeira Vertical',
            description: 'A Envelopadeira Vertical é ideal para processos de vulcanização, proporcionando uma aplicação precisa e uniforme.',
            image: imgEnvelopadeiraVertical
        },
        {
            title: 'Envelopadeira Horizontal',
            description: 'A Envelopadeira Horizontal garante uma aplicação eficiente e uniforme para processos de vulcanização.',
            image: imgEnvelopadeiraHorizontal
        },
        {
            title: 'Descolador Hidropneumático',
            description: 'O Descolador Hidropneumático facilita a remoção de pneus de aros, oferecendo uma solução rápida e eficiente.',
            image: imgDescolador
        },
        {
            title: 'Sargento Universal',
            description: 'O Sargento Universal é ideal para vulcanizações rápidas. Capaz de perfurar pregos, parafusos e realizar cortes mínimos em pneus sem câmara. Atua na lateral, meio e ombro de pneus de caminhonetes, caminhões e agrícolas. Esquenta ambos os lados, operando em média 30 minutos de aquecimento e 30 de resfriamento.',
            image: imgSargentoUniversal
        },
        {
            title: 'Máquina Coxo para Passeio e Camionete',
            description: 'A Máquina Coxo para Passeio e Camionete é a escolha ideal para vulcanizar pneus de veículos leves e camionetes.',
            image: imgMaquinaCoxoPasseio
        },
        {
            title: 'Sargento para Pneus de Passeio e Camionete',
            description: 'O Sargento para Pneus de Passeio e Camionete é projetado para reparos rápidos e eficientes em pneus de veículos leves e camionetes.',
            image: imgSargentoPasseio
        },
    ];
    
    const [displayedProducts, setDisplayedProducts] = useState(6);

    const handleVerMais = () => {
        const increment = 6;
        const totalProducts = products.length;

        if (displayedProducts + increment >= totalProducts) {
            setDisplayedProducts(totalProducts);
        } else {
            setDisplayedProducts(displayedProducts + increment);
        }
    };

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: any) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );



    return(
        <ContainerMain>
            <ContainerInicio>

                <TextTitle>
                    CONFIANÇA EM CADA DETALHE: MÁQUINAS DURÁVEIS E CONFIÁVEIS
                </TextTitle>

                <TextSobre>
                    Na Fabio Pelicer Máquinas, estamos comprometidos em oferecer 
                    equipamentos de última geração para vulcanização de pneus, 
                    projetados para atender às necessidades específicas de nossos 
                    clientes. Confira abaixo alguns dos nossos produtos exclusivos:
                </TextSobre>

                <SearchContainer>
                    
                    <SearchInput
                        type="text"
                        placeholder="Buscar produtos"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <SearchIcon size={25}/>
                </SearchContainer>              

            </ContainerInicio>

            

            <ContainerProductsItem>                
                {filteredProducts.slice(0, displayedProducts).map((product, index) => (
                    <ContainerProductsDescription key={index} onClick={() => handleContato(product.title)}>
                        <ImgMaquinaP2 src={product.image} alt={product.title} />
                        <TextTitleProduct>{product.title}</TextTitleProduct>
                        <TextSobreProduct>{product.description}</TextSobreProduct>
                    </ContainerProductsDescription>
                ))}
            </ContainerProductsItem>

            {displayedProducts < filteredProducts.length && (
                <ContainerButton>
                    <ButtonContact onClick={handleVerMais}>
                        Ver mais produtos
                    </ButtonContact>
                </ContainerButton>
            )}
            
        </ContainerMain>
    )
}