import CounterStore from './CounterStore';
import CounterLevelStore from './CounterLevelStore';
import TextStore from './TextStore';
import VisibleStore from './VisibleStore';

export default class RootStore {
  constructor() {
      this.counterStore = new CounterStore();
      this.counterLevelStore = new CounterLevelStore(this);
      this.textStore = new TextStore();
      this.visibleStore = new VisibleStore();
  }
}
