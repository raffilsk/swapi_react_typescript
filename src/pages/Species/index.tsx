import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import api from "../../services/api";
import { Main } from './styles';

interface Specie {
   name: String;
   language: String;
}

export function Species() {
   const [species, setSpecies] = useState<Specie[]>([]);

   useEffect(() => {

      api.get('/species').then((response) => {
         setSpecies(response.data.results)
      })
   }, [])

   console.log(species)

   return (
      <>
         <Header />
         <Main>
            {species.map((specie, index) => (
               <div key={index} className="content">
                  <div>
                     <strong>Espécie: </strong>
                     <span>{specie.name}</span>
                  </div>
                  <div>
                     <strong>Linguagem: </strong>
                     <span>{specie.language}</span>
                  </div>
               </div>
            ))}
         </Main >
      </>
   )
}