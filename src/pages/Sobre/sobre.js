import Header from '../../components/header/header'
import Footer from '../../components/foolder/fooder'
import roses from '../../components/img/icon.png';
import './sobre.css'



function Inf(){
    return(
        <>
    <div className='conteiner'>

            <div className='Informacoa'>
                <h1>One Rose</h1>

                <h2>Quem somos ? </h2>
                <p>Uma empresa pequena, mas com grandes ambições,
fazemos roupas, almofadas e muito mais, buscando sempre manter a melhor qualidade e eficiência
Uma empresa e muitas ambições - Bem-Vindo(a) ONE ROSE !!!
  </p>



                <span> Nossa Missão: </span>
                <p> Construir um produto de Orgulho,algo que lhe faça sentir Bem com Seu jeito de ser!!  
                </p>

                <span> Nossos Valores: </span>
                <p> Sempre Se atualizando e Mantendo um produto de Qualidade e  Beleza   
                </p>


            <div className='lo'>
              
                 <div className='imgs'><img src={roses}  alt={roses}/></div>
                
            </div>
        </div>
</div> 
    </>
    );
}






function Sobre(){

    return( 
    
        <>
        <Header />
        <Inf />
        <Footer />
        </>
    );
    
    }
    
    export default Sobre