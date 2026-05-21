import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../../context/ThemeContext'

const STAR_PLACEMENTS = [
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

const ThemeToggle = ({ className = '' }) => {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <button
      type='button'
      onClick={toggleDarkMode}
      className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-300 flex items-center shadow-md border ${
        darkMode ? 'bg-gray-800 justify-end border-agilite-red/50' : 'bg-agilite-red justify-start border-transparent'
      } ${className}`}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className='sr-only'>{darkMode ? 'Switch to light mode' : 'Switch to dark mode'}</span>

      <div className='absolute inset-0 rounded-full overflow-hidden'>
        <div
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${darkMode ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-gray-900 to-agilite-black'>
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
          <div className='absolute inset-0 bg-gradient-to-r from-agilite-red/20 to-red-100'></div>
          <div className={`absolute inset-0 transition-opacity duration-500 ${darkMode ? 'opacity-0' : 'opacity-30'}`}>
            <div className='absolute top-1 left-2 w-4 h-2 bg-white rounded-full'></div>
            <div className='absolute top-3 right-3 w-3 h-1.5 bg-white rounded-full'></div>
          </div>
        </div>
      </div>

      <div
        className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full shadow-md transition-all duration-300 ${
          darkMode ? 'bg-agilite-red' : 'bg-white'
        }`}
      >
        <FontAwesomeIcon
          icon={faSun}
          className={`absolute text-sm text-agilite-red transition-opacity duration-300 ${darkMode ? 'opacity-0' : 'opacity-100'}`}
          aria-hidden='true'
        />
        <FontAwesomeIcon
          icon={faMoon}
          className={`absolute text-sm text-white transition-opacity duration-300 ${darkMode ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden='true'
        />
      </div>
    </button>
  )
}

export default ThemeToggle
