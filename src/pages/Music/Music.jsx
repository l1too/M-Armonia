/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import { Banner } from "../../components/banner/Banner";
import { CarrouselBoton } from "../../components/carrouselBoton/CarrouselBoton";

const Music = () => {
  const [isEmojiActive, setIsEmojiActive] = useState(false);
  const [isActivityActive, setIsActivityActive] = useState(false);
  const [selection, setSelection] = useState({
    emoji: "",
    activity: "",
  });

  const handleClickEmoji = () => {
    setIsEmojiActive(true);
    setSelection({
      emoji: event.target.name,
    });
  };

  const handleClickActvity = () => {
    setIsActivityActive(true);
    setSelection({
      ...selection,
      activity: event.target.innerText,
    });
  };

  const SectionEmoji = () => {
    return (
      <section className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-2xl font-bold text-center">
          ¿Cómo te sientes hoy?
        </h2>
        <div className="flex flex-wrap justify-center">
          <button
            name="CONTENTO"
            className=" text-white font-bold py-2 px-4 rounded text-7xl"
            onClick={() => handleClickEmoji()}
          >
            😃
          </button>
          <button
            name="TRISTE"
            className=" text-white font-bold py-2 px-4 rounded text-7xl"
            onClick={() => handleClickEmoji()}
          >
            😭
          </button>
          <button
            name="ENOJADO"
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
      <section className="flex flex-col justify-center items-center p-2 m-2">
        <h2 className="text-2xl font-bold text-center mb-4">
          ¿Qué actividad vas a realizar?
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            className="border border-pink-400 text-pink-500 font-bold py-1 px-2 rounded"
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
            src={getSong()}
          ></iframe>
        </div>
      </section>
    );
  };

  const getSong = () => {
    const { emoji, activity } = selection;
    console.log("emoji", emoji, "activity", activity);
    let song = "";
    if (emoji === "CONTENTO") {
      switch (activity) {
        case "Estudiar":
          song =
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/435378582";
          break;
        case "Relajarse":
          song =
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1162736542";
          break;
        case "Divertirse":
          song =
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/70627737";
          break;
      }
    }

    if (emoji === "TRISTE") {
      switch (activity) {
        case "Estudiar":
          song =
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/465546846";
          break;
        case "Relajarse":
          song =
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/537910335";
          break;
        case "Divertirse":
          song =
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/136748279";
          break;
      }
    }

    if (emoji === "ENOJADO") {
      switch (activity) {
        case "Estudiar":
          song =
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/395718615";
          break;
        case "Relajarse":
          song =
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/145897691";
          break;
        case "Divertirse":
          song ="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1497533800";
          break;
      }
    }

    console.log("song", song);

    return song;
  };

  const handleClickClean = () => {
    setIsEmojiActive(false);
    setIsActivityActive(false);
  };

  return (
    <div className=" mx-auto w-[95%] my-2">
      <Banner />
      <CarrouselBoton />
      <div className="flex flex-column gap-2 mt-3">
        <SectionEmoji />
        {isEmojiActive && <SectionActivity />}

        {isEmojiActive && isActivityActive && (
          <>
            <SectionPlayer />

            <div className="flex-row text-center pt-4">
              <button
                className="border border-pink-400 text-white bg-pink-600 font-bold py-1 px-2 rounded"
                onClick={() => handleClickClean()}
              >
                Volver a elegir
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Music;
