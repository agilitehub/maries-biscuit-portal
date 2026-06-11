import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import ContactForm from './ContactForm'

export default function ContactSection(): React.ReactElement {
  return (
    <section id='contact' className='relative scroll-mt-24 py-16 sm:py-20'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <header className='max-w-2xl'>
          <h2 className='font-heading text-3xl font-bold text-foreground sm:text-4xl'>Contact us</h2>
          <p className='mt-4 text-lg leading-relaxed text-muted'>
            Orders, wholesale enquiries, or just saying hello — drop us a line and we&apos;ll get back to you.
          </p>
        </header>

        <div className='mt-12 grid gap-10 lg:grid-cols-5 lg:gap-16'>
          <div className='lg:col-span-3'>
            <div className='botanical-card rounded-[1.75rem] p-6 shadow-sm sm:p-8'>
              <ContactForm />
            </div>
          </div>

          <aside className='space-y-6 lg:col-span-2'>
            <div className='botanical-card rounded-[1.25rem] p-6'>
              <FontAwesomeIcon icon={faWhatsapp} className='text-xl text-marie-gold-rich' aria-hidden />
              <h3 className='mt-3 font-heading text-lg font-semibold text-foreground'>WhatsApp</h3>
              <p className='mt-1 text-sm text-muted'>
                <a
                  href='https://wa.me/27733325032'
                  className='text-base font-semibold text-marie-green-deep transition hover:text-marie-gold-rich dark:text-botanical-gold-light dark:hover:text-botanical-gold'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  073 332 5032
                </a>
              </p>
            </div>

            <div className='botanical-card rounded-[1.25rem] p-6'>
              <FontAwesomeIcon icon={faEnvelope} className='text-xl text-marie-gold-rich' aria-hidden />
              <h3 className='mt-3 font-heading text-lg font-semibold text-foreground'>Orders</h3>
              <p className='mt-1 text-sm leading-relaxed text-muted'>
                Message Marianne on WhatsApp to place your order — gift boxes, party platters, or weekly treats.
              </p>
            </div>

            <div className='botanical-card rounded-[1.25rem] p-6'>
              <FontAwesomeIcon icon={faClock} className='text-xl text-marie-gold-rich' aria-hidden />
              <h3 className='mt-3 font-heading text-lg font-semibold text-foreground'>Response time</h3>
              <p className='mt-1 text-sm leading-relaxed text-muted'>
                We aim to reply within one business day. Orders placed before Thursday are typically ready the
                following week.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
