import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

import ProductImage from '../../../core/components/ProductImage'

export default function HeroSection(): React.ReactElement {
  return (
    <section className='relative overflow-hidden'>
      <div className='relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24'>
        <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-16'>
          <div className='text-center lg:text-left'>
            <span className='inline-flex items-center gap-2 rounded-full border border-marie-gold-light/70 bg-marie-ivory/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-marie-gold-rich backdrop-blur-sm dark:border-botanical-gold/30 dark:bg-surface/70 dark:text-botanical-gold-light'>
              <FontAwesomeIcon icon={faLeaf} className='text-marie-green-forest' aria-hidden />
              Homemade with love
            </span>
            <h1 className='mt-6 font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-[3.25rem]'>
              Handcrafted biscuits, baked with love
            </h1>
            <p className='mt-6 text-lg leading-relaxed text-muted sm:text-xl'>
              Golden, buttery treats and specialty flavours from Marianne&apos;s kitchen — made in small batches with
              care.
            </p>
            <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start'>
              <Link
                to='/pricelist'
                className='inline-flex w-full items-center justify-center rounded-full bg-marie-green-deep px-8 py-3.5 text-sm font-semibold text-marie-cream shadow-sm transition hover:bg-marie-green-forest focus-visible:outline focus-visible:ring-2 focus-visible:ring-marie-gold focus-visible:ring-offset-2 sm:w-auto'
              >
                View price list
              </Link>
              <Link
                to='/#contact'
                className='inline-flex w-full items-center justify-center rounded-full border border-marie-gold-light bg-marie-ivory/80 px-8 py-3.5 text-sm font-semibold text-foreground transition hover:bg-marie-gold-pale focus-visible:outline focus-visible:ring-2 focus-visible:ring-marie-gold focus-visible:ring-offset-2 dark:border-botanical-gold/30 dark:bg-surface/70 dark:hover:bg-surface sm:w-auto'
              >
                Place an order
              </Link>
            </div>
          </div>

          <ProductImage
            src='/assets/products/specialty-tray.png'
            alt='Assorted specialty biscuits on a baking tray'
            className='aspect-[5/4] max-h-[26rem] w-full'
          />
        </div>
      </div>
    </section>
  )
}
