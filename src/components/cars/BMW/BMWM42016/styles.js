import styled from "styled-components";
import {GiSteeringWheel} from 'react-icons/gi'
import {BsSpeedometer} from 'react-icons/bs'
import { FaCity } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";



export const Container = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 90%;
    

    img{
      width: 100%;
      height: 100%;
      display: flex;
      margin-top: 20px;

      @media (max-width: 720px){
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }


    }


  .imgM4{
    width: 62%;
    display: flex;
    height: 60%;
    margin-left: 30px;
    margin-top: 10px;

    @media (max-width: 720px) {
      display: flex;
      width: 100%;
      margin: 0;
    }
  
    img{
    display: flex;
    width: 100%;
    height: 100%;
  }
  }

  .rowCar{
    margin-left: 10%;
    width: 40%;
    display: flex;
    flex-direction: column;

    @media (max-width: 720px) {
      margin-top: 20px;
      width: 80%;
      display: flex;
      margin: 0;
    }

    h1{
      font-size: 2.3rem;
      font-family: 'Poppins';
      font-weight: 600;
      color: white;

      @media (max-width: 720px) {
        font-size: 150%;
        display: flex;
        width: 100%;
        height: auto;
        justify-content: center;
        align-items: center;
        margin: 0;
      }
    }

    table{
      display: flex;
      flex-direction: column;
      gap: 10px;

      @media (max-width: 720px) {
      font-size: 35%;
      display: flex;
      justify-content: center;
      align-items: center;
    }   

      tr{
        th{
          color: var(--green);
          font-size: 1.4rem;
          font-family: 'Poppins';
          font-weight: 300;
        }
      }

      tbody{
        tr{
          align-items: center;
          justify-content: center;
          
          @media (max-width: 720px) {
      display: flex;
      flex-direction: row;
      gap: 10px;
      width: 80vw;
      
}

          td{
          
            font-size: 1.2rem;
            color: var(--red);
            font-family: 'Poppins', sans-serif;
            border: 1px solid var(--blue-light);
            background-color: var(--background);

            @media (max-width: 720px) {
            font-size: 340%;
            display: flex;
            width: 100%;
}
          }
        }
      }
    }
  }


`

export const SpanOptimal = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
height: 23vh;
gap: 20px;
background-color: #000;
align-items: center;

.stupidh1{
  color: var(--text-title);
  font-size: 120%;
}




.veloMax, .veloDeep, .velo0100, .veloStress{
  display: flex;
  width: 23%;
  height: 150px;
  flex-direction: column;
  border: 1px solid yellow;
  background-color: var(--red);
  color: var(--green);
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-size: 1.1rem;
  font-family: 'Poppins', sans-serif;
  gap: 20px;

  @media(max-width: 720px) {
    width: 20%;
    gap: 10px;
    height: 50%;
    font-size: 90%;
    display: flex;
    justify-content: center;
    align-items: center;

  }



}



`

export const AudioBMW = styled.div`
  width: 100%;
  height: auto;
  background-color: #000;
.audioBMW{
  display: flex;
  width: 100%;
  height:100% ;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen {
    
    
  }


  span{
    color: var(--shape);
    font-size: 25px;
    font-family: 'Poppins';


  }

}



`

