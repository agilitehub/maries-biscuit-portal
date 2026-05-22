import React from 'react'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useTheme } from '../../context/ThemeContext'
import type { SidebarNavItem } from '../../routes'
import { getSidebarKeyForPath } from '../../routes'

const { Sider } = Layout

export type AppSidebarProps = {
  items: SidebarNavItem[]
  collapsed: boolean
  onCollapse: (collapsed: boolean) => void
}

export default function AppSidebar({ items, collapsed, onCollapse }: AppSidebarProps): React.ReactElement {
  const navigate = useNavigate()
  const location = useLocation()
  const { darkMode } = useTheme()
  const selectedKeys = [getSidebarKeyForPath(location.pathname)]

  const uiTheme = darkMode ? 'dark' : 'light'

  const menuItems: MenuProps['items'] = items.map((nav) => ({
    key: nav.key,
    icon: <FontAwesomeIcon icon={nav.icon} className='inline-block h-[1em] w-[1em]' />,
    label: nav.label
  }))

  const onMenuClick: MenuProps['onClick'] = ({ key }) => {
    const target = items.find((i) => i.key === key)
    if (target) navigate(target.path)
  }

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      collapsedWidth={64}
      breakpoint='lg'
      trigger={null}
      theme={uiTheme}
      className='border-r border-border bg-background shadow-sm'
      width={228}
    >
      <Menu
        mode='inline'
        theme={uiTheme}
        className={`mt-3 border-none ${darkMode ? '[&_.ant-menu-item-selected]:!bg-agilite-red [&_.ant-menu-item-selected_span]:!text-white' : ''}`}
        selectedKeys={selectedKeys}
        items={menuItems}
        onClick={onMenuClick}
      />
    </Sider>
  )
}
