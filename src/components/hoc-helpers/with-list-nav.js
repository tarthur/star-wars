import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import Pagination from '../pagination'
import Breadcrumbs from '../breadcrumbs'



const withListNav = ({breadcrumbs}) => (View) => {
  class withListNav extends Component {
    state = {
      itemId: this.props.match.params.id,
      count: null
    }
  
    onPaginationSelected = (itemId) => {
      this.setState({
        itemId
      })
    }
  
    componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevState.itemId !== this.props.match.params.id) {
        this.setState({
          itemId: this.props.match.params.id
        })
      }
    }
  
    getCount = count => {
      if (this.state.count === null) {
        this.setState({
          count
        })
      }
    }
  
    onPaginationSelected = ({selected}) => {
      this.setState({
        itemId: selected
      })
    }
  
    render() {
      const { history, match } = this.props;
      const { id } = match.params;
  
    
      return (
        <div>  
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            {breadcrumbs && <Breadcrumbs />}
            
            {this.state.count === null ? null :
              <Pagination count={this.state.count} pageSize="10" current={1} onPageChanged={this.onPaginationSelected} catalog={this.props.catalog} />
            } 
          </div>

          <View {...this.props} pageDat={this.state.itemId} getCount={this.getCount} />
        </div>
      )
    }
  };

  withListNav.displayName = `withListNav(${View.displayName || View.name}`;
  return withListNav;
};

export default withListNav;
