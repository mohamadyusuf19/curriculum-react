import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';
import Routes from './routes';

const store = createStore(reducers, {}, applyMiddleware(thunk))

class App extends Component {
  
  render() { 
    return ( 
      <Provider store={store}>
        <Routes/>
      </Provider>
    )
  }
}
 
export default App;