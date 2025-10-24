import { useState, useEffect } from "react";

function JuegoEstrellas() {
    const [posicion, setPosicion] = useState({ x: 0, y: 0 });


    const generarPosicionRandom = () => {
        const x = Math.floor(Math.random() * 80) + 10;
        const y = Math.floor(Math.random() * 80) + 10;
        setPosicion({ x, y });
    };


    return (
      <div></div>
    )
}

export default JuegoEstrellas;