import React, {Component} from 'react';
import style from './simple-pagination.module.scss'



class SimplePagination extends Component {
  state = {
    page: 0,
    part: this.props.part * 1
  }

  prev = () => {
    this.setState(state => {
      const page = state.page - state.part;

      this.props.getInterval([page, this.state.page])

      return { page }
    })
    
  }

  next = () => {
    this.setState(state => {
      const page = state.page + state.part;

      this.props.getInterval([this.state.page, page])

      return { page }
    })
    
  }

  getMain = () => {
    const {page} = this.state;
    const {length} = this.props;

    return (
      <>
        {page === 0 && <div className={style.btnText}>Next</div>}
        {page > 0 && (
          <div className={style.btn} onClick={this.prev}>&laquo;</div>
        )}
        {page < length && (
          <div className={style.btn} onClick={this.next}>&raquo;</div>
        )}
        {page >= length && <div className={style.btnText}>Prev</div>}
      </>
    )
  }

  render() {
    return (
      <div>
        <ul className={style.simplePagination}>
          {this.getMain()}
        </ul>
      </div>
    );
  }
};

export default SimplePagination;