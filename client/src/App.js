import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import MyLayout from './components/MyLayout/MyLayout';
import MyRouter from './components/MyRouter/MyRouter';

function App() {
  return (
    <Router>
      <MyLayout>
        <MyRouter/>
      </MyLayout>
    </Router>
  );
}

export default App;
