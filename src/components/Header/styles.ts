import styled from "styled-components";

export const Container = styled.header`
width: 100%;
border-bottom: 1px solid #ddd;

.content{
   display: flex;
   max-width: 960px;
   justify-content: space-between;
   margin: 0 auto;

   img {
   width: 148px;
   } 

   ul {
      display: flex;
      column-gap: 1rem;
      align-items: flex-end;
      margin-bottom: 0.5rem;
      list-style: none;
      color: #fff;

      li > a {
         text-decoration: none;
         color: white;
      }
   }

   span{
      display: flex;
      align-self: center;
      color: #fff020;
      
      cursor: pointer;
   }

}
`