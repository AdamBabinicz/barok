import React, { useState } from "react";
import styled from "styled-components";
import hero from "../assets/14.jpg";
import heroDesign from "../assets/9.png";
import { GiBookmarklet } from "react-icons/gi";
import Modal from "../components/Portal/Modal.js";

export default function Hero() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <Section id="home">
      <div className="background">
        <img src={hero} alt="Background Image" />
      </div>
      <div className="content">
        <div className="sale">
          <img src={heroDesign} alt="..." />
          <h1>
            Barok&nbsp;w&nbsp;literaturze
            <span>
              <GiBookmarklet />
            </span>
          </h1>
        </div>
        <div className="info">
          <h2>Ogólne tendencje literackie</h2>
          <em>
            manieryzm, marinizm, konceptyzm, gongoryzm, préciosité, eufuizm
          </em>
          <button
            type="button"
            onClick={() => Toggle()}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Więcej
          </button>
          <Modal show={modal} close={Toggle} title="Barok">
            <p>
              Barok (prawdopodobnie z port. barroco – perła o nieregularnym
              kształcie, z wł. – dziwność, nietypowość) – główny kierunek w
              kulturze europejskiej, którego trwanie datuje się od końca XVI
              wieku do XVIII wieku. Barok obejmował wszystkie przejawy
              działalności literackiej i artystycznej. U jego podstaw leżało
              twórcze przekształcenie renesansowego klasycyzmu w dążeniu do
              uzyskania maksymalnego oddziaływania na odbiorcę.
            </p>
            <br />
            <p>
              <em>pl.wikipedia.org/wiki/Barok</em>
            </p>
          </Modal>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 90vh;
  width: 100vw;
  position: relative;
  .background {
    height: 100%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    .sale {
      position: relative;
      left: 10%;
      img {
        height: 70vh;
      }
      h1 {
        color: white;
        position: absolute;
        top: 5vh;
        left: 15vh;
        font-size: 3.5rem;
        font-family: "BaroqueScript", cursive;

        span {
          display: block;
          font-size: 5vw;
        }
      }
    }
    .info {
      position: absolute;
      top: 40%;
      right: 10%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;
      h2 {
        color: #f9c74f;
        font-size: 2.5rem;
        letter-spacing: 0.5rem;
      }
      em {
        color: white;
        width: 60%;
        text-align: end;
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1.4rem;
        background-color: #fc4958;
        border: none;
        color: white;
        font-weight: 800;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .content {
      flex-direction: column;
      .sale {
        left: 0;
        img {
          display: none;
        }
        h1 {
          font-size: 2rem;
          position: relative;
          top: 1rem;
          left: 0;
          text-align: center;
        }
      }

      .info {
        top: 25%;
        h2 {
          font-size: 2rem;
          text-align: center;
          letter-spacing: normal;
        }
        em {
          width: 90%;
        }
      }
    }
  }
`;
