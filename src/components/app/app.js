import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';
import * as Lists from '../lists/item-lists';
import * as Details from '../lists/item-details';
import CatalogsList from '../catalogs-list/catalogs-list';
import ErrorBoundry from '../error-boundry';
import Logo from '../logo/logo';
import style from './app.module.scss';


export default class App extends Component {
  render() {
    const swapiService = new SwapiService();

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={swapiService} >
          <Router>
            <div className="stardb-app">
              <Logo classes={[style.logo]} />

              <Switch>
                <Route path="/" exact component={CatalogsList} />
                
                <Route path="/starships/page/:id" component={Lists.StarshipList} />
                <Route path="/films/page/:id" component={Lists.FilmsList} />
                <Route path="/planets/page/:id" component={Lists.PlanetList} />
                <Route path="/vehicles/page/:id" component={Lists.VehiclesList} />
                <Route path="/people/page/:id" component={Lists.CharactersList} />
                <Route path="/species/page/:id" component={Lists.SpeciesList} />

                <Route path="/films/:id" component={Details.FilmsDetail} />
                <Route path="/species/:id" component={Details.SpeciesDetail} />
                <Route path="/people/:id" component={Details.CharactersDetails} />
                <Route path="/starships/:id" component={Details.StarshipDetails} />
                <Route path="/vehicles/:id" component={Details.VehiclesDetails} />
                <Route path="/planets/:id" component={Details.PlanetsDetails} />

                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
            </div>
          </Router>
          
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}