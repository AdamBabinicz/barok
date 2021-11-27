import React, { useState } from "react";
import styled from "styled-components";
import background from "../assets/22.jpg";
import Modal from "../components/Portal/Modal";

export default function Portfolio() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <Section id="polski-barok">
      <div className="background">
        <img src={background} alt="..." />
      </div>
      <div className="content">
        <h2>Barok w Polsce</h2>
        <h3>
          Do Polski docierały nurty europejskie zwłaszcza z krajów katolickich,
          jak Francja. W sarmatyzmie pojawiła się fascynacja kulturą Wschodu,
          widoczna w motywach tureckich czy perskich. W XVII w. autorzy nadal
          posługują się łaciną, ale główne dzieła epoki powstały po polsku.
        </h3>
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
        <Modal
          show={modal}
          close={Toggle}
          title="Tematyka literacka obejmuje trzy główne kręgi:"
        >
          <p>
            ▫ refleksyjno-filozoficzny (polska poezja metafizyczna) – tu
            mieszczą się dzieła oparte na rozważaniach vanitas: Daniel
            Naborowski, Mikołaj Sęp-Szarzyński, Zbigniew Morsztyn, Sebastian
            Grabowiecki, Stanisław Herakliusz Lubomirski;
          </p>
          <p>
            ▫ dworski – głównie o tematyce miłosnej (tzw. poezja światowych
            rozkoszy): Jan Andrzej Morsztyn, Hieronim Morsztyn;
          </p>
          <p>▫ sarmacki (ziemiański): Jan Chryzostom Pasek, Wacław Potocki;</p>
          <br />
          <p>
            <em>klp.pl/barok/a-7578.html</em>
          </p>
        </Modal>
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 80vh;
  position: relative;
  border-radius: 5rem;
  &:hover {
    .background {
      img {
        transform: scale(1.2);
      }
    }
  }
  .background {
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    border-radius: 1rem;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
      border-radius: 1rem;
      transition: 0.8s ease-in-out;
    }
  }
  .content {
    position: absolute;
    top: 25%;
    left: 10%;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: flex-start;
    h2 {
      font-size: 3rem;
      font-family: "BaroqueScript", cursive;
      width: 60%;
    }
    h3 {
      width: 60%;
    }
    button {
      border: none;
      padding: 1rem 4rem;
      /* font-size: 1.2rem; */
      color: white;
      border-radius: 4rem;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      background: linear-gradient(to right, #fc4958, #e85d04);
      text-transform: uppercase;
      transition: all 0.5s ease-in-out;
      &:hover {
        background: linear-gradient(to right, #e85d04, #fc4958);
        opacity: 0.8;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    /* display: none; */
    .content {
      h1 {
        width: 90%;
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1.2em;
        width: 90%;
      }
      button {
        padding: 1rem 2rem;
        margin-top: 1rem;
      }
    }
  }
`;
