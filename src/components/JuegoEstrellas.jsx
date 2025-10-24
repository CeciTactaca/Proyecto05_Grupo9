import { useState, useEffect } from "react";

function JuegoEstrellas() {
    const [posicion, setPosicion] = useState({ x: 0, y: 0 });


    const generarPosicionRandom = () => {
        const x = Math.floor(Math.random() * 80) + 10;
        const y = Math.floor(Math.random() * 80) + 10;
        setPosicion({ x, y });
    };


    return (
        <>
        <div className="contenedor-juego">
            <h1>Atrapa las estrellas</h1>

            <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
                <p>Estrellas atrapadas: {puntos}</p>
                {mensaje && <h2>{mensaje}</h2>}

                {visible && JuegoActivo && (
                    <div className="estrella"
                        onClick={obtenerEstrella}
                        style={{
                            position: 'absolute',
                            left: `${posicion.x}%`,
                            top: `${posicion.y}%`,
                            fontSize: '25px',
                        }}
                    >
                        ⭐
                    </div>
                )}
            </div>
        </div>
        </>
    )
}

export default JuegoEstrellas;