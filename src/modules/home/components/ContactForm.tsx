import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'

export default function ContactForm(): React.ReactElement {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className='rounded-2xl border border-marie-gold-light/50 bg-marie-ivory/80 p-8 text-center'>
        <h3 className='font-heading text-xl font-semibold text-foreground'>Thank you!</h3>
        <p className='mt-2 text-muted'>
          Your message has been noted. Marie will be in touch shortly — usually within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-5'>
      <div>
        <label htmlFor='name' className='block text-sm font-medium text-foreground'>
          Your name
        </label>
        <div className='relative mt-1.5'>
          <FontAwesomeIcon
            icon={faUser}
            className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-placeholder'
            aria-hidden
          />
          <input
            id='name'
            name='name'
            type='text'
            required
            autoComplete='name'
            placeholder='Jane Smith'
            className='block w-full rounded-lg border border-border-input bg-surface py-3 pl-10 pr-4 text-foreground outline-none placeholder:text-placeholder focus:border-transparent focus:ring-2 focus:ring-marie-gold'
          />
        </div>
      </div>

      <div>
        <label htmlFor='email' className='block text-sm font-medium text-foreground'>
          Email address
        </label>
        <div className='relative mt-1.5'>
          <FontAwesomeIcon
            icon={faEnvelope}
            className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-placeholder'
            aria-hidden
          />
          <input
            id='email'
            name='email'
            type='email'
            required
            autoComplete='email'
            placeholder='you@example.com'
            className='block w-full rounded-lg border border-border-input bg-surface py-3 pl-10 pr-4 text-foreground outline-none placeholder:text-placeholder focus:border-transparent focus:ring-2 focus:ring-marie-gold'
          />
        </div>
      </div>

      <div>
        <label htmlFor='message' className='block text-sm font-medium text-foreground'>
          Message
        </label>
        <div className='relative mt-1.5'>
          <FontAwesomeIcon
            icon={faComment}
            className='pointer-events-none absolute left-3 top-4 text-placeholder'
            aria-hidden
          />
          <textarea
            id='message'
            name='message'
            required
            rows={5}
            placeholder='Tell us what you&apos;d like to order, or ask a question…'
            className='block w-full resize-y rounded-lg border border-border-input bg-surface py-3 pl-10 pr-4 text-foreground outline-none placeholder:text-placeholder focus:border-transparent focus:ring-2 focus:ring-marie-gold'
          />
        </div>
      </div>

      <button
        type='submit'
        className='w-full rounded-lg bg-marie-green-deep px-4 py-3 text-sm font-semibold text-marie-cream transition hover:bg-marie-green-forest focus-visible:outline focus-visible:ring-2 focus-visible:ring-marie-gold focus-visible:ring-offset-2 sm:w-auto sm:px-8'
      >
        Send message
      </button>
    </form>
  )
}
