import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './Reducer/AllReducers'
import { loadState, saveState } from './Config/Storage';
const persistedState = loadState()


const store = createStore(allReducers, persistedState)
store.subscribe(() => {
  saveState({
    authToken: store.getState().authToken,
    authUser: store.getState().authUser,
    site: store.getState().site,

  })
})



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
