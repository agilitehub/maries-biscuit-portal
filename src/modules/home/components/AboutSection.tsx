import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingHeart, faKitchenSet, faLeaf } from '@fortawesome/free-solid-svg-icons'

import ProductImage from '../../../core/components/ProductImage'

const values = [
  {
    icon: faKitchenSet,
    title: 'Small-batch baking',
    description: 'Every order is mixed and baked fresh — never pulled from a warehouse shelf.'
  },
  {
    icon: faLeaf,
    title: 'Quality ingredients',
    description: 'Real butter, free-range eggs, and no artificial preservatives. Simple and honest.'
  },
  {
    icon: faHandHoldingHeart,
    title: 'Made with care',
    description: 'The children sample every new flavour; John lends a hand whenever he can. It is very much a family affair.'
  }
]

export default function AboutSection(): React.ReactElement {
  return (
    <section id='about' className='relative scroll-mt-24 py-16 sm:py-20'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <header className='max-w-2xl'>
          <h2 className='font-heading text-3xl font-bold text-foreground sm:text-4xl'>About Marie&apos;s Biscuits</h2>
          <p className='mt-4 text-lg leading-relaxed text-muted'>
            From a home kitchen in PE to biscuit boxes bound for Johannesburg and Cape Town — a small business with
            deep family roots.
          </p>
        </header>

        <div className='mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-16'>
          <ProductImage
            src='/assets/products/cheesecake.png'
            alt='Homemade cheesecake topped with fresh fruit and edible flowers'
            className='aspect-square w-full'
          />

          <div className='space-y-4 leading-relaxed text-muted'>
            <p>
              I started Marie&apos;s Biscuits in October 2025 from my home kitchen, where every batch is still mixed on
              my grandmother&apos;s Kenwood — a wedding gift from 1957 that has outlasted nearly seven decades and shows
              no sign of slowing down.
            </p>
            <p>
              What started as a modest price list passed among friends has grown steadily, flavour by flavour. Our
              neighbours are regulars, and word has spread well beyond PE — biscuits from this kitchen have found their
              way to Johannesburg and Cape Town.
            </p>
            <p>
              Along the way I&apos;m always experimenting with something new to add to the range. My children are the
              first to sample every creation, and my partner John stands beside me through it all — tasting, packing, and
              cheering me on.
            </p>
          </div>
        </div>

        <div className='botanical-card mt-12 flex items-center justify-center rounded-[1.75rem] bg-marie-gold-pale/80 px-8 py-10 dark:bg-surface/60'>
          <p className='max-w-lg text-center font-heading text-xl font-semibold italic text-marie-green-deep sm:text-2xl'>
            &ldquo;Some things are worth holding onto — especially a mixer that&apos;s been baking love since 1957.&rdquo;
          </p>
        </div>

        <div className='mt-12 grid gap-6 sm:grid-cols-3'>
          {values.map((value) => (
            <div
              key={value.title}
              className='botanical-card rounded-[1.25rem] p-6'
            >
              <FontAwesomeIcon icon={value.icon} className='text-2xl text-marie-gold-rich' aria-hidden />
              <h3 className='mt-4 font-heading text-lg font-semibold text-foreground'>{value.title}</h3>
              <p className='mt-2 text-sm leading-relaxed text-muted'>{value.description}</p>
            </div>
          ))}
        </div>

        <div className='botanical-card mt-12 rounded-[1.75rem] p-8 text-center sm:p-10'>
          <h3 className='font-heading text-2xl font-bold text-foreground'>Want to stock Marie&apos;s Biscuits?</h3>
          <p className='mx-auto mt-3 max-w-lg text-muted'>
            Reach out to discuss wholesale and seasonal ranges.
          </p>
          <Link
            to='/#contact'
            className='mt-6 inline-flex items-center justify-center rounded-full bg-marie-green-deep px-6 py-3 text-sm font-semibold text-marie-cream transition hover:bg-marie-green-forest focus-visible:outline focus-visible:ring-2 focus-visible:ring-marie-gold focus-visible:ring-offset-2'
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
