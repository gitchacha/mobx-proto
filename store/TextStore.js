import { observable, action } from 'mobx';

export default class TextStore {
  @observable
  text = null;

  @action
  setText = (text) => {
    console.info('text param :: ', text);
    this.text = text;
  }
}
