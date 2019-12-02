import React from 'react';
import { withRouter } from 'react-router-dom';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';
import { compose } from '../hoc-helpers';
import DetailsBox from './details-box';


const renderItemsDetails = (part) => {
  switch(part) {
    case 'films' :
        return item => (
          <ItemDetails item={item}>
            <Record field="created" label="Date Created" />
            <Record field="director" label="Director" />
            <Record field="producer" label="Producer(s)" />
            <Record field="openingCrawl" label="Opening Crawl" />
          </ItemDetails>
        );
    case 'species' : 
      return item => (
        <ItemDetails item={item}>
          <Record field="classification" label="Classification" />
          <Record field="designation" label="Designation" />
          <Record field="language" label="Language" />
          <Record field="averageLifespan" label="Avg Lifespan" />
          <Record field="averageHeight" label="Avg Height" />
          <Record field="hairColors" label="Hair Color(s)" />
          <Record field="skinColors" label="Skin Color(s)" />
          <Record field="eyeColors" label="Eye Color(s)" />
        </ItemDetails>
      );
    case 'starships' : 
      return item => (
        <ItemDetails item={item}>
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
      );
    case 'vehicles' : 
      return item => (
        <ItemDetails item={item}>
          <Record field="model" label="Model" />
          <Record field="manufacturer" label="Manufacturer" />
          <Record field="cls" label="Class" />
          <Record field="creditsCost" label="Cost" />
          <Record field="speed" label="Speed" />
          <Record field="length" label="Length" />
          <Record field="cargoCapacity" label="Cargo Capacity" />
          <Record field="crew" label="Mimimum Crew" />
          <Record field="passengers" label="Passengers" />
        </ItemDetails>
      );
    case 'planets' : 
      return item => (
        <ItemDetails item={item}>
          <Record field="population" label="Population" />
          <Record field="rotationReriod" label="Rotation Period" />
          <Record field="orbitalPeriod" label="Orbital Period" />
          <Record field="diameter" label="Diameter" />
          <Record field="gravity" label="Gravity" />
          <Record field="terrain" label="Terrain" />
          <Record field="surfaceWater" label="Surface Water" />
          <Record field="climate" label="Climate" />
        </ItemDetails>
      );
    case 'people' :
      return item => (
        <ItemDetails item={item}>
          <Record field="birthYear" label="Birth Year" />
          <Record field="height" label="Height" />
          <Record field="mass" label="Mass" />
          <Record field="gender" label="Gender" />
          <Record field="hairColor" label="Hair Color" />
          <Record field="skinColor" label="Skin Color" />
        </ItemDetails>
      );
    default :
      return
  }
}

const detailsCreator = (category, items) => {
  const DetailsBoxWrap = (props) => {
    const { id } = props.match.params;

    return (
      <DetailsBox {...props} itemId={id} category={category} >
        {items}
      </DetailsBox>
    );
  };

  return DetailsBoxWrap
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getCategoryResource,
  }
};

const buildDetails = (name) => {
  return compose(
    withRouter,
    withSwapiService(mapMethodsToProps)
  )(detailsCreator(name, renderItemsDetails(name)));
}


export const FilmsDetail = buildDetails('films');
export const SpeciesDetail = buildDetails('species');
export const CharactersDetails = buildDetails('people');
export const StarshipDetails = buildDetails('starships');
export const VehiclesDetails = buildDetails('vehicles');
export const PlanetsDetails = buildDetails('planets');