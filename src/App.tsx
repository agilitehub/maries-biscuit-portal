import React from 'react'
import { Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { ConfigProvider, theme as antdTheme } from 'antd'

import LoginPage from './modules/login/login'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'
import GuestRoute from './core/layout/GuestRoute'
import RequireAuth from './core/layout/RequireAuth'
import AppShell from './core/layout/AppShell'
import { authenticatedChildRoutes, AUTH_BASE_PATH, getSidebarNavItems } from './routes'

const sidebarNavItems = getSidebarNavItems()

function AppRoutes(): React.ReactElement {
  return (
    <Routes>
      <Route element={<GuestRoute />}>
        <Route path='/' element={<LoginPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Route>

      <Route element={<RequireAuth />}>
        <Route path={AUTH_BASE_PATH} element={<AppShell sidebarNavItems={sidebarNavItems} />}>
          {authenticatedChildRoutes()}
        </Route>
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
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
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
