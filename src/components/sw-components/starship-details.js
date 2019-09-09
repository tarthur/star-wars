import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';
import RelatedDataBoxes from '../related-data-boxes'
import Breadcrumbs from '../breadcrumbs'




class StarshipDetails extends React.Component {
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

    // Model: Executor-class star dreadnought
    // Manufacturer: Kuat Drive Yards, Fondor Shipyards
    // Class: Star Dreadnought
    // Cost: 1,143,350,000 credits
    // Speed: n/a
    // Hyperdrive Rating: 2.0
    // MGLT: 40
    // Length: 19,000m
    // Cargo Capacity: 250,000 metric tons
    // Mimimum Crew: 279,144
    // Passengers: 38,000

    return (
      <div>
        <Breadcrumbs />
        <ItemDetails item={item} image={item.image}>
          <Record field="model" label="Model" />
          <Record field="manufacturer" label="Manufacturer" />
          <Record field="cls" label="Class" />
          <Record field="speed" label="Speed" />
          <Record field="hyperdriveRating" label="Hyperdrive Rating" />
          <Record field="MGLT" label="mglt" />
          <Record field="length" label="Length" />
          <Record field="cargoCapacity" label="Cargo Capacity" />
          <Record field="crew" label="Mimimum Crew" />
          <Record field="passengers" label="Passengers" />
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

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
