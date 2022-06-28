import styled from "styled-components";

export const Container = styled.main`
max-width: 960px;
display: flex;
margin: 2rem auto;
flex-flow: row wrap;
align-items: center;
justify-content: center;
gap: 2rem;

a{
   text-decoration: none;
}

   .card{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      row-gap: 0.5rem;
      border: 1px solid #fff020;
      border-radius: 15px;
      color: #fff020;
      width: 15rem;
      height: 18rem;

      img {
         width: 150px;
      }
      

   }

`