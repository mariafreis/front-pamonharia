import styled from "styled-components";
import { shade } from "polished";

// Title representa o H1
export const Title = styled.h1`
  font-size: 48px;
  color: #457b1b;
  max-width: 900px;
  line-height: 56px;
  margin: 20px 10px 20px 50px;
`;

export const Formulario = styled.form`
  width: 420px;
  height: auto;
  background-color: ${shade(0.2, "#457b1b")};
  padding: 10px;
  margin-left: 50px;
  font-size: 16px;
  border-radius: 12px;
  border: 10px solid #457b1b;
  strong {
    color: whitesmoke;
    font-size: 20px;
  }
  div {
    margin-top: 10px;

    input {
      background-color: #457b1b;
      padding: 10px;
      width: 400px;
      border: 1px solid #dac435;
      outline: 0;
      border-radius: 12px;
      text-align: center;
      color: whitesmoke;
      ::placeholder {
        color: whitesmoke;
      }
    }
    button {
      width: 120px;
      height: 40px;
      background-color: #457b1b;
      border-radius: 10px;
      border: 2px solid #dac435;
      color: #dac435;
      font-size: 20px;
      font-weight: bold;
      transition: background-color 0.2s;
      margin-left: 300px;
      &:hover {
        background-color: ${shade(0.2, "#dac435")};
      }
    }
  }
`;

export const Tabela = styled.table`
  margin-top: 50px;
  th {
    padding: 20px;
    border-bottom: 1px solid black;
  }
  td {
    padding: 20px;
    border-bottom: 1px solid black;
    button {
      border: none;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
