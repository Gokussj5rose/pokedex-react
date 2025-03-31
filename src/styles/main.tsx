import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from '../../Router.tsx' 
import '../../src/styles/App.tsx'
import '../components/Home/index.tsx'
import '../../src/styles/main.tsx'
import GlobalStyles from './GlobalStyles.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles/>
    <AppRouter />
  </React.StrictMode>,
)
