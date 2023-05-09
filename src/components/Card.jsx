import Chip from "../assets/chip-light.svg";
import { removeCard, activeCard, removeActiveCard } from "../actions/cardActions"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function Card(props) {
  const [isCardRemoved, setIsCardRemoved] = useState(true);
  const activeCardId = useSelector((state) => {
    return state.activeCard;
  });
  const dispatch = useDispatch();

  function getColor() {
    switch (props.card.vendor) {
      case "bitcoin":
        return "#FFAE34";
      case "ninja":
        return "#0E927D";
      case "blockchain":
        return "#8B58F9";
      case "evil":
        return "#F33355";
      default:
        break;
    }
  }

  function remove() {
    dispatch(removeCard(props.card.id));
    setIsCardRemoved(!isCardRemoved);
  }

  function handleChange(event) {
    const active = props.card;

    if (event.target.checked) {
      if (activeCardId) {
        dispatch(activeCard(active));
      }
    } else {
      dispatch(removeActiveCard(active));
    }

    setIsCardRemoved(activeCardId !== active.id);
  }

  if (props.card) {
    const isActive = activeCardId === props.card.id;

    return (
      <>
        {isCardRemoved ? (
          <section className={`creditcard ${isActive ? "active" : ""}`}
            data-id={props.card.id}
            style={{ backgroundColor: getColor() }}>
            <article className="creditcard-card">
              <section className="creditcard-functions">
                <label className="creditcard-radio">
                  <input type="radio" className="creditcard-radiobtn" name="radio" onChange={handleChange}/>
                </label>
                <button className="creditcard-remover" onClick={remove}>Remove</button>
              </section>
            </article>
            <article className="credit-card-grid">
              <img src={Chip} alt="" />
              <img src={`../src/assets/${props.card.vendor}.svg`} />
            </article>
            <article className="creditcard-info">
              <p className="creditcard-text">{props.card.cardNumber}</p>
              <aside className="creditcard-info-grid">
                <aside className="creditcard-name-grid">
                  <p className="creditcard-text-small">CARDHOLDER NAME</p>
                  <p className="creditcard-text-small">{props.card.name}</p>
                </aside>
                <aside className="creditcard-date">
                  <p className="creditcard-text-small">VALID THRU</p>
                  <p className="creditcard-text-small">{props.card.validThru}</p>
                </aside>
              </aside>
            </article>
          </section>
        ) : null}
      </>
    );
  }
}

export default Card;