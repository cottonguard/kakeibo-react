import {Dispatcher} from 'flux';
import {ReduceStore} from 'flux/utils';
// import Immutable from 'immutable';

const dispatcher = new Dispatcher();

class KakeiboStore extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return [];
  }

  reduce(state, action) {
    switch (action.type) {
      case 'addPayment':
        state.push({
          product: action.props.product,
          price: action.props.price
        });
        return state;

      default:
        return state;
    }
  }
}

const actions = {
  addPayment(props) {
    dispatcher.dispatch({
      type: 'addPayment',
      props
    });
  }
}

export { actions };
