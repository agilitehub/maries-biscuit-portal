import React from 'react'

export type BookletPageProps = {
  children: React.ReactNode
  last?: boolean
}

export default function BookletPage({ children, last = false }: BookletPageProps): React.ReactElement {
  return (
    <section
      className={[
        'booklet-page relative mx-auto flex w-full max-w-[210mm] flex-col shadow-xl print:shadow-none',
        last ? 'booklet-page-last' : ''
      ].join(' ')}
    >
      <div className='booklet-frame'>{children}</div>
    </section>
  )
}
