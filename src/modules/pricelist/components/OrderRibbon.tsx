import React from 'react'

import { WHATSAPP_DISPLAY, WHATSAPP_LINK } from '../utils/pricelistData'

export default function OrderRibbon(): React.ReactElement {
  return (
    <div className='booklet-ribbon'>
      Order via WhatsApp:{' '}
      <a href={WHATSAPP_LINK} target='_blank' rel='noopener noreferrer'>
        {WHATSAPP_DISPLAY}
      </a>
    </div>
  )
}
