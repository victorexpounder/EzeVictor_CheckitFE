'use client'
import { Provider } from 'react-redux';
import {store} from './Redux/store'
import {persistor} from './Redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import { ReactNode } from 'react';

interface ReduxProviderProps {
    children: ReactNode;
  }

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return(
  <Provider store={store}> 
    <PersistGate loading={null} persistor={persistor}> {children}</PersistGate>  
   </Provider>
  )
}