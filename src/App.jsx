import { useState } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import AuthRouter from './components/auth/router/AuthRouter'
import './App.css'
import FullScreenLoading from './components/loaders/FullScreenLoading'
import AlertMsg from './components/alertMsg/AlertMsg'



function App() {

  return (
    <HashRouter>

      <FullScreenLoading />

      <AlertMsg />

      <AuthRouter />

    </HashRouter>
  )
}

export default App
