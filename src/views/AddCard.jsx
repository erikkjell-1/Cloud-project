import "./AddCard.css"
import Header from "../components/Header";
import CardForm from "../components/CardForm";
import NewCard from "../components/NewCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewCard } from "../actions/cardActions";

function AddCard({ setHeading }) {
  const [cardNumber, setCardNumber] = useState("XXXX XXXX XXXX XXXX");
  const [name, setName] = useState("FIRSTNAME LASTNAME");
  const [validThru, setValidThru] = useState("MM/YY");
  const [ccv, setCcv] = useState();
  const [vendor, setVendor] = useState("bitcoin");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setHeading("ADD A NEW BANK CARD");
  }, []);

  function addCard() {
    const newCard = {
      id: cardNumber,
      cardNumber: cardNumber,
      name: name,
      validThru: validThru,
      ccv: ccv,
      vendor: vendor,
    };
    dispatch(addNewCard(newCard));
    navigate("/");
  }
  return (
    <section className="add-card">
      <Header />
      <h2 className="subheading">New card</h2>

      <NewCard />

      <CardForm
        setCardNumber={setCardNumber}
        setName={setName}
        setValidThru={setValidThru}
        setCcv={setCcv}
        setVendor={setVendor}
      />

      <button className="new-card-button" onClick={addCard}>Add card</button>
    </section>
  );
}

export default AddCard;