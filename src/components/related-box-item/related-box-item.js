import React, { Component } from 'react';
import './related-box-item.css';
import {Link} from 'react-router-dom'


class RelatedBoxItem extends Component {
  state = {
    img: null
  }

  componentDidMount() {
    this.setState({img: this.props.item['image']})
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.item !== this.props.item) {
      this.setState({img: this.props.item['image']})
    }
  }

  onError = e => {
    e.currentTarget.src = 'https://www.theteashoppewv.com/wp-content/uploads/2018/08/Star-Wars.jpg'
  }
    
  render() {
    const {item: {name, id}} = this.props;

    return (
      <div className="related-box__item">
        <Link to={`/${(this.props.category === 'characters' || this.props.category === 'pilots') ? 'people' : this.props.category}/${id}`} >
          <div className="related-box__img-box">
            <img src={this.state.img} 
                className="related-box__item-img"  
                onError={this.onError} />
          </div>
          <div className="related-box__name">
            {name}
          </div>
        </Link>
      </div>
    )
  }
}

export default RelatedBoxItem;