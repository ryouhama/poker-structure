import React from 'react'
import ReactDOM from 'react-dom/client'
import { PublicRouter } from "~/router"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PublicRouter />
  </React.StrictMode>,
)
