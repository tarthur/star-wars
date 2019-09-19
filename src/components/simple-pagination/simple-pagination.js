import React, {Component} from 'react';
import style from './simple-pagination.module.scss'



class SimplePagination extends Component {
  state = {
    num1: 0,
    num2: 0,
    part: this.props.part,
  }

  componentDidMount() {
    this.setState({
      num1: 0,
      num2: this.props.part
    })
  }

  onClickArrow = action => {
    this.setState(state => {
      let num1, num2;

      if (action === 'next') {
        num1 = this.state.num1 + state.part;
        num2 = this.state.num2 + state.part;
      } else if (action === 'prev') {
        num1 = this.state.num1 - state.part;
        num2 = this.state.num2 - state.part;
      }
      
      this.props.getInterval([num1, num2]);

      return {num1, num2}
    })
  }

  getMain = () => {
    const {num1, num2} = this.state;
    const {length} = this.props;

    return (
      <>
        {num1 === 0 && <div className={style.btnText}>Next</div>}
        {num1 > 0 && <div className={style.btn} onClick={() => this.onClickArrow('prev')}>&laquo;</div>}
        {num2 < length && <div className={style.btn} onClick={() => this.onClickArrow('next')}>&raquo;</div>}
        {num2 >= length && <div className={style.btnText}>Prev</div>}
      </>
    )
  }

  render() {
    if (this.props.part >= this.props.length) {
      return <div></div>
    }
    
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