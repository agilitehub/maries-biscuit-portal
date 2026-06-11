import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../../context/ThemeContext'

const STAR_PLACEMENTS: readonly string[] = [
  'absolute top-[0%] left-[12%] w-0.5 h-0.5 rounded-full bg-white shadow-[0_0_2px_1px_rgba(255,255,255,0.7)] scale-50',
  'absolute top-[37%] left-[24%] w-0.5 h-0.5 rounded-full bg-white shadow-[0_0_2px_1px_rgba(255,255,255,0.7)] scale-[0.65]',
  'absolute top-[74%] left-[8%] w-0.5 h-0.5 rounded-full bg-white shadow-[0_0_2px_1px_rgba(255,255,255,0.7)] scale-80',
  'absolute top-[11%] left-[40%] w-0.5 h-0.5 rounded-full bg-white shadow-[0_0_2px_1px_rgba(255,255,255,0.7)] scale-50',
  'absolute top-[48%] left-[55%] w-0.5 h-0.5 rounded-full bg-white shadow-[0_0_2px_1px_rgba(255,255,255,0.7)] scale-[0.65]',
  'absolute top-[85%] left-[70%] w-0.5 h-0.5 rounded-full bg-white shadow-[0_0_2px_1px_rgba(255,255,255,0.7)] scale-80',
  'absolute top-[22%] left-[15%] w-0.5 h-0.5 rounded-full bg-white shadow-[0_0_2px_1px_rgba(255,255,255,0.7)] scale-50',
  'absolute top-[59%] left-[88%] w-0.5 h-0.5 rounded-full bg-white shadow-[0_0_2px_1px_rgba(255,255,255,0.7)] scale-[0.65]',
  'absolute top-[96%] left-[33%] w-0.5 h-0.5 rounded-full bg-white shadow-[0_0_2px_1px_rgba(255,255,255,0.7)] scale-80',
  'absolute top-[33%] left-[60%] w-0.5 h-0.5 rounded-full bg-white shadow-[0_0_2px_1px_rgba(255,255,255,0.7)] scale-50',
  'absolute top-[70%] left-[5%] w-0.5 h-0.5 rounded-full bg-white shadow-[0_0_2px_1px_rgba(255,255,255,0.7)] scale-[0.65]',
  'absolute top-[7%] left-[45%] w-0.5 h-0.5 rounded-full bg-white shadow-[0_0_2px_1px_rgba(255,255,255,0.7)] scale-80'
]

export type ThemeToggleProps = {
  className?: string
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps): React.ReactElement {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <button
      type='button'
      onClick={toggleDarkMode}
      className={`relative flex h-8 w-16 items-center rounded-full border p-1 shadow-md transition-colors duration-300 ${
        darkMode
          ? 'justify-end border-botanical-gold/50 bg-botanical-teal'
          : 'justify-start border-[#4d8268]/60 bg-gradient-to-r from-[#5a9478] to-[#8ec0a8]'
      } ${className}`}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className='sr-only'>{darkMode ? 'Switch to light mode' : 'Switch to dark mode'}</span>

      <div className='absolute inset-0 overflow-hidden rounded-full'>
        <div
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${darkMode ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-botanical-teal to-botanical-plum'>
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${darkMode ? 'opacity-100' : 'opacity-0'}`}
            >
              {STAR_PLACEMENTS.map((starClassName, i) => (
                <div key={i} className={starClassName} aria-hidden />
              ))}
            </div>
          </div>
        </div>

        <div
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${darkMode ? 'translate-x-full' : 'translate-x-0'}`}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-[#528a6e] via-[#6fa089] to-[#9cc4b0]' />
          <div className={`absolute inset-0 transition-opacity duration-500 ${darkMode ? 'opacity-0' : 'opacity-55'}`}>
            <div className='absolute left-2 top-1 h-2 w-4 rounded-full bg-white/75' />
            <div className='absolute right-3 top-3 h-1.5 w-3 rounded-full bg-white/65' />
          </div>
        </div>
      </div>

      <div
        className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full shadow-md transition-all duration-300 ${
          darkMode ? 'bg-marie-gold' : 'border border-[#4d8268]/45 bg-white shadow-sm'
        }`}
      >
        <FontAwesomeIcon
          icon={faSun}
          className={`absolute text-sm text-marie-green-forest transition-opacity duration-300 ${darkMode ? 'opacity-0' : 'opacity-100'}`}
          aria-hidden
        />
        <FontAwesomeIcon
          icon={faMoon}
          className={`absolute text-sm text-marie-green-deep transition-opacity duration-300 ${darkMode ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden
        />
      </div>
    </button>
  )
}
