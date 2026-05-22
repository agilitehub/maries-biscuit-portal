import React from 'react'

export default function HomePage(): React.ReactElement {
  return (
    <div className='p-6'>
      <h1 className='text-2xl font-semibold text-gray-900 dark:text-white'>Home</h1>
      <p className='mt-2 max-w-2xl text-gray-600 dark:text-gray-400'>
        Kitchen-sink boilerplate dashboard. Replace this module with your real landing experience after sign-in.
      </p>
    </div>
  )
}
