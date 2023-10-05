import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/home";
import Contact from "./contato/contato";
import Produtos from "./produtos/produtos";
import Sobre from "./Sobre/sobre";


function Paths(){

return(
    
<BrowserRouter>
    <Routes>
 
        <Route path="/"  element = {<Home />}></Route>
        <Route path="/contato" element = {<Contact/>}></Route>
        <Route path="/produtos" element = {<Produtos />}></Route>
        <Route path="/sobre" element = {<Sobre />}></Route>
      
    
    </Routes>
    
    </BrowserRouter>
);}


export default Paths
