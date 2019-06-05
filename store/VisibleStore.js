import { observable, action } from 'mobx';

export default class VisibleStore {
  @observable isVisible = true;

  @action setVisible = (isVisible) => {
    this.isVisible = isVisible;
  }
}
