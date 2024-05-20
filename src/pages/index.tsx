import  Inicio  from './Inicio';
import  Products  from './Products';
import  Commitment  from './Commitment';
import  Support  from './Support';
import  Advantages  from './Advantages';
import  Contact  from './Contact';


export default function Home(){

    const handleOndeEstamos = () => {
        window.open('https://www.google.com/maps/dir//Avenida+Aur%C3%A9lio+Luiz+Mistiere+270+Andar+2+sl+13,+Fronteira+-+MG,+38230-000/@-20.2814494,-49.2864693,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94bcddaa5ba1111d:0xa9dabde054b21a18!2m2!1d-49.2040676!2d-20.2814687?entry=ttu', '_blank');
      };
    const handleFaleConosco = () => {
        window.open('https://api.whatsapp.com/send?phone=5534984307981&text=Ol%C3%A1,%20tudo%20bem?%20Gostaria%20de', '_blank');
    };

    const handleSigaAGente = () => {
        window.open('https://www.instagram.com/sorveteria.pinguim_/', '_blank');
    };

    return(
        <main>

            <Inicio/>
            <Products/>
            <Commitment/>
            <Support/>
            <Advantages/>
            <Contact/>        
                       
        </main>
    )
}