import styled from "styled-components";
import {FaCar} from 'react-icons/fa'
import {SiBmw, SiBugatti, SiFiat, SiPorsche} from 'react-icons/si'

export const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: var(--red);

@media (max-width: 720px) {
   width: 100%;
}
`
export const Title = styled.div`
display: flex;
flex-direction: row;
color: red;
align-items: center;


h1{
  font-size: 1.5rem;
  color: var(--shape);
  font-family: 'Poppins', sans-serif;
  font-weight: 300;

  @media (max-width: 720px) {
   font-size: 100%;
}
}
` 
export const IconCar = styled(FaCar)`
  width: 30px;
  height: 30px;
  color: var(--green);
  display: flex;
  margin-left: 20px;

  @media (max-width: 720px) {
   width: 15px;
   height: 15px;
   margin-left: 3px;
}
` 
export const Menu = styled.div`
display: flex;
flex-direction: row;


  ul{
    display: flex;
    flex-direction: row;
    gap: 15px;
    list-style: none;
    margin-right: 15px;
    align-items: center;
    justify-content: center;

    

    a{
      color: inherit;
      text-decoration: none;

    }



    .dropbtn {
  background-color: var(--red);
  color: #000;
  padding: 16px;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  font-family: 'Poppins';
  font-weight: 100;

  @media screen {
    font-size: 90% ;
  }
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;


.full{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100%;
  
  
}




  
}

.dropdown-content a {
  color: #000;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-family: 'Poppins', sans-serif;

  
  
}

.dropdown-content a:hover {

  background-color: #191919;
  color: #f9f9f9;


}

.dropdown:hover .dropdown-content  {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.dropdown:hover .dropbtn {
  background-color: var(--green);
}

    li{
      font-size: 1.1rem;
      font-family: 'Poppins', sans-serif;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;

  

      @media (max-width: 720px) {
      font-size: 80%;
      align-items: center;
    }
     

      
      &:hover{
        background-color: var(--green);
        cursor: pointer;
      }
      
    }
  }


`

export const IconBMW = styled(SiBmw)`
display: flex;
width: 30px;
height: 30px;
align-items: center;
justify-content: center;
margin-left: 10px;
color: var(--blue);
`
export const  IconBugatti = styled(SiBugatti)`
display: flex;
flex-direction: row;
width: 30px;
height: 30px;
align-items: center;
justify-content: center;
margin-left: 10px;
color: var(--green);

`
export const  IconFiat = styled(SiFiat)`
display: flex;
flex-direction: row;
width: 30px;
height: 30px;
align-items: center;
justify-content: center;
margin-left: 10px;
color: var(--red);
`

export const IconPorsche = styled(SiPorsche)`
display: flex;
flex-direction: row;
width: 30px;
height: 30px;
align-items: center;
justify-content: center;
margin-left: 10px;
color: var(--text);
`
