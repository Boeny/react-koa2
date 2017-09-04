import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'

const SRC = require('config').SRC
const DevTools = require(`${SRC}components/DevTools`)

const enhancer = compose(
  applyMiddleware(setPageActionCreator, searchActionCreator),
  DevTools.instrument()// DevTools with the monitors
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  // Hot reload reducers (webpack/server config)
  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers')/*.default if you use Babel 6+ */)
    )
  }

  return store;
}