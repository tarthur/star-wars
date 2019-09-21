import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Spinner from '../spinner';
import style from './item-card.module.scss'


export default class ItemCard extends React.Component {
  state = {
    img: this.props.image,
    loader: true,

  }

  onLoad = e => {
    this.setState({
      loader: false,
    })
  }

  onError = e => {
    this.setState({
      img: 'https://www.theteashoppewv.com/wp-content/uploads/2018/08/Star-Wars.jpg'
    })
  }

  render() {
    const {id, name, catalog} = this.props

    return (
      <div className={style.catalogCard} key={id} >
        <Link to={`/${catalog}/${id}`}>
          <div className="card">
            <div className={style.imgBox} >
              {this.state.loader && <Spinner />}
              <img className="img-fluid" 
                    src={this.state.img}
                    onLoad={this.onLoad} 
                    onError={this.onError}/>
            </div>
            <div className="card-body">
              <h5 className={`card-title ${style.title}`} >{name}</h5>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}