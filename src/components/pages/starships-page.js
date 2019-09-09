import React from 'react';
import { withRouter } from 'react-router-dom';
import { PersonDetails, PersonList, StarshipList } from '../sw-components';
import Pagination from '../pagination'


class StarshipsPage extends React.Component {
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
        {this.state.count === null ? null :
           <Pagination count={this.state.count} pageSize="10" current={1} onPageChanged={this.onPaginationSelected} />
        }        
        <StarshipList pageDat={this.state.itemId} getCount={this.getCount}/>
      </div>
    )
  }
  
};

// StarshipList

export default withRouter(StarshipsPage);

// export default withPagination(StarshipsPage);
