import { ReportedMessages } from '@/components/admin/messages'
import SidebarWithHeader from '@/components/admin/sidebar'
import React from 'react'

const Messages = () => {
  return (
    <SidebarWithHeader>
      <ReportedMessages />
    </SidebarWithHeader>
  )
}
export default Messages
