import React, { useEffect, useState } from 'react';

export const Message = () => {

  const [coords, setCoords] = useState({x:0, y:0});
  const {x, y} = coords;
  useEffect(() => {
    
    const mouseMove = (e) => {
      const cords = {x: e.x, y: e.y};
      setCoords(cords)
    }

    window.addEventListener('mousemove', mouseMove)
    
    return () => {
      console.log('Componente desmontado');
      window.removeEventListener('mousemove' ,mouseMove)
    };
  }, []);

  return (
    <div>
      <h3>Eres Genial</h3>
      <p>
        <span>x: {x} </span>
        <span>y: {y} </span>
      </p>
    </div>
  );
};
