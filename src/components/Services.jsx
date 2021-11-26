import React, { useState } from "react";
import styled from "styled-components";
import Services1 from "../assets/16.jpg";
import Services2 from "../assets/18.jpg";
import Services3 from "../assets/20.jpg";
import Services4 from "../assets/15.jpg";
import Services5 from "../assets/17.jpg";
import Services6 from "../assets/21.jpg";
import { TitleStyles } from "./ReusableStyles";
import Modal from "../components/Portal/Modal";
import Modal1 from "../components/Portal/Modal";
import Modal2 from "../components/Portal/Modal";
import Modal3 from "../components/Portal/Modal";
import Modal4 from "../components/Portal/Modal";
import Modal5 from "../components/Portal/Modal";

export default function Services() {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const Toggle = () => setModal(!modal);
  const Toggle1 = () => setModal1(!modal1);
  const Toggle2 = () => setModal2(!modal2);
  const Toggle3 = () => setModal3(!modal3);
  const Toggle4 = () => setModal4(!modal4);
  const Toggle5 = () => setModal5(!modal5);

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <Section id="style">
      <div className="title">
        <h2 className="yellow">Style literackie</h2>
        <p>
          Porządek, jasność i harmonia, typowe dla epoki poprzedniej, powoli
          ustępowały miejsca literaturze bardziej chaotycznej, niespokojnej,
          nieuporządkowanej, dziwniejszej. Z początku zmiany dokonywały się w
          ramach literatury opartej na wzorcach klasycznych. W ramach
          klasycznych form wyrażano już jednak niepokój, niepewność, niewiarę w
          możliwości poznania, przekonanie o słabości człowieka.
        </p>
      </div>
      <div className="services">
        <div className="service">
          <img src={Services2} alt="..." />
          <p>
            Pojęcie manieryzmu jako kierunku estetycznego odnosi się do całej
            epoki. Wywodzi się ono ze sztuk plastycznych. Obejmowało swym
            znaczeniem właściwie wszystkie zjawiska artystyczne i literackie,
            ponieważ Barok nastawiony był na oryginalność.
          </p>
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
            Manieryzm
          </button>
          <Modal show={modal} close={Toggle} title="Manieryzm">
            <p>
              Polegał na zarzuceniu ideałów harmonii i ładu na rzecz
              skomplikowanych form, które miały zaskakiwać widza i poruszać jego
              wyobraźnię (w czym przybliżał się do konceptyzmu). Jednocześnie
              jego cechą nadrzędną stała się subtelność języka połączona
              częstokroć z wyszukanym artyzmem, który realizował się w
              ornamentacyjnym, wyrafinowanym stylu, sprawiającym niekiedy
              wrażenie przesady i sztuczności.
            </p>
            <br />
            <p>
              <em>eszkola.pl/jezyk-polski/manieryzm-684.html</em>
            </p>
          </Modal>
        </div>
        <div className="service yellow">
          <img src={Services1} alt="..." />
          <p>
            Jest stylem poetyckim charakterystycznym dla włoskiego Baroku i
            pochodzi od nazwiska Giambattista Marino (1569–1625). Poezja
            marinistyczna powinna zaskakiwać, olśniewać i zdumiewać.
          </p>
          <button
            type="button"
            onClick={() => Toggle1()}
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
            Marinizm
          </button>
          <Modal1 show={modal1} close={Toggle1} title="Marinizm">
            <p>
              Marino był w swych wymaganiach wobec twórców bardzo radykalny:
              Celem poety jest cudowność. Kto nie potrafi zdumiewać niech idzie
              do stajni- brzmiały jego słowa, zgodnie z którymi poeci parający
              się poezją odznaczającą się prostotą stylu, byli barbarzyńscy.
            </p>
            <p>
              W związku z takim założeniem, mariniści wypracowali sobie cały
              asortyment ulubionych środków poetyckich, po które sięgali.
              Należały do nich chwyty stylistyczne, takie jak: aliteracje,
              anafory, paradoksy, inwersje, parentezy oraz hiperbole.
            </p>
            <br />
            <p>
              <em>
                www.bryk.pl/wypracowania/jezyk-polski/barok/1011185-marinizm-definicja-i-przyklady.html
              </em>
            </p>
          </Modal1>
        </div>
        <div className="service">
          <img src={Services3} alt="..." />
          <p>
            Był nastawiony na wywołanie u odbiorcy zdumienia i zaskoczenia. Styl
            ten kazał dobierać niezwykłe wyobrażenia i myśli, kunsztowne
            sformułowania językowe i opierać utwory na oryginalnym pomyśle
            artysty.
          </p>
          <button
            type="button"
            onClick={() => Toggle2()}
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
            Konceptyzm
          </button>
          <Modal2 show={modal2} close={Toggle2} title="Konceptyzm">
            <p>
              Konceptyzm jest nurtem szczególnie popularnym we włoskiej i
              hiszpańskiej poezji barokowej; jego nazwa wywodzi się od włoskiego
              sformułowania concetto oznaczającego wyszukany pomysł, stąd też
              oparta na nim strategia stylistyczna polega na skonstruowaniu
              wypowiedzi lirycznej wedle określonego, błyskotliwego i
              zaskakującego konceptu. Mając na celu nieustanne zadziwianie i
              szokowanie czytelnika konceptyzm posługiwał się kontrastowymi
              środkami stylistycznymi, jak antytezy, paradoksy, oksymorony,
              twórczo wykorzystane anafory i nieoczekiwane puenty.
            </p>
            <br />
            <p>
              <em>eszkola.pl/jezyk-polski/konceptyzm-686.html</em>
            </p>
          </Modal2>
        </div>
        <div className="service">
          <img src={Services4} alt="..." />
          <p>
            Wziął się od nazwiska hiszpańskiego poety Luisa de Gongora y Argote
            (1561–1627). Oznacza on barokowy styl poetycki w Hiszpanii,
            odznaczający się zawiłością, kwiecistością; jest bardzo ozdobny i
            napuszony.
          </p>
          <button
            type="button"
            onClick={() => Toggle3()}
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
            Gongoryzm
          </button>
          <Modal3 show={modal3} close={Toggle3} title="Gongoryzm">
            <p>
              Styl wywodzący się z barokowej poezji hiszpańskiej, stanowiącym
              niejako odpowiedź na kształtujący się we Włoszech marinizm oraz
              angielski eufuizm. Nazwa pochodzi od nazwiska poety Luisa de
              Góngory: twórcy skomplikowanych, hermetycznych wierszy o silnych
              akcentach erudycyjnych, które wyrażały się w kunsztownej
              konstrukcji i niezwykle kwiecistej stylistyce. Środkiem wyrazu
              najczęściej są tutaj misterne metafory i alegorie, kalambury,
              aluzje i wyszukane epitety.
            </p>
            <br />
            <p>
              <em>
                eszkola.pl/jezyk-polski/gongoryzm-eufuizm-preciosite-687.html
              </em>
            </p>
          </Modal3>
        </div>
        <div className="service yellow">
          <img src={Services5} alt="..." />
          <p>
            Oznacza wykwintnisię, efektowną kobietę, damę z paryskich salonów
            literackich XVII w. Pojęcie to rozpowszechnił Molier. Oznacza ono,
            podobnie jak powyższe określenia stylu, wykwintność, barwność,
            wyszukanie lub przeładowanie, napuszenie.
          </p>
          <button
            type="button"
            onClick={() => Toggle4()}
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
            Préciosité
          </button>
          <Modal4 show={modal4} close={Toggle4} title="Préciosité">
            <p>
              Zrodzona w salonach arystokracji paryskiej (m.in. markizy de
              Rambouillet), broniła pozycji kobiety, kładła nacisk na elegancję
              obyczajów, delikatność uczuć (sentymentalno-heroiczne powieści H.
              d’Urfégo i M. de Scudéry, opisujące wyidealizowaną miłość) i
              wyrafinowanie smaku lit. (twórczość epistolarna V. Voiture’a,
              charakteryzująca się kunsztowną strukturą, zaskakującymi
              metaforami).
            </p>
            <br />
            <p>
              <em>encyklopedia.pwn.pl/haslo/preciosite;3961998.html</em>
            </p>
          </Modal4>
        </div>
        <div className="service">
          <img src={Services6} alt="..." />
          <p>
            To pojęcie wzięte od angielskiego pisarza Johna Lyly (1554–1606).
            Mianem eufuistycznego określa się język (mówiony lub pisany)
            kwiecisty, sztuczny, przesadny.
          </p>
          <button
            type="button"
            onClick={() => Toggle5()}
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
            Eufuizm
          </button>
          <Modal5 show={modal5} close={Toggle5} title="Eufuizm">
            <p>
              Tendencja wyrosła z wczesnego angielskiego baroku. Polega na
              zastosowaniu przesadnie wytwornego stylu, bogatego w metafory i
              mnożącego efekty retoryczne. Jest to angielski odpowiednik
              manieryzmu. Nazwa eufuizmu wzięła się od powieści Johna Lyly'a
              Euphues (1578-1580), w której ten styl został zapoczątkowany i
              rozpowszechniony. W angielskim literaturoznawstwie eufuizm często
              bywa mylony z eufemizmem.
            </p>
            <br />
            <p>
              <em>figury.net.pl/slownik/eufuizm</em>
            </p>
          </Modal5>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  .title h2 {
    font-family: "BaroqueScript", cursive;
    font-weight: 600;
  }
  .title p {
    font-weight: bold;
  }
  margin: 2rem 4rem;
  ${TitleStyles};
  .services {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, auto));
    gap: 3vw;
    margin-top: 4rem;

    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 3vw;
      font-weight: 600;

      img {
        /* max-width: 500px; */
        width: 100%;
        height: 400px;
        object-fit: cover;
      }
      p {
        text-align: left;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 0.6rem 3rem;
        letter-spacing: 0.2rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        border: none;
        color: white;
        background: #fc4958;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
    .yellow {
      button {
        background-color: #f9c74f;
        &:hover {
          background-color: #fc4958;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin: 2rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
