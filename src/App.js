import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import itemReducer from './utilities/itemReducer';
import thunk from 'redux-thunk';
import './App.css';
import CardList from './components/CardList'
import Header from './components/Header';
import NewItem from './components/NewItem';
import EditCard from './components/EditCard';

const rootReducer = combineReducers({itemReducer})
const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  

  return (
    <Router>
      <Provider store = {store}>
       <Header />
       <Routes>
         <Route path="/" element = {<CardList />} />
         <Route path="/add" element={<NewItem />} />
         <Route path="/edit" element={<EditCard />} />
       </Routes>

    </Provider>
    </Router>
  );
}

export default App;
