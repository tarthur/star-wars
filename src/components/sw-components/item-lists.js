import React from 'react';
import ItemList from '../item-list';
import {
  withData,
  withSwapiService,
  withListNav,
  compose } from '../hoc-helpers';

import { withRouter } from 'react-router-dom';


// const mapPersonMethodsToProps = (swapiService) => {
//   return {
//     getData: swapiService.getAllPeople
//   };
// };


const mapMethodsToProps = (category) => {
  return (swapiService) => {
    return {
      getData: page => {
        return swapiService.getObjects(category, page)
      }
    }
  };
};

const createList = (methodsToProps) => {
  return compose(
          withRouter,
          withListNav({breadcrumbs: true}),
          withSwapiService(methodsToProps),
          withData,
        )(ItemList);
}



export const PlanetList = createList(mapMethodsToProps('planets'))
export const StarshipList = createList(mapMethodsToProps('starships'))
export const FilmsList = createList(mapMethodsToProps('films'))
export const SpeciesList = createList(mapMethodsToProps('species'))
export const VehiclesList = createList(mapMethodsToProps('vehicles'))
export const CharactersList = createList(mapMethodsToProps('people'))