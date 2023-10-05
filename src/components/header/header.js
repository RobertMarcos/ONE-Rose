
import './header.css';
import logo from '../img/logo.png';
import owl from '../img/owl.png';
import rose from '../img/icon.png';
import contato from '../../pages/contato/contato.js'
import { Link } from 'react-router-dom';

function Header(){

    const img =rose;
    return(
        <>
        <header>
        <div className='logo'> <Link to='/'><img src={img} alt={img} /></Link></div>

        <nav className='menu'>
        <Link to='/'>Home</Link>
        <Link to='/contato'>Contato</Link>
        <Link to='/produtos'>Produtos</Link>
        <Link to='/sobre'>Sobre</Link>
        </nav>
        </header>
        </>
    );

}

export default Header;