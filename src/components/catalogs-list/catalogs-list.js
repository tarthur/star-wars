import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames'
import style from './catalogs-list.module.scss'


const CatalogsList = () => {
  const arr = ['people', 'films', 'species', 'starships', 'vehicles', 'planets'];

  const getItems = () => {
    const imageBase = 'https://starwars-visualguide.com/assets/img/categories/';

    return arr.map(item => {
      return (
        <div className={cn('col-sm-6 col-md-4', style.cardBox)}>
          <Link to={`/${item}/page/1`}>
            <div className={cn('card', style.card)}>
              <div className={style.picBox}>
                <img className="img-fluid" 
                      src={`${imageBase}${item === 'people' ? 'character' : item}.jpg`} 
                      alt="" />
              </div>
              <div className={cn('card-body', style.cardBody)} >
                <h5 className={cn('card-title', style.cardTitle)}>{item}</h5>
              </div>
            </div>
          </Link>
        </div>
      )
    })
  }

  return (
    <div className={style.catalogList}>
      <div className={cn('row', style.catalogRow)}>
        {getItems()}
      </div>
    </div>
  );
};

export default CatalogsList;