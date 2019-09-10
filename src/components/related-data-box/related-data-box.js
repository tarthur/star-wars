import React, { Component } from 'react';
import './related-data-box.css';
import Spinner from '../spinner';
import {Link} from 'react-router-dom'
import Pagination from '../pagination'



export default class RelatedDataBox extends Component {
  state = {
    item: null,
    itemsArray: [],
    img: null
  };

  componentDidMount() {
    console.log('this.props')
    console.log(this.props)
    this.updateItem();
  }
  
  

  onError = e => {
    console.log('this.onError')
    // this.setState({
    //   img: 'https://www.theteashoppewv.com/wp-content/uploads/2018/08/Star-Wars.jpg'
    // })
  }

            // <img style={{width: '100%'}} src={this.state.img} onLoad={this.onLoad} onError={this.onError} />

  // componentDidUpdate(prevProps) {
  //   // if (this.props.itemId !== prevProps.itemId ||
  //   //   this.props.getData !== prevProps.getData ||
  //   //   this.props.getImageUrl !== prevProps.getImageUrl) {
  //   //   this.updateItem();
  //   // }
  // }
    
  updateItem() {
    const {boxUrl, getData} = this.props;

    boxUrl.arr.forEach(el => {
      getData(el, this.props.category)
        .then((itemmmm) => {
          this.setState({
            itemsArray: [
              ...this.state.itemsArray,
              {
                ...itemmmm,
              },
            ],
            item: true,
            // image: getImageUrl(item)
          });
        });

    });

  }

  onPaginationSelected() {

  }

  render() {
  
          
      if (!(this.state.itemsArray.length === this.props.boxUrl.arr.length)) {
        return (
          
          <div className="related-box col-sm-4">
          <div className="card border-light " style={{}}>
            <div className="card-header">
              {this.props.boxUrl.title}
              </div>
            <div className="card-body">
              <p className="card-text related-box__items">
              <Spinner />
              </p>
              
            <div className="related-box__pagination"></div>
            </div>
          </div>
        </div>
        )
      }


      const { item, 
        // image 
        itemsArray
      } = this.state;

      // debugger;

      const [...copyArr] = itemsArray;

      const items = copyArr.slice(0, 3).map(item => {
        if (this.props.boxUrl.title === 'films')
          return <div>
            <img src={item['image']} style={{width: '70px'}} />
            {item['episode_id'] + ': ' + item['title']}
          </div>
        else 
        return <div className="related-box__item">
          <Link to={`/${this.props.category === 'characters' ? 'people' : this.props.category}/${item.id}`} >
            <div className="related-box__img-box">
              <img src={item['image']} 
                  className="related-box__item-img"  
                  onError={this.onError} />
            </div>
            <div className="related-box__name">
              {item['name']}
            </div>
          </Link>
        </div>
      })  
  

    // const {count, title} = this.props.data;

    return (
      <div className="related-box col-sm-4">
        <div className="card border-light " style={{}}>
          <div className="card-header">
            {this.props.boxUrl.title}
            </div>
          <div className="card-body">
            <p className="card-text related-box__items">
            {items}
            </p>
            <div className="related-box__pagination">
              <Pagination count={itemsArray.length} pageSize="3" current={1} onPageChanged={this.onPaginationSelected} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
