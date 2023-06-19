import React from 'react';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import { Provider } from 'react-redux';
import { store } from './state';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <ProjectsPage />
      </div>
    </Provider>
  );
}

export default App;
