import React, { Component } from 'react';
import veggie from './images/veggie.jpeg';
import './css/slice.css';

function Veggie() {
  return(
    <div className="Veggie col-4">
      <div className="card">
        <img src={ veggie } class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Veggie Slice</h5>
          <p className="card-text">It's got veggie, It's got cheese, it's got tomato sauce, and it's only  3 dollar. What more could you ask for?</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $3.00</li>
        </ul>
      </div>
    </div>
  );
}

export default Veggie;