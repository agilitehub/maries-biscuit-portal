import React, { createContext, useCallback, useContext, useMemo, useState, type PropsWithChildren } from 'react'

export type AuthContextValue = {
  isAuthenticated: boolean
  signIn: () => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: PropsWithChildren): React.ReactElement {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const signIn = useCallback(() => {
    setIsAuthenticated(true)
  }, [])

  const signOut = useCallback(() => {
    setIsAuthenticated(false)
  }, [])

  const value = useMemo(
    (): AuthContextValue => ({
      isAuthenticated,
      signIn,
      signOut
    }),
    [isAuthenticated, signIn, signOut]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return ctx
}
