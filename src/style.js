import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }


`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url("https://image.slidesdocs.com/responsive-images/background/simple-white-education-pencil-calculator-art-powerpoint-background_644fe4b2ed__960_540.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  height: 80%;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  gap: 5px;
  width: 100%;
  }
`;

export const H1 = styled.h1`
  font-family: "Sevillana", cursive;
  color: #302d00;
  text-align: center;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 15px;
`;

export const Button = styled.button`
  width: 100px;
  height: 45px;
  background: #ffff;
  margin-top: 20px;
  border-radius: 10px;
  }
`;
