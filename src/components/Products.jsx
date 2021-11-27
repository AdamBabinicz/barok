import React from "react";
import styled from "styled-components";
import product1 from "../assets/16.png";
import product2 from "../assets/24.jpg";
import product3 from "../assets/15.png";
import product4 from "../assets/23.jpg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
export default function Products() {
  const data = [
    {
      image: product1,
      name: "Jan Andrzej Morsztyn",
      price: "poeta",
      par: "podskarbi wielki koronny",
      text: "Czytaj",
      link: "//pl.wikipedia.org/wiki/Jan_Andrzej_Morsztyn",
    },
    {
      image: product2,
      name: "Stanisław Herakliusz Lubomirski",
      price: "poeta nurtu dworskiego",
      par: "marszałek wielki koronny",
      text: "Czytaj",
      link: "//pl.wikipedia.org/wiki/Stanisław_Herakliusz_Lubomirski",
    },
    {
      image: product3,
      name: "Jan Stanisław Jabłonowski",
      price: "bajkopisarz",
      par: "kanclerz wielki koronny",
      text: "Czytaj",
      link: "//pl.wikipedia.org/wiki/Jan_Stanisław_Jabłonowski_(kanclerz)",
    },

    {
      image: product4,
      name: "Wacław Piotr Rzewuski",
      price: "dramatopisarz",
      par: "hetman wielki koronny",
      text: "Czytaj",
      link: "https://pl.wikipedia.org/wiki/Wacław_Piotr_Rzewuski",
    },
  ];
  return (
    <Section id="pisarze">
      <div className="title">
        <h2>
          <span>Przedstawiciele</span> baroku w Polsce
        </h2>
      </div>
      <div className="products">
        {data.map((product) => {
          return (
            <div className="product">
              <div className="image">
                <img src={product.image} alt="..." />
              </div>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <p>{product.par}</p>

              <a href={product.link} target="_blank" rel="noopener noreferrer">
                <button>{product.text}</button>
              </a>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  .title h2 {
    font-family: "BaroqueScript", cursive;
  }
  ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      h3 {
        color: #fc4958;
      }
      p {
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      ${imageZoomEffect};
      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
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
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    .product button {
      margin-bottom: 1rem;
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
