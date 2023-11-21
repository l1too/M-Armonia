import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import rootReducer from "../redux/reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: rootReducer });


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <Provider store={store}>

    <App />

    </Provider>
  </BrowserRouter>,
)
