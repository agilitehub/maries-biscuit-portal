import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCookieBite } from '@fortawesome/free-solid-svg-icons'

import { getSiteNavItems } from '../../routes'

export default function SiteFooter(): React.ReactElement {
  const navItems = getSiteNavItems().filter((item) => item.key !== 'home')
  const year = new Date().getFullYear()

  return (
    <footer className='no-print relative z-10 border-t border-marie-gold-light/35 bg-white/70 backdrop-blur-sm dark:border-botanical-gold/25 dark:bg-[#0c2d32]/75'>
      <div className='mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>
          <div>
            <div className='flex items-center gap-2.5'>
              <FontAwesomeIcon icon={faCookieBite} className='text-xl text-marie-gold-rich' aria-hidden />
              <span className='font-heading text-lg font-semibold text-foreground'>Marie&apos;s Biscuits</span>
            </div>
            <p className='mt-3 max-w-xs text-sm leading-relaxed text-muted'>
              Handcrafted biscuits baked in small batches with quality ingredients and a whole lot of love.
            </p>
          </div>

          <div>
            <h2 className='text-sm font-semibold uppercase tracking-wide text-foreground'>Explore</h2>
            <ul className='mt-4 space-y-2'>
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.path}
                    className='text-sm text-muted transition hover:text-marie-gold-rich focus-visible:outline focus-visible:ring-2 focus-visible:ring-marie-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ring-offset'
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className='text-sm font-semibold uppercase tracking-wide text-foreground'>Get in touch</h2>
            <p className='mt-4 text-sm text-muted'>
              Questions about orders, wholesale, or custom batches?
            </p>
            <Link
              to='/#contact'
              className='mt-3 inline-block text-sm font-medium text-marie-gold-rich transition hover:text-marie-green-deep focus-visible:outline focus-visible:ring-2 focus-visible:ring-marie-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ring-offset'
            >
              Send us a message →
            </Link>
          </div>
        </div>

        <div className='mt-10 border-t border-border pt-6 text-center text-xs text-subtle'>
          © {year} Marie&apos;s Biscuits. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
