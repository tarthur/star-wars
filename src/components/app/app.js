import React, { Component } from 'react';

import Header from '../header';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import { 
  StarshipList, 
  PlanetList, 
  FilmsList,
  SpeciesList,
  VehiclesList,
  CharactersList, } from '../sw-components';

import {
  StarshipsPage,
  // PeoplePage,
} from '../pages';

import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

import {BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect} from 'react-router-dom';
import StarshipDetails from '../sw-components/starship-details';
import CharactersDetails from '../sw-components/characters-details';
import FilmsDetails from '../sw-components/films-details';
import SpeciesDetails from '../sw-components/species-details';
import VehiclesDetails from '../sw-components/vehicles-details';



export default class App extends Component {

  render() {
    const swapiService = new SwapiService();

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={swapiService} >
          <Router>
            <div className="stardb-app">
              <h3 className="logo">
                <Link to="/">StarDB</Link>
              </h3>

              <Switch>
                <Route path="/" exact component={Header} />
                <Route path="/starships/page/:id" render={() => {
                  return <StarshipList catalog="starships" />
                }} />
                <Route path="/planets/page/:id" render={() => {
                  return <PlanetList catalog="planets" />
                }} />
                <Route path="/films/page/:id" render={() => {
                  return <FilmsList catalog="films" />
                }} />
                <Route path="/species/page/:id" render={() => {
                  return <SpeciesList catalog="species" />
                }} />
                <Route path="/vehicles/page/:id" render={() => {
                  return <VehiclesList catalog="vehicles" />
                }} />
                <Route path="/people/page/:id" render={() => {
                  return <CharactersList catalog="people" />
                }} />
                <Route path="/people/:id"
                       render={({ match }) => {
                         const { id } = match.params;
                         
                         return <CharactersDetails itemId={id} category="people" />
                       }}/>
                <Route path="/films/:id"
                      render={({ match }) => {
                        const { id } = match.params;
                        
                        return <FilmsDetails itemId={id} category="films" />
                      }}/>
                <Route path="/species/:id"
                      render={({ match }) => {
                        const { id } = match.params;
                        
                        return <SpeciesDetails itemId={id} category="species" />
                      }}/>
                <Route path="/starships/:id"
                        render={({ match }) => {
                          const { id } = match.params;
                          
                          return <StarshipDetails itemId={id} category="starships" />
                        }}/>
                <Route path="/vehicles/:id"
                        render={({ match }) => {
                          const { id } = match.params;
                          
                          return <VehiclesDetails itemId={id} category="vehicles" />
                        }}/>

                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
              
            </div>
          </Router>
          
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
