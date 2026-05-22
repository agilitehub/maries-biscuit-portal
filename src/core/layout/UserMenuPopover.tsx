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
        <div className='mt-1 text-xs text-muted'>Kitchen-sink boilerplate</div>
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
        className={`inline-flex cursor-pointer items-center gap-2 rounded-md px-1 py-0.5 text-sm font-medium text-foreground outline-none ring-offset-2 ring-offset-ring-offset transition hover:bg-overlay-hover focus-visible:ring-2 focus-visible:ring-agilite-red ${className}`}
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
