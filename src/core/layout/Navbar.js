import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import ThemeToggle from '../components/ThemeToggle'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <header className='sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-md transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900/85'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4'>
        <button
          type='button'
          className='flex min-w-0 flex-1 items-center text-left outline-none ring-agilite-red focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 rounded-md'
          aria-label='React AI Boilerplate — return to login'
          onClick={() => navigate('/')}
        >
          <Logo showTitle title='React AI Boilerplate' sizePreset='toolbar' />
        </button>
        <ThemeToggle />
      </nav>
    </header>
  )
}

export default Navbar
