import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import ThemeToggle from '../components/ThemeToggle'

export default function Navbar(): React.ReactElement {
  const navigate = useNavigate()

  return (
    <header className='sticky top-0 z-50 border-b border-border/80 bg-surface/90 backdrop-blur-md transition-colors duration-300'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4'>
        <button
          type='button'
          className='flex min-w-0 flex-1 items-center rounded-md text-left outline-none ring-agilite-red focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ring-offset'
          aria-label='React AI Boilerplate — return to login'
          onClick={() => {
            navigate('/')
          }}
        >
          <Logo showTitle title="Marie's Biscuit Portal" sizePreset='toolbar' />
        </button>
        <ThemeToggle />
      </nav>
    </header>
  )
}
