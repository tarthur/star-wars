import React from 'react';
import ItemDetails, { Record } from '../item-details';
import RelatedDataBox from '../related-data-box'
import {
  withData,
  withSwapiService,
  withChildFunction,
  compose } from '../hoc-helpers';




const RelatedDataBoxes = (props) => {

  const boxes = props.boxes.map((arr, i) => {
    return <RelatedDataBox boxUrl={arr} getData={props.getData} category={arr.title} />
  })

  return (
    <div className="row">
      {boxes}
    </div>
  );
};


const mapRelMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getThisUrl,
  }
};

export default compose(
  withSwapiService(mapRelMethodsToProps),
  // withData,
)(RelatedDataBoxes);