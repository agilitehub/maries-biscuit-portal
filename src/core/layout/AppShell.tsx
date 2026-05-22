import React, { useState } from 'react'
import { Drawer, Layout } from 'antd'
import { Outlet } from 'react-router-dom'

import type { SidebarNavItem } from '../../routes'

import AppSidebar from './AppSidebar'
import ShellHeader from './ShellHeader'

const { Content } = Layout

export type AppShellProps = {
  sidebarNavItems: SidebarNavItem[]
}

export default function AppShell({ sidebarNavItems }: AppShellProps): React.ReactElement {
  const [collapsed, setCollapsed] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <Layout className='min-h-screen'>
        <AppSidebar items={sidebarNavItems} collapsed={collapsed} onCollapse={setCollapsed} />
        <Layout className='min-h-screen'>
          <ShellHeader
            collapsed={collapsed}
            onToggleSiderCollapse={() => setCollapsed((c) => !c)}
            onOpenDrawer={() => setDrawerOpen(true)}
          />
          <Content className='bg-surface-muted'>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <Drawer
        title='Side panel'
        placement='right'
        width={320}
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        destroyOnHidden
      >
        <p className='text-muted'>
          Boilerplate Ant Design drawer. Put filters, quick actions, or auxiliary context here in a real app.
        </p>
      </Drawer>
    </>
  )
}
