import React from 'react';
import { AppContainer } from './navigator';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import logger from 'redux-logger'
import { listReducer } from './reducers/listIdeaReducer';
import { watcherSaga } from './sagas/index';

export default class App extends React.Component {

  render() {
    const sagaMiddleware=createSagaMiddleware();
    let store = createStore(listReducer,applyMiddleware(sagaMiddleware,logger));
    sagaMiddleware.run(watcherSaga)

    return (
      <Provider store={ store }>
        <AppContainer />
      </Provider>
    )
  }
}

