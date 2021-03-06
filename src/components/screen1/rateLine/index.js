import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

export default class RateLine extends Component {
  render() {
    let free_options = '';
    if ("free_options" in this.props.rate ){
      free_options = this.props.rate.free_options.map(option => <Fragment> {option} <br /></Fragment>);
    };
   return (
      <Fragment>
        <div className="rate">
          <Link to={this.props.rate.linkRate}>
           <div className="arrow">></div>
           <p className="rate__header">
              Тариф "{this.props.rate.title}"
              </p>
            <div className="underline"></div>
            <p className={"rate__speed " + ('speedColor' in this.props.rate ? this.props.rate.speedColor : '') }>
              {this.props.rate.speed} Мбит/с
              </p>
            <p className="rate__price">
              {this.props.rate.min} - {this.props.rate.max} &#8381;/мес
              </p>
            <p className="rate__info">
              {free_options} 
              </p>
            <div className="underline"></div>
          </Link>
          <p>
            <a className="rate__link" href={this.props.rate.link} target="_blank">
              Узнать подробнее на сайте www.sknt.ru
                </a>
          </p>
          <div className="separator"></div>
        </div>
      </Fragment>
    );
  }
}
