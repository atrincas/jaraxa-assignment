import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AppRouter } from './lib/AppRouter.tsx'
import { CssBaseline } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <AppRouter />
  </React.StrictMode>
)
