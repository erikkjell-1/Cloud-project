import { useSelector } from "react-redux";

function ActiveCard() {
  const activeCard = useSelector((state) => {
    return state.activeCard[0];
  });

  function changeColor() {
    switch (activeCard.vendor) {
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

  if (activeCard) {
    return (
      <section className="a-card" style={{ backgroundColor: changeColor() }}>
        <article className="a-card-grid">
        <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="40" rx="8" fill="black" fill-opacity="0.1"/>
<line y1="12.5" x2="18" y2="12.5" stroke="#D0D0D0"/>
<line x1="33" y1="12.5" x2="50" y2="12.5" stroke="#D0D0D0"/>
<line x1="32.5" y1="5.46392e-08" x2="32.5" y2="40" stroke="#D0D0D0"/>
<line y1="26.5" x2="18" y2="26.5" stroke="#D0D0D0"/>
<line x1="32" y1="26.5" x2="50" y2="26.5" stroke="#D0D0D0"/>
<line x1="18.5" y1="5.46392e-08" x2="18.5" y2="40" stroke="#D0D0D0"/>
</svg>

          <article className="creditcard-card">
            <img src={`../src/assets/${activeCard.vendor}.svg`} />
          </article>
        </article>
        <article className="creditcard-info">
          <p className="creditcard-text">{activeCard.cardNumber}</p>
          <aside className="creditcard-info">
            <aside className="creditcard-name-grid">
              <p className="creditcard-text">CARDHOLDER NAME</p>
              <p className="creditcard-text-small">{activeCard.name}</p>
            </aside>
            <aside className="creditcard-name-grid">
              <p className="creditcard-text-small">VALID THRU</p>
              <p className="creditcard-text-small">{activeCard.validThru}</p>
            </aside>
          </aside>
        </article>
      </section>
    );
  }
}
export default ActiveCard;