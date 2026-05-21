import React, { createContext, useContext, useEffect, useState, type PropsWithChildren } from 'react'

export type ThemeContextValue = {
  darkMode: boolean
  toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const OVERRIDE_KEY = 'themeUserOverride'

function readUserOverride(): 'light' | 'dark' | null {
  try {
    const choice = localStorage.getItem(OVERRIDE_KEY)
    if (choice === 'light' || choice === 'dark') return choice
    const legacy = localStorage.getItem('theme')
    if (legacy === 'light' || legacy === 'dark') {
      localStorage.setItem(OVERRIDE_KEY, legacy)
      localStorage.removeItem('theme')
      return legacy
    }
  } catch {}
  return null
}

function systemPrefersDark(): boolean {
  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches === true
}

function computeDarkMode(): boolean {
  const override = readUserOverride()
  if (override === 'dark') return true
  if (override === 'light') return false
  return systemPrefersDark()
}

export function ThemeProvider({ children }: PropsWithChildren): React.ReactElement {
  const [darkMode, setDarkMode] = useState(() => (typeof window === 'undefined' ? false : computeDarkMode()))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onSystemChange = (): void => {
      if (readUserOverride() == null) {
        setDarkMode(mq.matches)
      }
    }
    mq.addEventListener('change', onSystemChange)
    return () => mq.removeEventListener('change', onSystemChange)
  }, [])

  const toggleDarkMode = (): void => {
    setDarkMode((prev) => {
      const next = !prev
      try {
        localStorage.setItem(OVERRIDE_KEY, next ? 'dark' : 'light')
      } catch {}
      return next
    })
  }

  return <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
