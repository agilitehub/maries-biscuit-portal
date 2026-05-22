import React from 'react'

export type BackgroundEffectProps = {
  className?: string
}

export default function BackgroundEffect({ className = '' }: BackgroundEffectProps): React.ReactElement {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}>
      <div className='absolute inset-0 bg-gradient-to-br from-surface via-surface-muted to-surface'></div>

      <div className='absolute inset-0 block dark:hidden'>
        <div className='absolute inset-0 bg-[linear-gradient(45deg,rgba(227,6,19,0.12)_1px,transparent_1px),linear-gradient(135deg,rgba(227,6,19,0.12)_1px,transparent_1px)] bg-[size:36px_36px]'></div>
        <div className='absolute top-24 right-[12%] h-72 w-72 animate-float rounded-full bg-agilite-red/20 blur-3xl'></div>
      </div>

      <div className='absolute inset-0 hidden dark:block'>
        <div className='absolute bottom-[-20%] left-[-10%] h-96 w-96 rounded-full bg-agilite-red/20 blur-3xl'></div>
      </div>
    </div>
  )
}
