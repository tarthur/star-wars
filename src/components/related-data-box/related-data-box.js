import React, { Component } from 'react';
import './related-data-box.css';
import Spinner from '../spinner';
import SimplePagination from '../simple-pagination/simple-pagination'
import RelatedBoxItem from '../related-box-item/related-box-item'
import { withSwapiService, compose } from '../hoc-helpers';


class RelatedDataBox extends Component {
  state = {
    itemsArray: [],
    img: null,
    interval: [0, 3],
    items: []
  };

  componentDidMount() {
    this.updateItem();
  }
  
  updateItem() {
    const {box: {arr, title}, getData} = this.props;


    arr.forEach(el => {
      getData(el, title)
        .then((item) => {
          this.setState({
            itemsArray: [
              ...this.state.itemsArray,
              {...item },
            ],
          });
        });

    });

  }

  getInterval = (interval) => {
    console.log(interval)
    this.setState({interval})
  }

  getItem = () => {    
    const { itemsArray } = this.state;
    const [...copyArr] = itemsArray;


    return copyArr.slice(this.state.interval[0], this.state.interval[1]).map(item => {
      return <RelatedBoxItem item={item} category={this.props.box.title} />
    })  
  }

  render() {
    const ifff = !(this.state.itemsArray.length === this.props.box.arr.length);
  
    return (
      <div className="related-box col-sm-4">
        <div className="card border-light " style={{}}>
          <div className="card-header">
            {this.props.box.title}
            </div>
          <div className="card-body">
            <p className="card-text related-box__items">
              {ifff ? <Spinner /> : this.getItem()}
            </p>
            <div className="related-box__pagination">
              {!ifff && <SimplePagination length={this.state.itemsArray.length} part={3} getInterval={this.getInterval} />}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapRelMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getThisUrl,
  }
};

export default compose(
  withSwapiService(mapRelMethodsToProps),
)(RelatedDataBox);