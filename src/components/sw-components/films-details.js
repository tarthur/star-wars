import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';
import RelatedDataBoxes from '../related-data-boxes'
import Breadcrumbs from '../breadcrumbs'
import {
  compose } from '../hoc-helpers';
import { withRouter } from 'react-router-dom';
import SomeContainer from './some-container'




const films = item => {
  return (
    <ItemDetails item={item} image={item.image}>
      <Record field="created" label="Date Created" />
      <Record field="director" label="Director" />
      <Record field="producer" label="Producer(s)" />
      <Record field="openingCrawl" label="Opening Crawl" />
    </ItemDetails>
  )
}

const species = item => {
  return (
    <ItemDetails item={item} image={item.image}>
      <Record field="classification" label="Classification" />
      <Record field="designation" label="Designation" />
      <Record field="language" label="Language" />
      <Record field="averageLifespan" label="Avg Lifespan" />
      <Record field="averageHeight" label="Avg Height" />
      <Record field="hairColors" label="Hair Color(s)" />
      <Record field="skinColors" label="Skin Color(s)" />
      <Record field="eyeColors" label="Eye Color(s)" />
    </ItemDetails>
  )
}

const starships = item => {
  return (
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
  )
}

const vehicles = item => {
  return (
    <ItemDetails item={item} image={item.image}>
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
  )
}

const planets = item => {
  return (
    <ItemDetails item={item} image={item.image}>
      <Record field="population" label="Population" />
      <Record field="rotationReriod" label="Rotation Period" />
      <Record field="orbitalPeriod" label="Orbital Period" />
      <Record field="diameter" label="Diameter" />
      <Record field="gravity" label="Gravity" />
      <Record field="terrain" label="Terrain" />
      <Record field="surfaceWater" label="Surface Water" />
      <Record field="climate" label="Climate" />
    </ItemDetails>
  )
}

const people = item => {
  return (
    <ItemDetails item={item} image={item.image}>
      <Record field="birthYear" label="Birth Year" />
      <Record field="height" label="Height" />
      <Record field="mass" label="Mass" />
      <Record field="gender" label="Gender" />
      <Record field="hairColor" label="Hair Color" />
      <Record field="skinColor" label="Skin Color" />
    </ItemDetails>
  )
}





const detailsCreator = (category, items) => {
  const FilmsDetails = (props) => {
    const { id } = props.match.params;

    return (
      <SomeContainer {...props} itemId={id} category={category} >
        {items}
      </SomeContainer>
    );
  };

  return FilmsDetails
}



const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getCategoryResource,
  }
};

export const FilmsDetail = compose(
  withRouter,
  withSwapiService(mapMethodsToProps)
)(detailsCreator('films', films));

export const SpeciesDetail = compose(
  withRouter,
  withSwapiService(mapMethodsToProps)
)(detailsCreator('species', species));


export const CharactersDetails = compose(
  withRouter,
  withSwapiService(mapMethodsToProps)
)(detailsCreator('people', people));


export const StarshipDetails = compose(
  withRouter,
  withSwapiService(mapMethodsToProps)
)(detailsCreator('starships', starships));


export const VehiclesDetails = compose(
  withRouter,
  withSwapiService(mapMethodsToProps)
)(detailsCreator('vehicles', vehicles));


export const PlanetsDetails = compose(
  withRouter,
  withSwapiService(mapMethodsToProps)
)(detailsCreator('planets', planets));

