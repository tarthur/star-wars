import React, { Component } from 'react';
import CatalogsList from '../catalogs-list/catalogs-list';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect} from 'react-router-dom'
import { StarshipList, PlanetList,  FilmsList,
  SpeciesList, VehiclesList, CharactersList,
} from '../lists/item-lists';
import { FilmsDetail, SpeciesDetail, CharactersDetails,
  StarshipDetails, VehiclesDetails,  PlanetsDetails
} from '../lists/item-details';
import { SwapiServiceProvider } from '../swapi-service-context';
import './app.scss';
import logo from '../../assets/images/logo.png'


export default class App extends Component {
  render() {
    const swapiService = new SwapiService();

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={swapiService} >
          <Router>
            <div className="stardb-app">
              <h3 className="logo">
                <Link to="/">
                  <img src={logo} className="img-fluid" />
                </Link>
              </h3>

              <Switch>
                <Route path="/" exact component={CatalogsList} />
                
                <Route path="/starships/page/:id" component={StarshipList} />
                <Route path="/films/page/:id" component={FilmsList} />
                <Route path="/planets/page/:id" component={PlanetList} />
                <Route path="/vehicles/page/:id" component={VehiclesList} />
                <Route path="/people/page/:id" component={CharactersList} />
                <Route path="/species/page/:id" component={SpeciesList} />

                <Route path="/films/:id" component={FilmsDetail} />
                <Route path="/species/:id" component={SpeciesDetail} />
                <Route path="/people/:id" component={CharactersDetails} />
                <Route path="/starships/:id" component={StarshipDetails} />
                <Route path="/vehicles/:id" component={VehiclesDetails} />
                <Route path="/planets/:id" component={PlanetsDetails} />

                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
            </div>
          </Router>
          
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}