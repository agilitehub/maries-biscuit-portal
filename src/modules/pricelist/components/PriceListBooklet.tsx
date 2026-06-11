import React from 'react'

import {
  desserts,
  formatRand,
  homemadeBiscuits,
  COVER_TAGLINE,
  HOMEMADE_SUBTITLE,
  specialtyFlavours,
  WHATSAPP_DISPLAY,
  WHATSAPP_LINK
} from '../utils/pricelistData'
import BookletPage from './BookletPage'
import BookletSectionHeader from './BookletSectionHeader'
import OrderRibbon from './OrderRibbon'
import PriceLine from './PriceLine'

export const PRICELIST_BOOKLET_ID = 'pricelist-booklet'

export default function PriceListBooklet(): React.ReactElement {
  return (
    <div id={PRICELIST_BOOKLET_ID} className='space-y-10 print:space-y-0'>
      <BookletPage>
        <div className='flex flex-1 flex-col items-center justify-center text-center'>
          <img
            src='/assets/pricelist/logo.png'
            alt="Marie's Biscuits"
            className='h-44 w-auto object-contain sm:h-52'
          />
          <p className='mt-8 text-xs font-semibold uppercase tracking-[0.35em] text-marie-gold-rich'>
            {COVER_TAGLINE}
          </p>
          <h1 className='mt-3 font-heading text-4xl font-bold text-marie-green-deep sm:text-5xl'>Price List</h1>
          <div className='booklet-rule mx-auto mt-6 w-48' />
          <p className='mt-4 max-w-xs text-sm leading-relaxed text-marie-green-soft'>
            Biscuits, specialty flavours, brownies and desserts — baked to order by Marianne.
          </p>
          <div className='mt-10 w-full max-w-sm border border-marie-gold bg-marie-linen px-6 py-5'>
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-marie-gold-rich'>How to order</p>
            <p className='mt-2 text-sm text-marie-green-deep'>
              WhatsApp Marianne on{' '}
              <a href={WHATSAPP_LINK} className='font-semibold text-marie-gold-rich' target='_blank' rel='noopener noreferrer'>
                {WHATSAPP_DISPLAY}
              </a>
            </p>
          </div>
        </div>
        <p className='mt-8 text-center text-[0.65rem] uppercase tracking-widest text-marie-green-soft'>
          Prices in South African Rand · Subject to availability
        </p>
      </BookletPage>

      <BookletPage>
        <BookletSectionHeader title='Homemade Biscuits' subtitle={HOMEMADE_SUBTITLE} />

        <table className='booklet-table'>
          <thead>
            <tr>
              <th>Flavour</th>
              <th>500g</th>
              <th>1kg</th>
              <th>2kg</th>
            </tr>
          </thead>
          <tbody>
            {homemadeBiscuits.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{formatRand(row.g500)}</td>
                <td>{formatRand(row.kg1)}</td>
                <td>{formatRand(row.kg2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className='mt-4 text-center text-xs text-marie-green-soft'>
          Custom assortments available on request
        </p>
        <OrderRibbon />
      </BookletPage>

      <BookletPage>
        <BookletSectionHeader title='Specialty Flavours' subtitle={COVER_TAGLINE} />

        <div className='grid flex-1 gap-x-10 gap-y-5 sm:grid-cols-2'>
          {specialtyFlavours.map((item) => (
            <div key={item.name}>
              <h3 className='font-heading text-base font-semibold text-marie-green-deep'>
                {item.name}
                {item.badge && (
                  <span className='booklet-badge ml-2 align-middle'>{item.badge}</span>
                )}
              </h3>
              {item.description && (
                <p className='mt-0.5 text-xs font-medium text-marie-green-soft'>{item.description}</p>
              )}
              <div className='mt-1 space-y-0.5'>
                {item.tiers.map((tier) => (
                  <PriceLine key={tier.label} label={tier.label} price={formatRand(tier.price)} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <OrderRibbon />
      </BookletPage>

      <BookletPage last>
        <BookletSectionHeader title='Cakes &amp; Desserts' subtitle='Pre-order recommended' />

        <div className='mx-auto w-full max-w-md space-y-1'>
          {desserts.map((item) => (
            <div key={item.name} className='flex items-baseline gap-2'>
              <div className='booklet-price-line flex-1'>
                <span className='booklet-price-label'>
                  {item.name}
                  {item.badge && (
                    <span className='booklet-badge ml-2 align-middle'>{item.badge}</span>
                  )}
                </span>
                <span className='booklet-price-dots' aria-hidden />
                <span className='booklet-price-amount'>{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        <p className='mt-6 text-center text-xs text-marie-green-soft'>
          S.Q. = price on request depending on toppings selected
        </p>

        <div className='mt-auto border border-marie-gold-light bg-marie-ivory px-6 py-8 text-center'>
          <p className='font-heading text-xl font-semibold text-marie-green-deep'>Thank you for your support</p>
          <p className='mt-2 text-sm text-marie-green-soft'>
            Message Marianne on WhatsApp to place your order
          </p>
          <p className='mt-3 text-base font-semibold text-marie-gold-rich'>{WHATSAPP_DISPLAY}</p>
        </div>
      </BookletPage>
    </div>
  )
}
