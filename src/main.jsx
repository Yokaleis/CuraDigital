import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import { FiltersProvider } from './context/filtersContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
  </FiltersProvider>
  
)
