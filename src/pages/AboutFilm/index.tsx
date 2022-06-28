import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import api from '../../services/api';
import { Main } from './styles';

interface AboutParams {
   title: string;
   episode_id: number;
   director: string;
   producer: string;
   characters:[
      name: string
   ]
}

export function AboutFilm(){
   const [about, setAbout] = useState<AboutParams>();
   const params  = useParams();

   useEffect(() =>{
      api.get(`/films/${params.about}`).then((response) => {
         setAbout(response.data)
      })
   }, [])

   console.log(params.about)

   return(
      <>
         <Header />
         <Main>
               <div>
                  <strong>Título: </strong>
                  <span>{about?.title}</span>
               </div>
               <div>
                  <strong>Episódio: </strong>
                  <span>{about?.episode_id}</span>
               </div>
               <div>
                  <strong>Diretor: </strong>
                  <span>{about?.director}</span>
               </div>
               <div>
                  <strong>Produtores: </strong>
                  <span>{about?.producer}</span>
               </div>
         </Main>
      </>
   )
}