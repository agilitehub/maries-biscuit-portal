import React from 'react'
import { Route } from 'react-router-dom'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faBookOpen, faCookieBite, faEnvelope, faHouse, faHeart } from '@fortawesome/free-solid-svg-icons'

import HomePage from '../modules/home/home'
import BiscuitsPage from '../modules/biscuits/biscuits'
import PricelistPage from '../modules/pricelist/pricelist'

export type SiteNavItem = {
  key: string
  path: string
  label: string
  icon: IconDefinition
}

type PageRouteEntry = {
  pathSegment: string
  Component: React.ComponentType
  nav: Omit<SiteNavItem, 'path'>
}

const pageRouteDefs: PageRouteEntry[] = [
  {
    pathSegment: '',
    Component: HomePage,
    nav: { key: 'home', label: 'Home', icon: faHouse }
  },
  {
    pathSegment: 'biscuits',
    Component: BiscuitsPage,
    nav: { key: 'biscuits', label: 'Our Biscuits', icon: faCookieBite }
  },
  {
    pathSegment: 'pricelist',
    Component: PricelistPage,
    nav: { key: 'pricelist', label: 'Price List', icon: faBookOpen }
  }
]

const homeSectionNav: SiteNavItem[] = [
  { key: 'about', path: '/#about', label: 'About', icon: faHeart },
  { key: 'contact', path: '/#contact', label: 'Contact', icon: faEnvelope }
]

function segmentToPath(segment: string): string {
  return segment === '' ? '/' : `/${segment}`
}

export function getSiteNavItems(): SiteNavItem[] {
  return [
    ...pageRouteDefs.map((def) => ({
      ...def.nav,
      path: segmentToPath(def.pathSegment)
    })),
    ...homeSectionNav
  ]
}

export function siteChildRoutes(): React.ReactElement {
  return (
    <>
      {pageRouteDefs.map((def) =>
        def.pathSegment === '' ? (
          <Route key={def.nav.key} index element={<def.Component />} />
        ) : (
          <Route key={def.nav.key} path={def.pathSegment} element={<def.Component />} />
        )
      )}
    </>
  )
}
