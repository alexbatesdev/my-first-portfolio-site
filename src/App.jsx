import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Template from './template';
import Home from './index'
import { ThemeProvider } from '@mui/material'
import { theme } from './utils/themes';

function App() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/App" element={<Template />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
