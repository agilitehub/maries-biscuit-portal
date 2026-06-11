import React from 'react'
import { Link } from 'react-router-dom'

import BiscuitCard from '../../biscuits/components/BiscuitCard'
import { getFeaturedBiscuits } from '../../biscuits/utils/biscuits'

export default function FeaturedBiscuitsSection(): React.ReactElement {
  const featured = getFeaturedBiscuits()

  return (
    <section className='relative py-16 sm:py-20'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
          <div>
            <h2 className='font-heading text-3xl font-bold text-foreground sm:text-4xl'>From the kitchen</h2>
            <p className='mt-2 max-w-xl text-muted'>A taste of what Marianne bakes each week.</p>
          </div>
          <Link
            to='/biscuits'
            className='shrink-0 text-sm font-semibold text-marie-gold-rich transition hover:text-marie-green-deep focus-visible:outline focus-visible:ring-2 focus-visible:ring-marie-gold focus-visible:ring-offset-2'
          >
            View all →
          </Link>
        </div>

        <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {featured.map((biscuit) => (
            <BiscuitCard key={biscuit.id} biscuit={biscuit} />
          ))}
        </div>
      </div>
    </section>
  )
}
