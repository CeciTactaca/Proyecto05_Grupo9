import { useState, useEffect } from "react";
import "../assets/css/JuegoEstrellas.css";

function JuegoEstrellas() {
    const [posicion, setPosicion] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(true);
    const [puntos, setPuntos] = useState(0);
    const [mensaje, setMensaje] = useState("");
    const [JuegoActivo, setJuegoActivo] = useState(true); 


    const generarPosicionRandom = () => {
        const x = Math.floor(Math.random() * 80) + 10;
        const y = Math.floor(Math.random() * 80) + 10;
        setPosicion({ x, y });
    };
    
    useEffect(() => {
      const interval = setInterval(() => {
      setVisible(prev => !prev) 
      generarPosicionRandom();
     }, 2000);

     return () => clearInterval(interval);
    }, []);

    const obtenerEstrella = () => {
      setPuntos(puntos+1)
      setVisible(false)
    }

  //Efecto que controla si el jugador gana
  useEffect(() => {
    if (puntos >= 10) {
      setJuegoActivo(false);
      setMensaje("¡Ganaste!");
    }
  }, [puntos]);

  //Para reiniciar el juego
  const reiniciarJuego = () => {
    setPuntos(0);
    setMensaje("");
    setJuegoActivo(true);
    setVisible(false);
  }

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

                 {!JuegoActivo && (
                    <button className='boton-reiniciar' onClick={reiniciarJuego}>Jugar otra vez</button>
                )}
                </div>
            </div>
        </>
    )
}

export default JuegoEstrellas;