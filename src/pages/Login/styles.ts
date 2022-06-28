import styled from 'styled-components';

export const Logo = styled.img`
display: flex;
width: 289px;
margin: auto;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
max-width: 330px;
height: 230px;
padding: 1rem;
border: 1px solid #fff020;
border-radius: 15px;
margin: 3rem auto;
row-gap: 1.8rem;
align-items: center;
justify-content: center;

input{
   width: 220px;
   border: 1px solid #fff020;
   height: 2rem;
   background-color: #000000;
   font-family: 'Poppins', sans-serif;
   color: white;
   font-size: 1rem;
   padding-left: 0.5rem;
   
}

button{
   border: none;
   width: 220px;
   height: 3rem;
   font-size: 1.5rem;
   border-radius: 0.5rem;
   background-color: #fff020;
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   color: #000000;

   cursor: pointer;
   &:hover{
      filter: brightness(0.8);
   }

}




`