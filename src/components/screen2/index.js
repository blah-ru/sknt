import React, { Component, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import TarifLine from 'components/screen2/tarifLines';

class Screen2 extends Component {
  render() {

    const rate_id = this.props.match.params.rate_id;
    const tarifs = this.props.tarifs[rate_id].tarifs;
    tarifs.sort((a, b) => {
                            if (a.ID > b.ID) {
                              return 1;
                            }
                            if (a.ID < b.ID) {
                              return -1;
                            }
                            return 0;
                          }); 
    const maxMonthCost = + tarifs[0].price;
    const lines = tarifs.map(tarif => <TarifLine tarif={tarif} key={tarif.ID} maxMonthCost={maxMonthCost}></TarifLine>)

    return (
      <Fragment>
        <Link to='/'>
          <div className="arrow_back"> &lt; </div>
          <p className="tarif-box__header">
            Тариф "{this.props.tarifs[rate_id].title}"
          </p>
        </Link>
        <div className="tarif-box">
          {lines}
        </div>
      </Fragment>
    );
  }
}
export default withRouter(Screen2);