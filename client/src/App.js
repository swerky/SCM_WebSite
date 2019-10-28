import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import MyLayout from './components/MyLayout/MyLayout';
import MyRouter from './components/MyRouter/MyRouter';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './utils/API/graphql';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <MyLayout>
          <MyRouter/>
        </MyLayout>
      </Router>
    </ApolloProvider>
  );
}

export default App;
