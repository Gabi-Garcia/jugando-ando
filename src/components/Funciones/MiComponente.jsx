/* eslint-disable no-unused-vars */
import React from 'react';

const MiComponente = () => {
  const handleClick = (event) => {
    // Destructurar el objeto de evento para obtener propiedades específicas
    const { target, value} = event;

    // Hacer algo con las propiedades destructuradas
    console.log('Elemento de destino:', target);
    console.log('Elemento value es :', value);
 
  };

  return (
    <div>
      <button onClick={handleClick}>Haz clic</button>
    </div>
  );
};
export default MiComponente;
