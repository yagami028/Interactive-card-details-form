import React, { useState, useEffect } from "react";
import Card from "./Card";

const Form = () => {
  const [cardholder, setCardholder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");

// func to check empty fields after submit form
// .....


  const handleSubmit = (e) => {
    e.preventDefalut();
   
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cardholderName">
          Cardholder Name
          <input
            name="cardholderName"
            id="cardholderName"
            type="text"
            required
            value={cardholder}
            onChange={(e) => setCardholder(e.target.value)}
            placeholder="e.g. Jane Appleseed"
          />
          
        </label>
        <label htmlFor="cardNumber">
          Card Number
          <input
            name="cardNumber"
            id="cardNubmer"
            type="text"
            required
            value={cardNumber}
            onChange={(e) =>
              setCardNumber(e.target.value)
            }
            placeholder="1234 5678 9123 0000"
            maxLength={19}
          />
        </label>
        <fieldset>
          <legend>Exp. Date (MM/YY)</legend>
          <label htmlFor="month">
            <input
              name="month"
              id="month"
              type="text"
              required
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              placeholder="MM"
              maxLength={2}
            />
          </label>
          <label htmlFor="year">
            <input
              name="year"
              id="year"
              type="text"
              required
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="YY"
              maxLength={2}
            />
          </label>
        </fieldset>
        <label htmlFor="cvc">
          CVC
          <input
            name="cvc"
            id="cvc"
            type="text"
            required
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            placeholder="e.g. 123"
            maxLength={3}
          />
        </label>
        <input type="submit" value="Confirm" />
      </form>
      <Card
        cardholder={cardholder}
        cardNumber={cardNumber}
        month={month}
        year={year}
        cvc={cvc}
      />
    </div>
  );
};

export default Form;
