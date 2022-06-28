import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import api from "../../services/api";
import { Main } from './styles';


interface People {
   name: String;
   gender: String;
}

export function Peoples(){
   const [peoples, setPeoples] = useState<People[]>([]);

   useEffect(() => {

      api.get('/people').then((response) => {
         setPeoples(response.data.results)         
      })
   }, [])

   console.log(peoples)

   return(
      <>
         <Header />
         <Main>

               {peoples.map((people, index)=>(
                  <div key={index} className="content">
                     <div>
                        <strong>Nome: </strong>
                        <span>{people.name}</span>
                     </div>
                     <div>
                        <strong>Gênero: </strong>
                        <span>{people.gender}</span>
                     </div>
                  </div>
               ) )}

         </Main >

      </>
   )
}