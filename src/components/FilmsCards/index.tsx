import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import api from "../../services/api";
import { Container } from './styles';

interface Film {
   episode_id: Number;
   title: String;
}

export function FilmsCard(){
   const [films, setFilms] = useState<Film[]>([]);

   useEffect(() => {
      api.get('/films').then((response) => {
         setFilms(response.data.results)         
      })
   }, [])

   return (
      <Container>
         {films.map((film, index)=>(
            <Link to={`/filmes/${index + 1}`}>
               <div className="card" key={index}>
                  <img src={require(`../../assets/episode_${film.episode_id}.jpg`)} />
                  {film.title}
               </div>
            </Link>
         ) )}
      </Container>
   )
}

