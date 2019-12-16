import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Screen3 extends Component {
  timestampToDate(ts) {
    var d = new Date( ts*1000 );
      return ('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth() + 1)).slice(-2) + '.' + d.getFullYear();
    }
  render() {
    const tarif = this.props.tarifs[ this.props.indexID[this.props.match.params.ID] ];
    const choice = tarif.tarifs.find(currentValue => currentValue.ID == this.props.match.params.ID );
    const new_payday = this.timestampToDate(Number(choice.new_payday.split('+')[0]));
    
    return (
      <div className="choice-box">
        <Link to={tarif.link}>
          <div className="arrow_back"> &lt; </div>
          <p className="tarif-box__header choice-box__header">
            Выбор тарифа
          </p>
        </Link>
        <div className="separator"></div>
        <div className="choice">
          <p className="tarif__header">
            Тариф "{tarif.title}"
          </p>
          <div className="underline"></div>
          <p className="rate__price tarif__price mb0">
            Период оплаты - {choice.pay_period} месяцев
              </p>
          <p className="rate__price tarif__price mt0">
            {choice.price / choice.pay_period} &#8381;/мес
              </p>
          <p className="rate__info mb0">
            разовый платёж - {choice.price} &#8381;
          </p>
          <p className="rate__info mt0">
            со счета спишется - {choice.price} &#8381;
          </p>
          <p className="rate__info choice__info-light mb0">
            вступит в силу - сегодня
          </p>
          <p className="rate__info choice__info-light mt0">
            активно до - {new_payday}
          </p>

          <button className="choice__btn">Выбрать</button>

        </div>
      </div>
    );
  }
}

export default withRouter(Screen3);