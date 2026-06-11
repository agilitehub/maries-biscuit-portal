import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faFilePdf } from '@fortawesome/free-solid-svg-icons'

export type PriceListToolbarProps = {
  onExportPdf: () => void
}

export default function PriceListToolbar({ onExportPdf }: PriceListToolbarProps): React.ReactElement {
  return (
    <div className='no-print mx-auto mb-8 flex max-w-[210mm] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
      <Link
        to='/'
        className='inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-marie-green-deep'
      >
        <FontAwesomeIcon icon={faArrowLeft} aria-hidden />
        Back to site
      </Link>

      <div className='flex flex-col gap-2 sm:items-end'>
        <button
          type='button'
          onClick={onExportPdf}
          className='inline-flex items-center justify-center gap-2 rounded-md bg-marie-green-deep px-6 py-2.5 text-sm font-semibold text-marie-cream transition hover:bg-marie-green-forest focus-visible:outline focus-visible:ring-2 focus-visible:ring-marie-gold focus-visible:ring-offset-2'
        >
          <FontAwesomeIcon icon={faFilePdf} aria-hidden />
          Save as PDF
        </button>
        <p className='text-xs text-subtle'>Opens print — choose &ldquo;Save as PDF&rdquo;</p>
      </div>
    </div>
  )
}
