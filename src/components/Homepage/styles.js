import styled from "styled-components";
import {SiBmw, SiBugatti, SiFiat, SiPorsche} from 'react-icons/si'

export const Container = styled.div`
width: 100vw;
height: 92vh;

background-color: #000;
color: #fff;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

.nameCar{
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;




  .icons{
    display: flex;
    flex-direction: row;
    gap: 40px;

    @media(max-width: 720px){
      display: flex;
      width: 100%;
      height: 50%;
      gap:5;
      justify-content: center;
      align-items: center;
    }


  }

  p{
    font-size: 5rem;
    font-family: 'Poppins';

    @media(max-width: 720px){
      font-size: 290%;
  }}

  
}

`

export const IconBMWHome = styled(SiBmw)`
color: var(--blue-light);
width: 80px;
height: 80px;
transition: 1s;

@media(max-width: 720px){
  width: 45px;
  height: 45px;
}


&:hover{
  filter: brightness(0.6);
}


`
export const IconBugattiHome = styled(SiBugatti)`
color: var(--green);
width: 80px;
height: 80px;

transition: 1s;

@media(max-width: 720px){
  width: 45px;
  height: 45px;
}


&:hover{
  filter: brightness(0.6);
}

`
export const IconFiatHome = styled(SiFiat)`
display: flex;
color: var(--red);
width: 80px;
height: 80px;
transition: 1s;

@media(max-width: 720px){
  width: 45px;
  height: 45px;
}




&:hover{
  filter: brightness(0.6);
} 
`

export const IconPorscheHome = styled(SiPorsche)`
display: flex;
color: var(--shape);
width: 80px;
height: 80px;
transition: 1s;

@media(max-width: 720px){
  width: 45px;
  height: 45px;
}




&:hover{
  filter: brightness(0.6);
} 
`