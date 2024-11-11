import { useState } from "react";
import * as S from "./style";
// importe tudo como s

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  const capturandoPrimeiroValor = (event) => {
    setPrimeiroValor(Number(event.target.value));
    console.log(event.target.value);
  };
  const capturandoSegundoValor = (event) => {
    setSegundoValor(Number(event.target.value));
    console.log(event.target.value);
  };
  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };
  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };
  const multiplicar = () => {
    setResultado(primeiroValor * segundoValor);
  };
  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  return (
    <S.Main>
      <S.GlobalStyle />
      <S.Container>
        <S.H1>Calculadora</S.H1>
        {/* onChange é pra capturar o que o usuário está digitando */}
        <S.Input
          type="number"
          placeholder="Digite um número"
          onChange={capturandoPrimeiroValor}
          value={primeiroValor}
        />
        <S.Input
          type="number"
          placeholder="Digite outro número"
          onChange={capturandoSegundoValor}
          value={segundoValor}
        />

        <S.Section>
          <S.Button onClick={soma}>+</S.Button>
          <S.Button onClick={subtracao}>-</S.Button>
          <S.Button onClick={multiplicar}>*</S.Button>
          <S.Button onClick={divisao}>/</S.Button>
        </S.Section>
        <S.H1>{resultado}</S.H1>
      </S.Container>
    </S.Main>
  );
}
