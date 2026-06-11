import React from 'react'

export type ProductImageProps = {
  src: string
  alt: string
  className?: string
  frameClassName?: string
}

export default function ProductImage({
  src,
  alt,
  className = '',
  frameClassName = ''
}: ProductImageProps): React.ReactElement {
  return (
    <div
      className={[
        'relative overflow-hidden rounded-[1.75rem] border border-marie-gold-light/55 bg-white/70 p-1.5 shadow-[0_8px_30px_rgba(47,69,56,0.1)] backdrop-blur-sm dark:border-botanical-gold/25 dark:bg-surface/80 dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]',
        frameClassName
      ].join(' ')}
    >
      <div className='pointer-events-none absolute -right-3 -top-3 h-16 w-16 text-marie-green-forest/[0.12]' aria-hidden>
        <svg viewBox='0 0 64 64' fill='currentColor'>
          <path d='M32 4c10 18 8 36-4 52 6-14 10-28 8-42-2-6-2-8-4-10z' />
          <path d='M32 4c-10 18-8 36 4 52-6-14-10-28-8-42 2-6 2-8 4-10z' opacity='0.7' />
        </svg>
      </div>
      <img src={src} alt={alt} className={`block h-full w-full rounded-[1.35rem] object-cover ${className}`} />
    </div>
  )
}
