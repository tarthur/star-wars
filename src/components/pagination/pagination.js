import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import './pagination.scss';



class Pagination extends React.Component {
  
  onPageChange = ({selected}) => {
    const page = selected + 1;

    this.props.history.push(`/${this.props.catalog}/page/${page}`)
  }

  render() {
    const {count, pageSize} = this.props;
    const pagesCount = Math.ceil(count / pageSize);

    console.log('countcountcountcountcountcount')
    console.log(count)
    return (
      <div className="paginate-container">
        <ReactPaginate
          pageLinkClassName="page-link"
          pageClassName="page-item"
          containerClassName="pagination"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          // breakLabel={null}
          previousLabel={'<'}
          nextLabel={'>'}
          pageCount={pagesCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={1}
          onPageChange={this.onPageChange}
          activeClassName={'disabled'}
        />
      </div>
    );
  }
};

export default withRouter(Pagination);