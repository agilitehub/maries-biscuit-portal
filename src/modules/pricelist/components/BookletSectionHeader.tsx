import React from 'react'

export type BookletSectionHeaderProps = {
  title: string
  subtitle?: string
  showLogo?: boolean
}

export default function BookletSectionHeader({
  title,
  subtitle,
  showLogo = true
}: BookletSectionHeaderProps): React.ReactElement {
  return (
    <header className='text-center'>
      {showLogo && (
        <img src='/assets/pricelist/logo.png' alt='' className='mx-auto h-20 w-auto object-contain' aria-hidden />
      )}
      <h2 className={`booklet-section-title ${showLogo ? 'mt-3' : ''}`}>{title}</h2>
      {subtitle && <p className='booklet-section-subtitle'>{subtitle}</p>}
      <div className='booklet-rule' />
    </header>
  )
}