export const ExtraInfo = styled.div`
display: flex;
background-color: #000;
flex-direction: column;
justify-content: center;
align-items: center;


h1{
  font-size: 2rem;
  font-family: 'Poppins';
  color: white;

  @media (max-width: 720px) {
   padding-top: 20px;
    font-size: 120%;
  }
}

.controller{
  display: flex;
flex-direction: row;
padding-top: 100px;
padding-bottom: 50px;
width: 100%;
gap: 10%;
background-color: #000;
justify-content: center;
animation: broks 5s linear;

@media (max-width: 720px) {
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

  @keyframes broks {
     0%{
      filter: brightness(0.2);
      width: 0%;

     }
     
     22%{
      filter: brightness(0.4);
      width: 22%;
     } 


     45%{
      filter: brightness(0.6);
      width: 45%;
     } 


     70%{
      filter: brightness(0.8);
      width: 70%;
     } 

     100%{
      filter: brightness(1);
      width: 100%;
    }
  }
}




.giroMax{
  display: flex;
  flex-direction: row;
  border: 1px solid red;
  width: 30%;
  gap: 40px;
  height: 150px;
  border-radius: 0.5rem;
  background-color: var(--text-title);
  align-items:center;
  justify-content: center;
  transition: 2s;

  @media (max-width: 720px) {
    width: 80%;

  }



  &:hover{
    background-color: var(--blue);
    cursor: pointer;
    
  }

  h1{
    color: white;
    display: flex;
  }

  .gx{
    display: flex;
    flex-direction: row;
  }

  .gxtitle{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
}

.direction{
  display: flex;
  flex-direction: row;
  border: 1px solid red;
  width: 30%;
  gap: 40px;
  border-radius: 0.5rem;
  background-color: var(--text-title);
  align-items:center;
  justify-content: center;
  height: 150px;


  transition: 2s;

  @media (max-width: 720px) {
    width: 80%;
    
  }


&:hover{
  background-color: var(--blue);
  cursor: pointer;
  
}



  h1{
    color: var(--shape);
    display: flex;
  }

  .gx{
    display: flex;
    flex-direction: row;
  }

  .gxtitle{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
}


` 
export const IconGMax = styled(BsSpeedometer)`
width: 75px;
height: 75px;
color: var(--green);


` 
export const IconDic = styled(GiSteeringWheel)`
width: 75px;
height: 75px;
color: var(--red);
` 
export const ExtraInfoTwo = styled.div`
display: flex;
background-color: #000;
flex-direction: column;
justify-content: center;
align-items: center;


h1{
  font-size: 2rem;
  font-family: 'Poppins';
  color: white;

  @media (max-width: 720px) {
   padding-top: 40px;
    font-size: 120%;
  }
}

.controller{
  display: flex;
flex-direction: row;

padding-bottom: 100px;
width: 100%;
gap: 10%;
background-color: #000;
justify-content: center;
animation: broks 5s linear;

@media (max-width: 720px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  gap: 30px;
}

  @keyframes broks {
     0%{
      filter: brightness(0.2);
      width: 0%;

     }
     
     22%{
      filter: brightness(0.4);
      width: 22%;
     } 


     45%{
      filter: brightness(0.6);
      width: 45%;
     } 


     70%{
      filter: brightness(0.8);
      width: 70%;
     } 

     100%{
      filter: brightness(1);
      width: 100%;
    }
  }
}




.giroMax{
  display: flex;
  flex-direction: row;
  border: 1px solid red;
  width: 30%;
  gap: 40px;
  height: 150px;
  border-radius: 0.5rem;
  background-color: var(--text-title);
  align-items:center;
  justify-content: center;
  transition: 2s;

  @media (max-width: 720px) {
    width: 80%;

  }



  &:hover{
    background-color: var(--blue);
    cursor: pointer;
    
  }

  h1{
    color: white;
    display: flex;
  }

  .gx{
    display: flex;
    flex-direction: row;
  }

  .gxtitle{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
}

.direction{
  display: flex;
  flex-direction: row;
  border: 1px solid red;
  width: 30%;
  gap: 40px;
  border-radius: 0.5rem;
  background-color: var(--text-title);
  align-items:center;
  justify-content: center;
  height: 150px;


  transition: 2s;

  @media (max-width: 720px) {
    width: 80%;
    
  }


&:hover{
  background-color: var(--blue);
  cursor: pointer;
  
}



  h1{
    color: var(--shape);
    display: flex;
  }

  .gx{
    display: flex;
    flex-direction: row;
  }

  .gxtitle{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
}


`




export const IconCity = styled(FaCity)`
width: 75px;
height: 75px;
color: blue;`
export const IconRod = styled(GiPathDistance)`
width: 75px;
height: 75px;
color: #000;`