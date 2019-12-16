import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import 'App.css';
import Screen1 from 'components/screen1';
import Screen2 from 'components/screen2';
import Screen3 from 'components/screen3';

class App extends Component {

  constructor(props) {
    super(props);

    let tarifs = window.dataRate.tarifs.slice();

    tarifs[1].speedColor = 'bg-blue';
    tarifs[2].speedColor = 'bg-orange';
    tarifs[3].speedColor = 'bg-blue';
    tarifs[4].speedColor = 'bg-orange';

    //Заполнить по тарифу:
    // - мин-макс цены 
    // - что включено
    // - Скорость
    // - id 
    // - ссылки
    this.indexID = {}; //Для определения тарифа по периоду
    let id = 0;
    tarifs.forEach(rate => {
      let tarifs = rate.tarifs.slice();
      
      // - мин-макс цены
      rate.min = rate.tarifs.reduce( (p, duration)=>{
        const currentPrice = duration.price / (+duration.pay_period)
        return (p < currentPrice ? p : currentPrice);
      });
      rate.max = rate.tarifs.reduce( (p, duration)=>{
        const currentPrice = duration.price / (+duration.pay_period)
        return (p > currentPrice ? p : currentPrice);
      });

      // - id 
      rate.rate_id = id++;
      // - ссылки
      rate.linkRate = '/tarif/' + rate.rate_id

      //Ссылки на периоды оплаты
      rate.tarifs.forEach(tarif => {
        // - ссылки
        tarif.linkTarif = '/choice/' + tarif.ID
        // - id 
        this.indexID[tarif.ID] = rate.rate_id;
      });
    });
    this.state = { tarifs };
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path='/' exact 
                  render={(props) => (
                      <Screen1 tarifs={this.state.tarifs} ></Screen1>
                  )} />
            <Route path='/tarif/:rate_id' 
              render={(props) => (
                <Screen2 tarifs={this.state.tarifs} ></Screen2>
              )} />
            <Route path='/choice/:ID' 
              render={(props) => (
                <Screen3 
                  tarifs={this.state.tarifs} 
                  indexID={this.indexID}
                ></Screen3>
              )} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
