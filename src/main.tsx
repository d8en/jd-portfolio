import React from 'react'
import ReactDOM from 'react-dom/client'
import { JdAppViewWrapper } from './views/jdAppView/jdAppViewWrapper'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <JdAppViewWrapper />
  </React.StrictMode>,
)
