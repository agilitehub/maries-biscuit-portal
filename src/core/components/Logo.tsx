import React from 'react'

export const logoMarkSizes = {
  toolbar: 'h-14 w-auto sm:h-16',
  hero: 'h-36 w-auto sm:h-44'
} as const

export type LogoSizePreset = keyof typeof logoMarkSizes

export type LogoProps = {
  className?: string
  sizePreset?: LogoSizePreset
  sizeClasses?: string
  showTitle?: boolean
  title?: string
}

export default function Logo({
  className = '',
  sizePreset,
  sizeClasses,
  showTitle = false,
  title = "Marie's Biscuits"
}: LogoProps): React.ReactElement {
  const resolvedSizes =
    sizeClasses ?? (sizePreset != null ? logoMarkSizes[sizePreset] : undefined) ?? logoMarkSizes.toolbar

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src='/assets/pricelist/logo.png'
        alt="Marie's Biscuits"
        className={`block shrink-0 object-contain dark:brightness-0 dark:invert ${resolvedSizes}`}
      />
      {showTitle && (
        <span className='font-heading text-left text-lg font-semibold tracking-tight text-foreground sm:text-xl'>
          {title}
        </span>
      )}
    </div>
  )
}
