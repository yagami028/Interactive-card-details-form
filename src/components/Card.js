import React from 'react';


const Card = ({cardholder, cardNumber, month, year, cvc}) => {
    return <main className="card">
        <div className="card_frontSide">
            <h3>{cardNumber || "0000 0000 0000 0000"}</h3>
            <ul>
                <li>{cardholder || "Jane Appleseed"}</li>
                <li>{month || "00"}/{year || "00"}</li>
            </ul>
        </div>
        <div className="card_backSide">
            <p>{cvc || "000"}</p>
        </div>
    </main>
}

export default Card;


