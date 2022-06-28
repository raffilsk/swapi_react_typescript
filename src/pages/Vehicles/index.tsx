import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import api from "../../services/api";
import { Main } from './styles';

interface Vehicle{
   name: String;
   model: String;
}

export function Vehicles(){
   const [vehicle, setVehicle] = useState<Vehicle[]>([]);

   useEffect(() => {

      api.get('/vehicles').then((response) => {
         setVehicle(response.data.results)         
      })
   }, [])

   console.log(vehicle)

   return(
      <>
         <Header />
         <Main>

               {vehicle.map((vehicle, index)=>(
                  <div key={index} className="content">
                     <div>
                        <strong>Veículo: </strong>
                        <span>{vehicle.name}</span>
                     </div>
                     <div>
                        <strong>Modelo </strong>
                        <span>{vehicle.model}</span>
                     </div>
                  </div>
               ) )}

         </Main >

      </>
   )
}