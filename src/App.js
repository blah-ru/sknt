import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import FastClone from 'fastest-clone';
import 'App.css';
import Screen1 from 'components/screen1';
import Screen2 from 'components/screen2';
import Screen3 from 'components/screen3';

class App extends Component {

  constructor(props) {
    super(props);

    let tarifs = FastClone.cloneArray(window.dataRate.tarifs);

    //Откуда бетурся данные которых нет во входящем JSON не понятно,
    //для тестового задания не вижу смысла выяснять,
    //добавлю тут
    tarifs[0].speed = 50;

    tarifs[1].speed = 100;
    tarifs[1].speedColor = 'bg-blue';
    tarifs[1].info = `ТВ пакет "Социальный ТВ"
    Антивирус Agnitum Outpost`;


    tarifs[2].speed = 200;
    tarifs[2].speedColor = 'bg-orange';
    tarifs[2].info = `ТВ пакет "Социальный ТВ"
    Антивирус Agnitum Outpost
    Доменное имя в зоне sknt.ru`;

    tarifs[3].speed = 100;
    tarifs[3].speedColor = 'bg-blue';

    tarifs[4].speed = 200;
    tarifs[4].speedColor = 'bg-orange';

    //Найти мин-макс цены по тарифу
    tarifs.forEach(rate => {
      rate.min = 9999;
      rate.max = 0;

      rate.tarifs.forEach(duration => {
        rate.min = Math.min(rate.min, duration.price / (+duration.pay_period))
        rate.max = Math.max(rate.max, duration.price / (+duration.pay_period))
      });
    });

    //Задать id и ссылки
    this.indexID = {}; //Для определения тарифа по периоду
    let id = 0;
    tarifs.forEach(rate => {
      rate.rate_id = id++;
      rate.link = '/tarif/' + rate.rate_id

      rate.tarifs.forEach( tarif => {
        tarif.link = '/choice/' + tarif.ID
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
