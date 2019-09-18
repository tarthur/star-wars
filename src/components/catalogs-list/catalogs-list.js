import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const arr = ['people', 'films', 'species', 'starships', 'vehicles', 'planets'];

  const getItems = () => {
    const imageBase = 'https://starwars-visualguide.com/assets/img/categories/';

    return arr.map(item => {
            return (
              <div className="col-sm-4 card-box main-card">
                <Link to={`/${item}/page/1`}>
                  <div className="card main-card-2">
                    <div className="pic-box">
                      <img style={{height: 200, width: '100%', display: 'block'}} src={`${imageBase}${item === 'people' ? 'character' : item}.jpg`} alt="Card image" />
                    </div>
                   <div className="card-body">
                      <h5 className="card-title">{item}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })
  }

  return (
    <div className="header">
      <div className="row header-row">
        {getItems()}
      </div>
    </div>
  );
};

export default Header;