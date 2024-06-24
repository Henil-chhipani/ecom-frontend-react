import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
