import React, { useEffect } from 'react';

const SummaryPage = (props) => {
  useEffect(() => {
    let iceCreamdata = JSON.parse(localStorage.getItem("cart"));
    if (iceCreamdata) {
        const divData = iceCreamdata.map(([name, quantity], index) => (
            <li key={index}>{name}: {quantity}</li>
        ));
        const DIvdata = document.getElementById("div");
        DIvdata.innerHTML = "";
        DIvdata.append(...divData);
    }
}, []);


    const Back = () => {
        props.page("home");
    };

    const order = () => {
        props.order("orderPage");
    };

    return (
        <div className='orders'>
            <h2 className='summary'>Summary items</h2>
            <ul id='div'></ul>
            <button className="btn btn-success" onClick={Back}>Back to main Page</button>
            <button className="continue btn btn-success" onClick={order}>Order Now</button>
        </div>
    );
};

export default SummaryPage;
