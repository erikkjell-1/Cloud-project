import './Home.css'
import "../components/Card.css"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import CardStack from "../components/CardStack";
import ActiveCard from "../components/ActiveCard";

function Home({ setHeading }) {
  const activeCard = useSelector((state) => {
    return state.activeCard;
  });
  const navigate = useNavigate();

  useEffect(() => {
    setHeading("E-WALLET");
  }, []);

  function goToAddCard() {
    navigate("/addcard");
  }

  return (
    <section className="home">
      {activeCard.length > 0 ? (
        <div>
          <h2 className="subheading">Active card</h2>
          <ActiveCard />
        </div>
      ) : (
        <h2 className="subheading">THERE ARE NO AVAILABLE CARDS</h2>
      )}
      <CardStack />
      <button className="button button__add" onClick={goToAddCard}>
        Add a new card
      </button>
    </section>
  );
}

export default Home;