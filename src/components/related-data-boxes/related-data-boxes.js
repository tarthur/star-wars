import React from 'react';
import RelatedDataBox from '../related-data-box'


const RelatedDataBoxes = (props) => {
  const boxes = props.boxes.map(box => {
    return <RelatedDataBox box={box} />
  })

  return (
    <div className="row">
      {boxes}
    </div>
  );
};

export default RelatedDataBoxes;