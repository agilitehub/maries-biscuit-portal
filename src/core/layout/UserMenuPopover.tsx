import React from 'react'
import { Avatar, Button, Popover, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'

import packageJson from '../../../package.json'
import { useAuth } from '../../context/AuthContext'

const DEMO_USER_LABEL = 'Demo User'

export type UserMenuPopoverProps = {
  className?: string
}

export default function UserMenuPopover({ className = '' }: UserMenuPopoverProps): React.ReactElement {
  const { signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = (): void => {
    signOut()
    navigate('/login', { replace: true })
  }

  const panel = (
    <div className='min-w-[200px]' onClick={(e) => e.stopPropagation()}>
      <div className='mb-3'>
        <Typography.Text strong>{DEMO_USER_LABEL}</Typography.Text>
        <div className='text-agilite-slate mt-1 text-xs dark:text-gray-400'>Kitchen-sink boilerplate</div>
      </div>
      <Typography.Text type='secondary' className='!text-xs'>
        Version {packageJson.version}
      </Typography.Text>
      <div className='mt-4'>
        <Button
          type='primary'
          danger
          block
          icon={<FontAwesomeIcon icon={faRightFromBracket} />}
          onClick={handleSignOut}
        >
          Sign out
        </Button>
      </div>
      <Typography.Text type='secondary' className='!mt-2 block !text-xs'>
        Profile and settings typically live here in a production app.
      </Typography.Text>
    </div>
  )

  return (
    <Popover content={panel} placement='bottomRight' trigger='click'>
      <button
        type='button'
        aria-label={`User menu (${DEMO_USER_LABEL})`}
        className={`inline-flex cursor-pointer items-center gap-2 rounded-md px-1 py-0.5 text-sm font-medium text-gray-800 outline-none ring-offset-2 ring-offset-white transition hover:bg-black/[0.06] focus-visible:ring-2 focus-visible:ring-agilite-red dark:text-gray-100 dark:ring-offset-gray-950 dark:hover:bg-white/[0.08] ${className}`}
      >
        <Avatar
          size='small'
          className='!bg-agilite-red !flex !items-center !justify-center'
          icon={<FontAwesomeIcon icon={faUser} className='text-sm text-white' />}
        />
        <span className='hidden sm:inline'>{DEMO_USER_LABEL}</span>
      </button>
    </Popover>
  )
}
