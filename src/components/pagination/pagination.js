import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactPaginate from 'react-paginate';


class Pagination extends React.Component {  
  onPageChange = ({selected}) => {
    const page = selected + 1;
    this.props.history.push(`/${this.props.catalog}/page/${page}`)
  }

  render() {
    const {count, pageSize} = this.props;
    const pagesCount = Math.ceil(count / pageSize);
    const { match: {params: {id}} } = this.props;
    const forcePage = (id * 1) - 1;
    const navSettings = {
      previousLabel: '<',
      nextLabel: '>',
      previousClassName: "page-item",
      previousLinkClassName: "page-link",
      nextClassName: "page-item",
      nextLinkClassName: "page-link",
    }
    const settings = {
      pageLinkClassName: "page-link",
      pageClassName: "page-item",
      containerClassName: "pagination",
      breakClassName: "page-item",
      breakLinkClassName: "page-link",
      pageCount: pagesCount,
      marginPagesDisplayed: 2,
      pageRangeDisplayed: 1,
      onPageChange: this.onPageChange,
      activeClassName: 'disabled',
      forcePage: forcePage,
      previousLabel: '',
      nextLabel: '',
    }

    return (
      <div className="paginate-container">
        {pagesCount > 1 && <ReactPaginate {...settings} {...navSettings} />}
        {pagesCount === 1 && <ReactPaginate {...settings} />}
      </div>
    )
    
  }
};

export default withRouter(Pagination);