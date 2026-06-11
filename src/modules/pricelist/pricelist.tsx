import React from 'react'

import PriceListBooklet, { PRICELIST_BOOKLET_ID } from './components/PriceListBooklet'
import PriceListToolbar from './components/PriceListToolbar'
import { useExportPdf } from './hooks/useExportPdf'
import './pricelist.css'

export default function PricelistPage(): React.ReactElement {
  const { exportPdf } = useExportPdf(PRICELIST_BOOKLET_ID)

  return (
    <div className='relative px-4 py-10 sm:px-6 lg:px-8'>
      <PriceListToolbar onExportPdf={exportPdf} />
      <PriceListBooklet />
    </div>
  )
}
