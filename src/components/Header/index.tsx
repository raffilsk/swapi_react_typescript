import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoImg from '../../assets/logo.png';
import { AuthContext } from '../../context/AuthContext';
import { Container } from "./styles";

export function Header(){
   const auth = useContext(AuthContext);
   const navigate = useNavigate();

   async function handleLogout(){
      await auth?.signout();
      navigate("/login");

   }
   return(
      <Container>
         <div className='content'>
            <img src={LogoImg} alt="Logotipo" />
            <ul>               
               <li><Link to="/" className='decoration'>filmes</Link></li>
               <li><Link to="/pessoas">pessoas</Link></li>
               <li><Link to="/planetas">planetas</Link></li>
               <li><Link to="/especies">espécies</Link></li>
               <li><Link to="/veiculos">veículos</Link></li>
            </ul>
            <span onClick={handleLogout}>Logout</span>
         </div>
      </Container>
   )
}