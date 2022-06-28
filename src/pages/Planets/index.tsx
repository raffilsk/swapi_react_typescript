import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import api from "../../services/api";
import { Main } from './styles';

interface Planet {
   name: String;
   rotation_period: String;
}

export function Planets(){
   const [planets, setPlanets] = useState<Planet[]>([]);

   useEffect(() => {

      api.get('/planets').then((response) => {
         setPlanets(response.data.results)         
      })
   }, [])

   console.log(planets)

   return(
      <>
         <Header />
         <Main>

               {planets.map((planet, index)=>(
                  <div key={index} className="content">
                     <div>
                        <strong>Planeta: </strong>
                        <span>{planet.name}</span>
                     </div>
                     <div>
                        <strong>Tempo de Rotação: </strong>
                        <span>{planet.rotation_period}</span>
                     </div>
                  </div>
               ) )}

         </Main >

      </>
   )
}