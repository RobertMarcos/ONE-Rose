import Header from '../../components/header/header'
import Footer from '../../components/foolder/fooder'
import img5 from '../../components/img/woman.jpg';
import img6 from '../../components/img/img2.jpeg';
import './produtos.css'


let fechar = false

function Lprodutos(){

    

    function Descricao(){

        let desc = document.getElementById("des")
        
        

        if( fechar == false ){
            desc.style.display = "flex"
            console.log("true")
          fechar  = true;
         
            
        }else{desc.style.display = "none" 
        fechar = false}  
    }

    function Descricao1(){

        let desc = document.getElementById("des1")
        
        

        if( fechar == false ){
            desc.style.display = "flex"
            console.log("true")
          fechar  = true;
         
            
        }else{desc.style.display = "none" 
        fechar = false}  
    }


    return(
        <>
        <div className='conteinerp'>
        <div className='produto1'>
        <div className = "imgp"><img src={img6}/></div>
            
            <span className='titu'><strong>ONE ROSE</strong> - Capas Para Almofadas <a id='abrir'  onClick={Descricao}>Confira --D </a></span>
            
            <div id='des'>
                
                <span>Capas De Almofada Qualquer estampa e tamanho - R$ 10,00 Cada </span> 
                <span>Tecidos: Malha, Suede e Oxford</span>
            
            </div>
        </div>



        
        <div className='produto1'>
            <div className = "imgp"><img src={img5}/></div>
            
            <span className='titu'><strong>ONE ROSE</strong> -Roupas e Reparos e Ajustes <a id='abrir'  onClick={Descricao1}>Confira --D </a></span>
            
            <div id='des1'>
                
                <span>Qualquer estampa e tamanho a partir de - R$ 30,00 </span> 
                <span>Tecidos: Malha, Suede e Oxford</span>
            
            </div>
            </div>
        </div>
        
        
        
        
        </>
    );




}






function Produtos(){

    return( 
    
        <>
        <Header />
       

        <Lprodutos/>
        <Footer />
        </>
    );
    
    }
    
    export default Produtos