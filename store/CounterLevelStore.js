import { observable, action } from 'mobx';

export default class CounterLevelStore {

  constructor(root) {
    this.root = root;
  }

  @action increase = (number) => {
    this.root.counterStore.number += number;
  }

  @action decrease = (number) => {
    this.root.counterStore.number -= number;
  }
}
