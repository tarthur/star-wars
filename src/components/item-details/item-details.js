import React, { Component } from 'react';

import './item-details.css';

const Record = ({ item, field, label }) => {
  // debugger;
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{ item[field] }</span>
    </li>
  );
};

export {
  Record
};

export default class ItemDetails extends Component {

  render() {
    const item = this.props.item;
    const { name } = item;

    return (
      <div className="item-details card">
        <img className="item-image"
          src={this.props.image}
          alt="item"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
