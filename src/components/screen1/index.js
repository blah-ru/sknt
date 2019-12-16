import React, { Component } from 'react';
import RateLine from 'components/screen1/rateLine';

export default class Screen1 extends Component {

  render() {

    const lines = this.props.tarifs.map(rate => <RateLine rate={rate} key={rate.rate_id}></RateLine>)

    return (<div className="rate-box">
        {lines}
    </div>
    );
  }
}
