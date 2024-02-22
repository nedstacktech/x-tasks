import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ChakraProvider} from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      100: "rgb(98, 52, 184)",
      // ...
      900: "#1a202c",
      "bg": "linear-gradient(180deg,#7430a0 -59.43%,#5036cc)"
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />

    </ChakraProvider>
  </React.StrictMode>,
)
