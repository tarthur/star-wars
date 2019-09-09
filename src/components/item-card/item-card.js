import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';
import './item-card.css';
import Pagination from '../pagination'

export default class ItemCard extends React.Component {
  state = {
    img: this.props.image
  }

  onLoad = e => {
    console.log(e.target)
  }

  onError = e => {
    this.setState({
      img: 'https://www.theteashoppewv.com/wp-content/uploads/2018/08/Star-Wars.jpg'
    })
  }

  render() {
    const {id, name, catalog} = this.props

    return (
      <div className="card-222 card-box" key={id}
              // onClick={() => onItemSelected(id)}
              >
        <Link to={`/${catalog}/${id}`}>
          <div className="card">
            <img style={{width: '100%'}} src={this.state.img} onLoad={this.onLoad} onError={this.onError} />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}