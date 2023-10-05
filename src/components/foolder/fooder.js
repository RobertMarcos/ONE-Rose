import './Footer.css'
import lo from "../../components/img/logos.png"
import{TiSocialFacebook, TiPhone} from 'react-icons/ti'

function Footer(){

return(
    <>
     <footer>
        
        
        <ul>
        <li>
            <p>Redes Sociais: </p>
        </li>
        <li><TiSocialFacebook /> Fecebook</li>
        <li><TiPhone /> WhatsApp</li>
        <li className='imgf'><img src={lo} /> </li>
            
        </ul>
          
     </footer>
    </>
)


}

export default Footer