import { ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient } from '@apollo/client'
import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/Login';
import Services from './components/Services';
import About from './components/About';
import Signup from './components/Signup'
import Role from './components/Role';
import './App.css';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
   
  <Router> 
  <div className='hero'>
  <Nav></Nav>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/role' element={<Role/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/aboutme' element={<About/>} />
    <Route path='/services' element={<Services/>} />
    <Route render={() => <h1 className='display-2'>How did you get here?</h1>} />
  </Routes>
  </div>
  </Router>
  
  </ApolloProvider>
  );
}

export default App;
