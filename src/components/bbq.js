import React, { Component } from 'react';
import bbq from './images/bbq.jpg';
import './css/slice.css';

function Bbq() {
  return(
   <div className="Bbq col-4">
      <div className="card">
        <img src={ bbq } class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Bbq Slice</h5>
          <p className="card-text">It's got bbq, It's got cheese, it's got chicken, and it's only  4 dollar. What more could you ask for?</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $4.00</li>
        </ul>
      </div>
    </div>
  )
}

export default Bbq;
