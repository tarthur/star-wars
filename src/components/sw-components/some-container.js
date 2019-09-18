import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';
import RelatedDataBoxes from '../related-data-boxes'
import Breadcrumbs from '../breadcrumbs'
import {
  compose } from '../hoc-helpers';
import Spinner from '../spinner';


class SomeContainer extends React.Component {
  state = {
    item: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId, this.props.category)
      .then((item) => {
        this.setState({
          item,
        });
      });
  }

  render() {
    const { item } = this.state;

    if (!item) {
      return (
        <Spinner />
      )
    }
    
    return (
      <div>
        {/* <Breadcrumbs /> */}
        {this.props.children(item)}
        <RelatedDataBoxes boxes={item.boxes} />
      </div>
    );
  }
};

export default SomeContainer;