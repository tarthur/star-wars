import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';
import RelatedDataBoxes from '../related-data-boxes'
import Breadcrumbs from '../breadcrumbs'




class CharactersDetails extends React.Component {
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
  ddfsd(item) {
    const boxes = []; 

    for (let key in item) {
      let prop = item[key];
      
      if (prop.push && prop.length > 0) {
        boxes.push({
          title: key,
          arr: item[key]
        })
      }
    }

    console.log(boxes)

    return boxes;
  }

  render() {
    const { item } = this.state;

    if (!item) {
      return <span>Select a item from a list</span>;
    }

    return (
      <div>
        <Breadcrumbs />
        <ItemDetails item={item} image={item.image}>
          <Record field="birthYear" label="Birth Year" />
          {/* <Record field="species" label="Species" /> */}
          <Record field="height" label="Height" />
          <Record field="mass" label="Mass" />
          <Record field="gender" label="Gender" />
          <Record field="hairColor" label="Hair Color" />
          <Record field="skinColor" label="Skin Color" />
        </ItemDetails>
        {/* <RelatedDataBoxes boxes={this.ddfsd(item)} /> */}
      </div>
    );
  }
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
  }
};

export default withSwapiService(mapMethodsToProps)(CharactersDetails);
