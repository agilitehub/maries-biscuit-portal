import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import ThemeToggle from '../components/ThemeToggle'
import Logo from '../components/Logo'
import UserMenuPopover from './UserMenuPopover'

export type ShellHeaderProps = {
  collapsed: boolean
  onToggleSiderCollapse: () => void
  onOpenDrawer: () => void
}

export default function ShellHeader({
  collapsed,
  onToggleSiderCollapse,
  onOpenDrawer
}: ShellHeaderProps): React.ReactElement {
  return (
    <header className='flex shrink-0 items-center justify-between gap-3 border-b border-gray-200 bg-white/95 px-4 py-3 backdrop-blur dark:border-gray-800 dark:bg-gray-900/95'>
      <div className='flex min-w-0 flex-1 items-center gap-2'>
        <button
          type='button'
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className='inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-gray-600 outline-none transition hover:bg-black/[0.06] focus-visible:ring-2 focus-visible:ring-agilite-red dark:text-gray-300 dark:hover:bg-white/[0.08]'
          onClick={onToggleSiderCollapse}
        >
          <FontAwesomeIcon icon={faBars} className='text-lg' aria-hidden />
        </button>
        <Logo showTitle title='React AI Boilerplate' sizePreset='toolbar' className='min-w-0' />
      </div>
      <div className='flex shrink-0 items-center gap-2 sm:gap-3'>
        <ThemeToggle />
        <UserMenuPopover />
        <button
          type='button'
          aria-label='Open side panel'
          className='inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-gray-600 outline-none transition hover:bg-black/[0.06] focus-visible:ring-2 focus-visible:ring-agilite-red dark:text-gray-300 dark:hover:bg-white/[0.08]'
          onClick={onOpenDrawer}
        >
          <FontAwesomeIcon icon={faBars} className='text-lg' aria-hidden />
        </button>
      </div>
    </header>
  )
}
