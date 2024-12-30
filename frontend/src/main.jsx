import { StrictMode } from 'react'
import { Toaster } from 'sonner'
import { RouterProvider} from 'react-router-dom';
import { Router } from './provider/Router.jsx'
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider>
    <Provider store={store }>
      <Toaster position='top-right '  />
      <RouterProvider router={Router} />
    </Provider>
    </PrimeReactProvider>
    
  </StrictMode>,
)
