import {rxEventBus, RxEvent} from './rx_event_bus.es6';

class Other {

  doPost() {
    // イベントのPOST
    rxEventBus.post(new RxEvent('someKey', 'someValue'));
  }

}

export default Other;
