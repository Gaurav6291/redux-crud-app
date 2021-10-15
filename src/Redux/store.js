import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/contactReducer/'

  const store = createStore(rootReducer, composeWithDevTools());

  export default store;