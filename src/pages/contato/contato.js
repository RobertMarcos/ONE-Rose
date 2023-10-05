import Header from '../../components/header/header'
import Footer from '../../components/foolder/fooder'
import send from '../../components/img/logos.png'
import roses from '../../components/img/icon.png';
import './contato.css'
import { useState } from 'react';





function Campos(){

let [nome,setnome] = useState('')

var handleChange = (event) => {
    setnome(event.target.value);
}

function MudarNome(){
    
    return(
    <>
    
   <div> <h3> Seja Bem vindo a {nome} </h3></div>
  
    </>
    )
    
}

return(
 
    <>
    <div className='conteiner'>

            <div className='Contatos'>
                <h1>Bem-Vindo(a)</h1>

                <span>Primeiramente obrigada pelo interesse em nossos produtos.</span>
                <p><am>Estamos sempre trabalhando para poder entregar um produto de alta qualidade.</am>
                </p>
            <div className='entregas'>
            
                <h3> Entregas: </h3>
                <p>Entregamos em toda a cidade de São Paulo e arredores*.</p>

                <p> 
                O agendamento pode ser feito via WhatsApp: (11)96234-5727, desta maneira,
                caso seja do seu interesse podemos mostrar uma variedade maior de estampas, modelos e tamanhos, combinamos também os valores
                relativos a entrega.
                </p>
                 <div className='img'><img src={send}  alt={send}/></div>
                
            </div>
            <span className='extras'>*Para localizações de dificil acesso iremos cobrar taxa de entrega </span>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14626.625593301156!2d-46.58935133437976!3d-23.580780971056285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c0fdefc2d8d%3A0x3d63aaeef542076f!2sVila%20Prudente%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1696278427569!5m2!1spt-BR!2sbr" 
        width="80%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>   
</div> 
    </>
    
);

}





function Contact(){

return( 
    <>
    <Header />
    <Campos />
<Footer />
</>
);

}

export default Contact;