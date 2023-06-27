import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Suspense fallback={null}>
        <App />
        <div className='dot' />
      </Suspense>
    </ChakraProvider>
  </React.StrictMode>
)
