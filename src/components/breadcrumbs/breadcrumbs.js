import React, { Component } from 'react';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

import {Link} from 'react-router-dom';

import './breadcrumbs.css';



const userNamesById = { "1": "John", "2": "Mike" };
const DynamicUserBreadcrumb = ({ match }) => (
  <span>{userNamesById[match.params.userId]}</span>
);

// const routes = [{ path: "/users/:userId", breadcrumb: DynamicUserBreadcrumb }];
    
const routes = [
  // { path: '/users/:userId', breadcrumb: DynamicUserBreadcrumb },
  { path: '/planets/page/:userId', breadcrumb: 'Planets' },
  { path: '/planets/', breadcrumb: null  },
  { path: '/planets/page', breadcrumb: null  },
  { path: '/starships/page/:userId', breadcrumb: 'Starships' },
  { path: '/starships/', breadcrumb: null  },
  { path: '/starships/page', breadcrumb: null  },
];

// map & render your breadcrumb components however you want.
const Breadcrumbs = withBreadcrumbs(routes)(({ breadcrumbs }) => (
  <div className="breadcrumbs">
    {breadcrumbs.map(({ match, breadcrumb }, index) => (
      <div className="bc" key={match.url} style={{display: 'inline-block'}}>
        <Link to={match.url || ""}>{breadcrumb}</Link>
        {index < breadcrumbs.length - 1 && " / "}
      </div>
    ))}
  </div>
));


export default Breadcrumbs;