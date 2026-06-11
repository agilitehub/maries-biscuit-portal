import React from 'react'

import LeafBackground from './LeafBackground'

export type BackgroundEffectProps = {
  className?: string
}

export default function BackgroundEffect({ className = '' }: BackgroundEffectProps): React.ReactElement {
  return (
    <div className={className}>
      <LeafBackground />
    </div>
  )
}
