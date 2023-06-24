import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { JdAppView } from './views/jdAppView/jdAppView'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <JdAppView />
  </React.StrictMode>,
)
