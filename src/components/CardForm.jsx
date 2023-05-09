function CardForm({ setCardNumber, setName, setValidThru, setCcv, setVendor }) {

  function handleCardNumberChange(event) {
    let cardNumberInput = event.target.value;
    return (
    setCardNumber(cardNumberInput)
    )
  }
  
  function handleNameInput(event) {
    let nameInput = event.target.value;
    return(
      setName(nameInput)
    )
    }

  function handleValidThruChange(event) {
    let validThruInput = event.target.value;
    return (
    setValidThru(validThruInput)
    )
  }

  function handleCcvChange(event) {
    let ccvInput = event.target.value;
    return (
    setCcv(ccvInput)
    )
  }

  return (
    <form className="form">
      <label className="form-heading">CARD NUMBER</label>
      <input className="form-input" pattern="[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{4}" required type="text" maxLength={16} name="cardNumber" onInput={handleCardNumberChange} placeholder="XXXX XXXX XXXX XXXX"/>

      <label className="form-heading">CARDHOLDER NAME</label>
      <input type="text" placeholder="FIRSTNAME LASTNAME" className="form-input" onInput={handleNameInput}/>

      <section className="form-grid">
        <article className="form-grid-boxing">
        <label className="form-heading">VALID THRU</label>
          <input type="text" className="form-input-small" maxLength={5} placeholder="MM/YY" onChange={handleValidThruChange}/>
        </article>

        <article className="form-grid-boxing">
        <label className="form-heading">CCV</label>
          <input placeholder="XXX" type="text" maxLength={3} className="form-input-small" onChange={handleCcvChange}/>
        </article>
      </section>
      
      <label className="form-heading">VENDOR</label>
      <select className="form-input" onChange={(e) => setVendor(e.target.value)}>
        <option value="bitcoin">BITCOIN INC</option>
        <option value="ninja">NINJA BANK</option>
        <option value="blockchain">BLOCK CHAIN INC</option>
        <option value="evil">EVIL CORP</option>
      </select>
      <br />
    </form>

  );
}

export default CardForm;