import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // It might be './src/App' or './App' depending on where App.tsx is.

// Since your files seem to be in the root, it's likely just './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
