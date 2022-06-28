import { Route, Routes } from 'react-router-dom';
import { AboutFilm } from '../pages/AboutFilm';
//import { Films } from '../pages/Films';
import { Login } from '../pages/Login';
import { Peoples } from '../pages/Peoples';
import { Planets } from '../pages/Planets';
import { Species } from '../pages/Species';
import { Vehicles } from '../pages/Vehicles';

import { lazy, Suspense } from 'react';
import { Loading } from '../components/Loading';

export function Router(){
   const Films = lazy(() => import('../pages/Films').then(({Films}) => ({default: Films})));
   return(
      <Routes>
         <Route path="/login" element={ <Login /> } />
         <Route path="/" element={
            <Suspense fallback={<Loading>Carregando Filmes</Loading>}>
               <Films />
            </Suspense>         
         } />
         <Route path="/filmes/:about" element={ <AboutFilm /> } />
         <Route path="/pessoas" element={ <Peoples /> } />
         <Route path="/planetas" element={ <Planets/> } />
         <Route path="/especies" element={ <Species /> } />
         <Route path="/veiculos" element={ <Vehicles /> } />
         <Route path="*" element={ <Login /> } />
      </Routes>
   )
}