import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class TarifLine extends Component {
  render() {
    const discount = this.props.maxMonthCost * (+this.props.tarif.pay_period) - (+this.props.tarif.price)
    return (
      <Fragment>
        <div className="tarif">
          <div className="separator"></div>
          <Link to={this.props.tarif.link}>
            <div className="arrow">></div>
            <p className="tarif__header">
              {this.props.tarif.title}
            </p>
            <div className="underline"></div>
            <p className="rate__price tarif__price">
              {this.props.tarif.price / this.props.tarif.pay_period} &#8381;/мес
              </p>
            <p className="rate__info">
              разовый платёж - {this.props.tarif.price} &#8381;
          </p>
            {discount ? <p className="rate__info tarif__discount">
                            cкидка - {discount} &#8381;
                        </p>
              : ''}

          </Link>
        </div>
      </Fragment>
    );
  }
}
