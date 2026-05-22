import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { AUTH_BASE_PATH } from '../../routes'
import { useAuth } from '../../context/AuthContext'

export default function GuestRoute(): React.ReactElement {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to={AUTH_BASE_PATH} replace />
  }

  return <Outlet />
}
