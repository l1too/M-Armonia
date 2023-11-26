/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import { Banner } from "../../components/banner/Banner";
import { CarrouselBoton } from "../../components/carrouselBoton/CarrouselBoton";

const Music = () => {
  const [isEmojiActive, setIsEmojiActive] = useState(false);
  const [isActivityActive, setIsActivityActive] = useState(false);

  const handleClickEmoji = () => {
    setIsEmojiActive(true);
  };

  const handleClickActvity = () => {
    setIsActivityActive(true);
  };

  const SectionEmoji = () => {
    return (
      <section className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-2xl font-bold text-center">
          ¿Cómo te sientes hoy?
        </h2>
        <div className="flex flex-wrap ">
          <button
            className=" text-white font-bold py-2 px-4 rounded text-7xl"
            onClick={() => handleClickEmoji()}
          >
            😃
          </button>
          <button
            className=" text-white font-bold py-2 px-4 rounded text-7xl"
            onClick={() => handleClickEmoji()}
          >
            😭
          </button>
          <button
            className=" text-white font-bold py-2 px-4 rounded text-7xl"
            onClick={() => handleClickEmoji()}
          >
            😤
          </button>
        </div>
      </section>
    );
  };

  const SectionActivity = () => {
    return (
      <section className="flex flex-col justify-center items-center p-2 m-1">
        <h2 className="text-2xl font-bold text-center mb-4">
          ¿Qué actividad vas a realizar?
        </h2>
        <div className="flex flex-wrap gap-2">
          <button
            className="border border-pink-400 text-pink-500 font-bold py-2 px-4 rounded"
            onClick={() => handleClickActvity()}
          >
            Estudiar
          </button>
          <button
            className="border border-pink-400 text-pink-500 font-bold py-2 px-4 rounded"
            onClick={() => handleClickActvity()}
          >
            Relajarse
          </button>
          <button
            className="border border-pink-400 text-pink-500 font-bold py-2 px-4 rounded"
            onClick={() => handleClickActvity()}
          >
            Dormir
          </button>
          <button
            className="border border-pink-400 text-pink-500 font-bold py-2 px-4 rounded"
            onClick={() => handleClickActvity()}
          >
            Concentrarse
          </button>
          <button
            className="border border-pink-400 text-pink-500 font-bold py-2 px-4 rounded"
            onClick={() => handleClickActvity()}
          >
            Divertirse
          </button>
        </div>
      </section>
    );
  };

  const SectionPlayer = () => {
    return (
      <section className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-center">
          Reproductor de musica
        </h2>
        <div className="flex flex-col justify-center items-center">
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/435378582"
          ></iframe>
        </div>
      </section>
    );
  };

  return (
    <div className=" mx-auto w-[95%] my-2">
      <Banner />
      <CarrouselBoton />
      <div className="flex flex-column gap-2 mt-3">
        <SectionEmoji />
        {isEmojiActive && <SectionActivity />}

        {isEmojiActive && isActivityActive && <SectionPlayer />}
      </div>
    </div>
  );
};

export default Music;
