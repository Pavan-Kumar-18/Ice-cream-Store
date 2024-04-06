import React from 'react';
import './Navigation.css'; // Import CSS file for styling

const Navigation = (props) => {
  const order = () => {
    props.order("orderPage");
  };

  const summary = () => {
    props.order("summarypage");
  };

  const Home = () => {
    props.order("home");
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <button className="nav-button" onClick={Home}>Home</button>
        </li>
        <li className="nav-item">
          <button className="nav-button" onClick={summary}>Summary Items</button>
        </li>
        <li className="nav-item">
          <button className="nav-button" onClick={order}>Orders</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
