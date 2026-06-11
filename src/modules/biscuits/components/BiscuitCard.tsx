import React from 'react'

import type { Biscuit } from '../utils/biscuits'

export type BiscuitCardProps = {
  biscuit: Biscuit
}

export default function BiscuitCard({ biscuit }: BiscuitCardProps): React.ReactElement {
  return (
    <article className='botanical-card group flex flex-col overflow-hidden rounded-[1.75rem] shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(47,69,56,0.12)] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)]'>
      <div className='overflow-hidden'>
        <img
          src={biscuit.image}
          alt={biscuit.name}
          className='aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]'
        />
      </div>
      <div className='flex flex-1 flex-col p-5'>
        <span className='text-xs font-semibold uppercase tracking-wide text-marie-gold-rich'>{biscuit.tag}</span>
        <h3 className='mt-1 font-heading text-lg font-semibold text-foreground'>{biscuit.name}</h3>
        <p className='mt-2 flex-1 text-sm leading-relaxed text-muted'>{biscuit.description}</p>
      </div>
    </article>
  )
}
