import styled from "styled-components";
import {BsGithub} from 'react-icons/bs'

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
background-color: #000;
align-items: center;
margin-top: -10px;
padding-bottom: 10px;

@media(max-width:720px){
  margin-top: -60px;
  position: absolute;
}

a{
  color: inherit;
}

h1{
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  color: var(--shape);
  margin-left: 15px;

  @media(max-width:720px){
    font-size: 90%;
  }

}

`

export const IconGit = styled(BsGithub)`
 width: 70px;
 height: 70px;
  color: var(--shape);

  @media(max-width:720px){
    width: 40px;
    height: 40px;
  }


`