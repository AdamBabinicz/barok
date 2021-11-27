import React from "react";
import styled from "styled-components";
import logo from "../assets/12.png";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
export default function Footer() {
  return (
    <div className="footer">
      <Section>
        <div className="brand container">
          <img src={logo} alt="..." />
          <p>
            Barok narodził się we Włoszech, jako forma renesansu, największy
            wpływ na jego rozwój miał Michał Anioł, który dostrzegał w sztuce
            zmaganie się sił psychicznych i sił natury.
          </p>
          <ul>
            <li>
              <a
                href="//www.instagram.com/explore/tags/barok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a
                href="//www.facebook.com/MorsztynBarokFestiwal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            {/* <li>
              <GrLinkedinOption />
            </li> */}
            <li>
              <a
                href="//twitter.com/search?q=%23barok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div className="about container">
          <div className="title">
            <h3>Zgłębiaj wiedzę</h3>
          </div>
          <p>
            Barok w rozumieniu dzisiejszym oznaczał styl trwający od II połowy
            XVI wieku do 1760 roku, łącznie ze stylem rokokowym. Styl barokowy
            był wyrazem przemian religijnych, społecznych i politycznych jakie
            powstały w drugiej połowie XVI wieku np. sobór w Trydencie, rozwój
            filozofii i nauk przyrodniczych, zanik idei średniowiecznych.
          </p>
        </div>
        <div className="contact container">
          <div className="title">
            <h3>Kontakt</h3>
          </div>
          <p>puaro@vp.pl</p>
          <p>26-611 Radom, Polska</p>
        </div>
      </Section>
      <LowerFooter className="lower__footer">
        <h2>
          2021 - <span>{new Date().getFullYear()}.</span>
        </h2>
      </LowerFooter>
    </div>
  );
}

const Section = styled.footer`
  margin: 0;
  background: linear-gradient(to right, #350b0b, #793002);
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 4vw;
  p {
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;
    li {
      padding: 0.8rem;
      border-radius: 2rem;
      background-color: white;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: black;
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fc4958;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
        &:hover {
        }
      }
    }
  }
  img {
    filter: brightness(0) invert(1);
    width: 10vw;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      .title h3 {
        margin: 1rem 0;
      }
      ul li {
        margin: 1rem;
      }
      img {
        height: 4rem;
        width: 10rem;
      }
      p {
        letter-spacing: normal;
      }
    }
  }
`;

const LowerFooter = styled.div`
  margin: 0;
  text-align: center;
  background-color: black;
  color: white;
  padding: 1rem;
  h2 {
    display: flex;
    justify-content: center;
}
    span {
      color: #fc4958;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 450px) {
    h2 {
      span {
        display: block;
      }
    }
  }
`;
