import React from 'react'
import Image from 'next/image'

import { Header } from 'antd/es/layout/layout';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <Header style={{ display: 'flex', background: '#265b4e', alignItems: 'center' }}>
            <div className="demo-logo">
                <Image src="/solace.svg" alt="Solace Logo" width={139} height={39} className='w-auto h-6' />
            </div>
        </Header>
        <div>{children}</div>
    </>
  )
}

export default Layout;