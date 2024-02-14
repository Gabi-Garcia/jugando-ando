/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';



const Button = styled.button`
  width: 150px;
  height: 40px;
  background-color: #3498db; /* Color de fondo azul */
  color: #fff; /* Color del texto blanco */
  border: none;
  border-radius: 10px; /* Bordes redondeados */
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #2980b9; /* Color de fondo azul más oscuro al pasar el mouse */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave al pasar el mouse */
  }

  &:active {
    transform: translateY(2px); /* Efecto de hundimiento al hacer clic */
  }

  &:focus {
    outline: none; /* Elimina el contorno al hacer clic */
  }
`;

const MyButton = ({ children }) => {
  return (
      <Button>{children}</Button>
  );
};

export default MyButton;
