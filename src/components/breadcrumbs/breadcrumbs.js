import React, { Component } from 'react';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import {Link} from 'react-router-dom';
import style from './breadcrumbs.scss';



class BreadcrumbsClass extends Component {

  state = {
    routes: [
      // { path: '/users/:userId', breadcrumb: DynamicUserBreadcrumb },
      { path: '/planets/page/:userId', breadcrumb: 'Planets' },
      { path: '/planets/', breadcrumb: null  },
      { path: '/planets/page', breadcrumb: null  },
      { path: '/starships/page/:userId', breadcrumb: 'Starships' },
      { path: '/starships/', breadcrumb: null  },
      { path: '/starships/page', breadcrumb: null  },
      // { path: '/species/', breadcrumb: null  },
      // { path: '/species/:userId', breadcrumb: 'ttt' },
      { path: '/species/page/:userId', breadcrumb: 'Species' },
      { path: '/species/page', breadcrumb: null  },
      { path: '/species/', breadcrumb: null  },
      { path: '/species/:userId', breadcrumb: 'Species' },
    ]
  }

  componentDidMount() {
    
  }

  render() {
    return <BreadcrumbsBox routes={this.state.routes} />
  }
}

const userNamesById = { "1": "John", "2": "Mike" };
const DynamicUserBreadcrumb = ({ match }) => (
  <span>{userNamesById[match.params.userId]}</span>
);



const BreadcrumbsBox = props => {
  const Breadcrumbs = withBreadcrumbs(props.routes)(({ breadcrumbs }) => (
    <div className={style.breadcrumbs}>
      {breadcrumbs.map(({ match, breadcrumb }, index) => {
        console.log('match.url->>>>')
        console.log(match.url)

        let to = match.url || ""
        
        // if (to === '/films') {
        //   to =  '/films/page/1'
        // }

        return (
          <div className="bc" key={match.url} style={{display: 'inline-block'}}>
            <Link to={to}>{breadcrumb}</Link>
            {index < breadcrumbs.length - 1 && " / "}
          </div>
        )
      })}
    </div>
  ));

  return <Breadcrumbs />; 
}


export default BreadcrumbsClass;