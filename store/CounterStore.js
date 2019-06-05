import { observable, action } from 'mobx';

export default class CounterStore {
  @observable
  number = 0;

  @action
  increase = (number) => {
    this.number += number;
  }

  @action
  decrease = (number) => {
    this.number -= number;
  }
}
