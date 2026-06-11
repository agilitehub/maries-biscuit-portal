import React from 'react'

import BiscuitCard from './components/BiscuitCard'
import { biscuits } from './utils/biscuits'

export default function BiscuitsPage(): React.ReactElement {
  return (
    <div className='mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8'>
      <header className='max-w-2xl'>
        <h1 className='font-heading text-4xl font-bold text-foreground'>Our biscuits</h1>
        <p className='mt-4 text-lg text-muted leading-relaxed'>
          Every biscuit is baked in small batches. Browse the range below — availability may vary by season.
        </p>
      </header>

      <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {biscuits.map((biscuit) => (
          <BiscuitCard key={biscuit.id} biscuit={biscuit} />
        ))}
      </div>
    </div>
  )
}
