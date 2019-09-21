import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';
import ItemCard from '../item-card/item-card'
import style from './item-list.module.scss'


const ItemList = (props) => {

  const { data: {count, results}, getCount, catalog } = props;

  getCount(count)

  const items = results.map((item) => {
    const { name, image, id} = item;
    
    return <ItemCard id={id} image={image} name={name} catalog={catalog} />
  });

  return (
   <div className={style.box}>
      <div className="row">
        {items}
      </div>
   </div>
  );
};

ItemList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const { getAllPeople } = new SwapiService();

export default withRouter(withData(ItemList, getAllPeople));
