import { useCallback } from 'react'

export function useExportPdf(targetId: string): { exportPdf: () => void } {
  const exportPdf = useCallback(() => {
    const booklet = document.getElementById(targetId)
    if (!booklet) return

    const cleanup = (): void => {
      document.body.classList.remove('pricelist-printing')
      window.removeEventListener('afterprint', cleanup)
    }

    window.addEventListener('afterprint', cleanup)
    document.body.classList.add('pricelist-printing')
    window.print()
  }, [targetId])

  return { exportPdf }
}
