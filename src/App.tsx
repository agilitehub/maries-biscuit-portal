import React from 'react'
import { Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { ConfigProvider, theme as antdTheme } from 'antd'

import { ThemeProvider, useTheme } from './context/ThemeContext'
import SiteLayout from './core/layout/SiteLayout'
import { siteChildRoutes } from './routes'

function AppRoutes(): React.ReactElement {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        {siteChildRoutes()}
      </Route>
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

function ThemedProviders({ children }: { children: React.ReactNode }): React.ReactElement {
  const { darkMode } = useTheme()
  return (
    <ConfigProvider theme={{ algorithm: darkMode ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm }}>
      {children}
    </ConfigProvider>
  )
}

function AppInner(): React.ReactElement {
  return (
    <ThemedProviders>
      <Router>
        <AppRoutes />
      </Router>
    </ThemedProviders>
  )
}

function App(): React.ReactElement {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}

export default App
