import styled from "styled-components";
import avatar1 from "../assets/1.png";
import avatar2 from "../assets/2.png";
import avatar3 from "../assets/4.png";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";

export default function Testimonials() {
  return (
    <Section id="literatura">
      <div className="container">
        <div className="title">
          <h2>
            <span>Literatura polska w okresie</span> baroku
          </h2>
        </div>
        <div className="testimonials">
          <div className="testimonial">
            <div className="image">
              <img src={avatar1} alt="..." />
            </div>
            <p>
              I. Faza ta przypada na okres do końca panowania króla Zygmunta
              III, jest okresem stopniowego kształtowania się barokowej
              literatury na gruncie polskim.
              <span>
                &nbsp;U jej podstaw leżała głęboka religijność, mistycyzm i
                egzystencjalny niepokój, nawiązująca do tradycji średniowiecza.
              </span>
            </p>
          </div>
          <div className="testimonial">
            <div className="image">
              <img src={avatar2} alt="..." />
            </div>
            <p>
              II. Faza ta obejmuje okres od końca panowania Zygmunta III do
              początków czasów saskich.
              <span>
                &nbsp;Cechą najbardziej charakterystyczną był podział literatury
                na nurt dworski, którego przedstawiciele czerpali wzorce z
                zagranicy i przejmowali stamtąd nowinki literackie oraz nurt
                sarmacki skupiający się na poszanowaniu polskości i tradycji,
              </span>
            </p>
          </div>
          <div className="testimonial">
            <div className="image">
              <img src={avatar3} alt="..." />
            </div>
            <p>
              III. Okres schyłkowy literatury baroku przypada na czasy saskie.
              Po licznych klęskach wojennych Polska była poważnie osłabiona
              militarnie oraz politycznie uzależniona od rosnących w siłę
              sąsiadów.
              <span>
                &nbsp;Dodatkowo nieudolne rządy królów z dynastii saskiej oraz
                paraliż sejmu przez instytucję liberum veto, wreszcie prywata
                szlachty i magnatów powodowały nasilającą się anarchię
                wewnętrzną.
              </span>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5vw;
  background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
  padding: 0.2rem;
  border-radius: 1.5rem;
  position: relative;

  @media only screen and (max-width: 768px) {
    border: 1px solid #fc4958;
    background: none;
  }
  .container {
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background: white;
    border-radius: 1rem;
    ${TitleStyles};
    .title {
      position: absolute;
      top: -1rem;
      left: 25%;
      padding: 0 2rem;
      background: white;
    }
    .title h2 {
      font-family: "BaroqueScript", cursive;
    }
    .testimonials {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(330px, auto));
      /* display: flex; */
      justify-content: space-between;
      align-items: center;
      /* gap: 2vw; */
      margin-top: 3vw;

      .testimonial {
        padding: 0 4vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: left;
        /* gap: 1rem; */
        p {
          font-size: 1.1rem;
          line-height: 2rem;
          letter-spacing: 0.1rem;
          font-weight: 600;
          padding: 0 1rem;
          background: #ccc;
          /* max-width: 330px;
          width: 100%; */

          span {
            color: #fc4958;
          }
        }
        ${imageZoomEffect};
        .image {
          overflow: hidden;
          width: max-content;
          max-height: 10rem;
          border-radius: 10rem;
          img {
            height: 10rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      .title {
        position: initial;
        background: transparent;
      }
      /* .testimonials {
        flex-direction: column;
      } */
    }
  }
`;
