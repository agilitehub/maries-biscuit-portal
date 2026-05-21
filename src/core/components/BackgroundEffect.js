import React from 'react'

const BackgroundEffect = ({ className = '' }) => (
  <div aria-hidden='true' className={`pointer-events-none absolute inset-0 overflow-hidden z-0 ${className}`}>
    <div className='absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900'></div>

    <div className='absolute inset-0 block dark:hidden'>
      <div className='absolute inset-0 bg-[linear-gradient(45deg,rgba(227,6,19,0.12)_1px,transparent_1px),linear-gradient(135deg,rgba(227,6,19,0.12)_1px,transparent_1px)] bg-[size:36px_36px]'></div>
      <div className='absolute top-24 right-[12%] h-72 w-72 rounded-full bg-agilite-red/20 blur-3xl animate-float'></div>
    </div>

    <div className='absolute inset-0 hidden dark:block'>
      <div className='absolute bottom-[-20%] left-[-10%] h-96 w-96 rounded-full bg-agilite-red/20 blur-3xl'></div>
    </div>
  </div>
)

export default BackgroundEffect
