import React from 'react';
import RelatedDataBoxes from '../related-data-boxes'
import Spinner from '../spinner';


class DetailsBox extends React.Component {
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
        {this.props.children(item)}
        <RelatedDataBoxes boxes={item.boxes} />
      </div>
    );
  }
};

export default DetailsBox;