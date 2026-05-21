import React from 'react'
import { ReactComponent as ReactLogoGraphic } from '../assets/logo.svg'

export const logoMarkSizes = {
  toolbar: 'h-14 w-14',
  hero: 'h-32 w-32 sm:h-24 sm:h-24'
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
  title = 'React AI Boilerplate'
}: LogoProps): React.ReactElement {
  const resolvedSizes =
    sizeClasses ?? (sizePreset != null ? logoMarkSizes[sizePreset] : undefined) ?? logoMarkSizes.toolbar

  return (
    <div className={`flex items-center gap-3 sm:gap-3.5 ${className}`}>
      <ReactLogoGraphic className={`shrink-0 ${resolvedSizes}`} aria-hidden focusable={false} />
      {showTitle && (
        <span className='text-left font-semibold tracking-tight text-agilite-slate dark:text-white sm:text-lg'>
          {title}
        </span>
      )}
    </div>
  )
}
