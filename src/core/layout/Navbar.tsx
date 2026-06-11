import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import type { SiteNavItem } from '../../routes'
import Logo from '../components/Logo'
import ThemeToggle from '../components/ThemeToggle'

export type NavbarProps = {
  navItems: SiteNavItem[]
}

export default function Navbar({ navItems }: NavbarProps): React.ReactElement {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinkClass = ({ isActive }: { isActive: boolean }): string =>
    [
      'rounded-md px-3 py-2 text-sm font-medium transition',
      isActive
        ? 'bg-marie-gold-pale text-marie-green-deep dark:bg-botanical-gold/15 dark:text-botanical-gold-light'
        : 'text-muted hover:bg-overlay-hover hover:text-foreground'
    ].join(' ')

  return (
    <header className='no-print relative z-20 sticky top-0 border-b border-marie-gold-light/35 bg-white/70 backdrop-blur-md transition-colors duration-300 dark:border-botanical-gold/25 dark:bg-[#0c2d32]/80'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6 sm:py-3 lg:px-8' aria-label='Main'>
        <Link
          to='/'
          className='flex min-w-0 shrink-0 items-center rounded-md outline-none ring-marie-gold focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ring-offset'
          onClick={() => setMobileOpen(false)}
        >
          <Logo sizePreset='toolbar' />
        </Link>

        <div className='hidden items-center gap-1 md:flex'>
          {navItems.map((item) => (
            <NavLink key={item.key} to={item.path} end={item.path === '/'} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className='flex items-center gap-2'>
          <ThemeToggle />
          <button
            type='button'
            className='inline-flex h-10 w-10 items-center justify-center rounded-md text-muted transition hover:bg-overlay-hover focus-visible:outline focus-visible:ring-2 focus-visible:ring-marie-gold md:hidden'
            aria-expanded={mobileOpen}
            aria-controls='mobile-nav'
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} className='text-lg' aria-hidden />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div id='mobile-nav' className='border-t border-border bg-surface px-4 py-3 md:hidden'>
          <ul className='space-y-1'>
            {navItems.map((item) => (
              <li key={item.key}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    [
                      'flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition',
                      isActive
                        ? 'bg-marie-gold-pale text-marie-green-deep dark:bg-botanical-gold/15 dark:text-botanical-gold-light'
                        : 'text-muted hover:bg-overlay-hover hover:text-foreground'
                    ].join(' ')
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  <FontAwesomeIcon icon={item.icon} className='w-4 text-marie-gold-rich' aria-hidden />
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
