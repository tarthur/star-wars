import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
  return class extends Component {

    state = {
      data: null,
      loading: true,
      error: false
    };

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.pageDat !== prevProps.pageDat) {
        // alert(8888999)
        this.update();
      }
    }

    componentDidMount() {
      this.update();
    }

    update() {
      this.setState( {
        loading: true,
        error: false
      });

      // alert(this.props.pageDat)
      this.props.getData(this.props.pageDat)
        .then((data) => {
          this.setState({
            data,
            loading: false
          });
        })
        .catch(() => {
          this.setState({
            error: true,
            loading: false
          });
        });
    }


    render() {
      const { data, loading, error } = this.state;

      if (loading) {
        return (
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Spinner />
          </div>
        )
      }

      // if (error) {
      //   return <ErrorIndicator />;
      // }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
