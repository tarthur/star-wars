import React from 'react';
import ItemList from '../item-list/item-list';
import {
  withData,
  withSwapiService,
  withListNav,
  compose 
} from '../hoc-helpers';
import { withRouter } from 'react-router-dom';


const mapMethodsToProps = (category) => {
  return (swapiService) => {
    return {
      getData: page => {
        return swapiService.getObjects(category, page)
      }
    }
  };
};

const setCatalog = catalog => View => {
  return props => {
    return <View  {...props} catalog={catalog} />
  }
}

const createList = (methodsToProps, catalog) => {
  return (
    compose(
      setCatalog(catalog),
      withRouter,
      withListNav({breadcrumbs: false}),
      withSwapiService(methodsToProps),
      withData,
    )(ItemList)
  )
}

export const PlanetList = createList(mapMethodsToProps('planets'), 'planets')
export const StarshipList = createList(mapMethodsToProps('starships'), 'starships')
export const FilmsList = createList(mapMethodsToProps('films'), 'films')
export const SpeciesList = createList(mapMethodsToProps('species'), 'species')
export const VehiclesList = createList(mapMethodsToProps('vehicles'), 'vehicles')
export const CharactersList = createList(mapMethodsToProps('people'), 'people')