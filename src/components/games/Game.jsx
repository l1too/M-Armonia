import  { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";

import styles from './Game.module.css'
import { Banner } from "../banner/Banner";
import { CarrouselBoton } from "../carrouselBoton/CarrouselBoton";

const COLORS = [
  { name: "rojo", color: "red", correct: false },
  { name: "verde", color: "#0f0", correct: false },
  { name: "azul", color: "blue", correct: false },
  { name: "amarillo", color: "#ff0", correct: false },
];

function Game() {
  const [status, setStatus] = useState("initial");
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);
  const [gameColors, setGameColors] = useState([]);

  const correctColor = useMemo(() => gameColors.find((color) => color.correct), [gameColors]);

  function handlePlay() {
    setStatus("playing");
    setTime(0);
    setScore(0);

    const [correctColor, wrongColor] = COLORS.slice().sort(() => Math.random() - 0.5);

    const isCorrectColorFirst = Math.random() < 0.5;
    const updatedColors = isCorrectColorFirst
      ? [{ ...correctColor, correct: true }, wrongColor]
      : [wrongColor, { ...correctColor, correct: true }];

    setGameColors(updatedColors);
  }

  function handleColorClick(clickedColor) {
    if (clickedColor.correct) {
      setScore((prevScore) => prevScore + 1);

      if (score === 9) {
        setStatus("finished");
      } else {
        const [correctColor, wrongColor] = COLORS.slice().sort(() => Math.random() - 0.5);
        const updatedColors = Math.random() < 0.5
          ? [{ ...correctColor, correct: true }, wrongColor]
          : [wrongColor, { ...correctColor, correct: true }];

        setGameColors(updatedColors);
      }
    } else {
      setStatus("finished");
      alert("¡Perdiste! Intenta de nuevo.");
    }
  }

  useEffect(() => {
    let interval;

    if (status === "playing") {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 20) {
            setStatus("finished");
            alert("¡Perdiste! Se acabó el tiempo.");
            clearInterval(interval);
          }

          return prevTime + 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [status]);

  return (
    <div className="mx-auto w-[95%] my-2">
    <Banner/>
    <CarrouselBoton/>
    <main className={styles.main}>

      <header className={styles.header} style={{ backgroundColor: "#333" }}>
        <h1>{score} puntos</h1>
        <h1>{time} segundos</h1>
      </header>
      {status === "playing" && (
        <section className={styles.section}>
          <span style={{ textTransform: "capitalize", color: gameColors[0].color }}>
            {correctColor.name}
          </span>
        </section>
      )}
      <footer className={styles.footer}>
        {status === "initial" && (
        <div className={styles.iniciarGame}>
          <button className={styles.botonGame} style={{ fontSize: 32 }} onClick={handlePlay}>
            Jugar
          </button>
          <p style={{ fontSize: 18, margin: "20px", textAlign: "center" }}>
            🌈 Bienvenido al juego de colores. Elige el color correcto según el nombre indicado. 
            Obtén la mayor cantidad de puntos antes de que se acabe el tiempo o haz clic en el color incorrecto para perder. 🕹️
            ¡Buena suerte! 🍀
        </p>
        </div>
        )}
        {status === "finished" && (
    <>
      <button
        className="boton-game"
        style={{ fontSize: 20, padding: "10px", margin: "10px" }}
        onClick={() => setStatus("initial")}
      >
        Reiniciar
      </button>
      <NavLink to="/home">
      <button
        className="boton-game"
        style={{ fontSize: 20, padding: "10px", margin: "10px" }}
        onClick={() => setStatus("initial")}
      >
        Ir al Home
      </button>
      </NavLink>
    </>
  )}
        {status === "playing" && (
          <>
            <button
              style={{ width: 128, height: 128, backgroundColor: gameColors[0].color }}
              onClick={() => handleColorClick(gameColors[0])}
            ></button>
            <button
              style={{ width: 128, height: 128, backgroundColor: gameColors[1].color }}
              onClick={() => handleColorClick(gameColors[1])}
            ></button>
          </>
        )}
      </footer>
    </main>
    </div>
  );
}

export default Game;
