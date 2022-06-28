import { FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../../assets/logo.png';
import { AuthContext } from '../../context/AuthContext';
import { Form, Logo } from './styles';


export function Login(){
   const [user, setUser] = useState("");
   const [password, setPassword] = useState("");

   const auth = useContext(AuthContext);

   const navigate = useNavigate();

   async function handleSubmit (event: FormEvent){
      event.preventDefault();

      if(user && password){
         const isLogged = await auth?.signin(user, password);

         if(isLogged) {
            navigate('/');
         }else{
            alert("Usuário ou senha incorretos.")
         }
      }
   }
   
   return(
      <>
      <Logo src={ LogoImg }></Logo>

         <Form onSubmit={handleSubmit}>
            <input
               type="text"
               placeholder='user name'
               value={user}
               onChange={(e)=> setUser(e.target.value)}
            />
            <input
               type="password"
               placeholder='password'
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
            <button>Entrar</button>
         </Form>
      
      </>
   )
}