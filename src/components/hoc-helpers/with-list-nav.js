import React, { Component } from 'react';
import Pagination from '../pagination'
import Breadcrumbs from '../breadcrumbs'
import style from './with-list-nav.module.scss'


const withListNav = ({breadcrumbs}) => (View) => {
  class withListNav extends Component {
    state = {
      itemId: this.props.match.params.id,
      count: null,
      pageSize: 10
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
          <div className={style.navBox}>
            {breadcrumbs && <Breadcrumbs />}
            {/* {((this.state.count !== null) && (this.state.count > this.state.pageSize)) && (
              <div className={style.pagination}>
                <Pagination count={this.state.count} pageSize={this.state.pageSize} current={1} onPageChanged={this.onPaginationSelected} catalog={this.props.catalog} />
              </div>
            )}  */}
            <div className={style.pagination}>
              <Pagination count={this.state.count} pageSize={this.state.pageSize} current={1} onPageChanged={this.onPaginationSelected} catalog={this.props.catalog} />
            </div>
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
