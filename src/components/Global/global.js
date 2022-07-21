import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --background: #f0f2f5;
  --red: #E52E4D;
  --green: #33CC95;
  --blue: #5429CC;

  --blue-light: #6933FF;

  --text-title: #363F5F;
  --text-body: #969CB3;

  --background: #F0F2F5;
  --shape: #FFFFFF;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
    --webkit-font-smoothing: antialiased;

}


html{
  @media(max-width: 1080px){
    font-size: 90.75%;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #000;


    
    h1{
      font-size: 90%;
    }


    .rowCar{
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
    }
    
    
  }
  }
 



`