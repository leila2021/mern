import {createStore, applyMiddleware ,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
  const devtool=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const stor =createStore(rootReducer,
    compose(
        applyMiddleware(thunk),devtool
    )



)
 export default stor