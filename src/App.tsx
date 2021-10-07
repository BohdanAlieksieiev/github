import React from 'react';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import rootReducer from './store/rootReducer';
import { createStore } from 'redux';

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
