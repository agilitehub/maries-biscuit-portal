import React from 'react'
import { Route } from 'react-router-dom'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faFlask, faHouse } from '@fortawesome/free-solid-svg-icons'

import HomePage from '../modules/home/home'
import SamplesPage from '../modules/samples/samples'

export const AUTH_BASE_PATH = '/home' as const

export type SidebarNavItem = {
  key: string
  path: string
  label: string
  icon: IconDefinition
}

type AuthenticatedRouteEntry = {
  pathSegment: string
  Component: React.ComponentType
  nav: Omit<SidebarNavItem, 'path'>
}

function segmentToAbsolutePath(segment: string): string {
  if (segment === '') return AUTH_BASE_PATH
  return `${AUTH_BASE_PATH}/${segment}`
}

const authenticatedRouteDefs: AuthenticatedRouteEntry[] = [
  {
    pathSegment: '',
    Component: HomePage,
    nav: { key: 'home', label: 'Home', icon: faHouse }
  },
  {
    pathSegment: 'samples',
    Component: SamplesPage,
    nav: { key: 'samples', label: 'Samples', icon: faFlask }
  }
]

/** Single source for sidebar wiring and menu selection. */
export function getSidebarNavItems(): SidebarNavItem[] {
  return authenticatedRouteDefs.map((def) => ({
    ...def.nav,
    path: segmentToAbsolutePath(def.pathSegment)
  }))
}

/** Which sidebar `key` is active for this URL — exact match against registered paths. */
export function getSidebarKeyForPath(pathname: string): string {
  const item = getSidebarNavItems().find(({ path }) => path === pathname)
  return item?.key ?? authenticatedRouteDefs[0].nav.key
}

/** Child `<Route />` nodes under `/home` layout — derive only from `authenticatedRouteDefs`. */
export function authenticatedChildRoutes(): React.ReactElement {
  return (
    <>
      {authenticatedRouteDefs.map((def) =>
        def.pathSegment === '' ? (
          <Route key={def.nav.key} index element={<def.Component />} />
        ) : (
          <Route key={def.nav.key} path={def.pathSegment} element={<def.Component />} />
        )
      )}
    </>
  )
}
