import React from 'react'

export type PriceLineProps = {
  label: string
  price: string
}

export default function PriceLine({ label, price }: PriceLineProps): React.ReactElement {
  return (
    <div className='booklet-price-line'>
      <span className='booklet-price-label'>{label}</span>
      <span className='booklet-price-dots' aria-hidden />
      <span className='booklet-price-amount'>{price}</span>
    </div>
  )
}
