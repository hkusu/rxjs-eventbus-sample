import {rxEventBus} from './rx_event_bus.es6';
import Other from './other.es6';

// イベントの購読
rxEventBus.subscribe('someKey', value => {
  console.log(value); // 'someValue' が出力される
});

const other = new Other().doPost();
