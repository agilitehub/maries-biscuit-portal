import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function HashScroll(): null {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (pathname !== '/' || !hash) return

    const id = hash.replace('#', '')
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [pathname, hash])

  return null
}
