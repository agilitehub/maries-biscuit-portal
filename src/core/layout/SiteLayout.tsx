import React from 'react'
import { Outlet } from 'react-router-dom'

import LeafBackground from '../components/LeafBackground'
import { getSiteNavItems } from '../../routes'
import HashScroll from './HashScroll'
import Navbar from './Navbar'
import SiteFooter from './SiteFooter'

export default function SiteLayout(): React.ReactElement {
  return (
    <div className='relative isolate flex min-h-screen flex-col'>
      <LeafBackground />
      <HashScroll />
      <Navbar navItems={getSiteNavItems()} />
      <main className='relative z-10 flex-1'>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
