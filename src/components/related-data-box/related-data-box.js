import React, { Component } from 'react';
import './related-data-box.css';
import Spinner from '../spinner';
import {Link} from 'react-router-dom'

export default class RelatedDataBox extends Component {
  state = {
    item: null,
    itemsArray: [],
  };

  componentDidMount() {
    console.log('this.props')
    console.log(this.props)
    this.updateItem();
  }

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

  // ddfsd(item) {
  //   const boxes = []; 

  //   for (let key in item) {
  //     let prop = item[key];
      
  //     if (prop.push) boxes.push(prop)
  //   }

  //   return boxes;
  // }

  // render() {






  // listEls = () => {
  //   const {data} = this.props;

  //   data.map(item => {
  //     return (
  //       <div>
  //         <div><img src={item.img} /></div>
  //         <div>{item.name}</div>
  //       </div>
  //     )
  //   })
  // }

  render() {
  
          
      if (!(this.state.itemsArray.length === this.props.boxUrl.arr.length)) {
        return (
          <div className="card border-light mb-3" style={{maxWidth: '20rem'}}>
            <div className="card-header">
              {this.props.boxUrl.title}
              </div>
            <div className="card-body">
              <p className="card-text">
              <Spinner />
              </p>
            </div>
          </div>
        )
      }


      const { item, 
        // image 
        itemsArray
      } = this.state;

      // debugger;

      const items = itemsArray.map(item => {
        if (this.props.boxUrl.title === 'films')
          return <div>
            <img src={item['image']} style={{width: '70px'}} />
            {item['episode_id'] + ': ' + item['title']}
          </div>
        else 
        return <div>
          <Link to={`/${this.props.category === 'characters' ? 'people' : this.props.category}/${item.id}`} >
            <img src={item['image']} style={{width: '70px'}} />
            {item['name']}
          </Link>
        </div>
      })  
  
    // const {count, title} = this.props.data;

    return (
      <div className="card border-light mb-3" style={{maxWidth: '20rem'}}>
        <div className="card-header">
          {this.props.boxUrl.title}
          </div>
        <div className="card-body">
          <p className="card-text">
          {items}
          </p>
        </div>
      </div>
    )
  }
}
