import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

const OVERRIDE_KEY = 'themeUserOverride'

function readUserOverride() {
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

function systemPrefersDark() {
  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches === true
}

function computeDarkMode() {
  const override = readUserOverride()
  if (override === 'dark') return true
  if (override === 'light') return false
  return systemPrefersDark()
}

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => (typeof window === 'undefined' ? false : computeDarkMode()))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onSystemChange = () => {
      if (readUserOverride() == null) {
        setDarkMode(mq.matches)
      }
    }
    mq.addEventListener('change', onSystemChange)
    return () => mq.removeEventListener('change', onSystemChange)
  }, [])

  const toggleDarkMode = () => {
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

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export default ThemeContext
