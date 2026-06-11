import React, { useId } from 'react'

type MonsteraLeafProps = {
  className?: string
  gradientId: string
  mode: 'light' | 'dark'
}

function MonsteraLeaf({ className = '', gradientId, mode }: MonsteraLeafProps): React.ReactElement {
  const isDark = mode === 'dark'
  const fillStart = isDark ? '#0c4a48' : '#3d8a62'
  const fillMid = isDark ? '#1a3d52' : '#52a878'
  const fillEnd = isDark ? '#3d2248' : '#6ec095'
  const veinStroke = isDark ? '#d4bc7a' : '#a67c3a'
  const veinOpacity = isDark ? 0.85 : 0.72

  return (
    <svg
      viewBox='0 0 360 480'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden
    >
      <defs>
        <linearGradient id={gradientId} x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor={fillStart} stopOpacity={isDark ? 0.95 : 0.82} />
          <stop offset='55%' stopColor={fillMid} stopOpacity={isDark ? 0.9 : 0.76} />
          <stop offset='100%' stopColor={fillEnd} stopOpacity={isDark ? 0.88 : 0.68} />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        d='M180 20 C120 80 40 120 30 220 C25 300 70 380 180 460 C290 380 335 300 330 220 C320 120 240 80 180 20 Z'
      />
      <path
        fill={`url(#${gradientId})`}
        d='M60 180 C30 200 15 250 25 310 C40 280 55 230 60 180 Z'
        opacity={isDark ? 0.9 : 0.82}
      />
      <path
        fill={`url(#${gradientId})`}
        d='M300 180 C330 200 345 250 335 310 C320 280 305 230 300 180 Z'
        opacity={isDark ? 0.9 : 0.82}
      />
      <path
        fill={`url(#${gradientId})`}
        d='M100 100 C80 140 70 190 85 240 C110 200 115 150 100 100 Z'
        opacity={isDark ? 0.85 : 0.78}
      />
      <path
        fill={`url(#${gradientId})`}
        d='M260 100 C280 140 290 190 275 240 C250 200 245 150 260 100 Z'
        opacity={isDark ? 0.85 : 0.78}
      />
      <g fill='none' stroke={veinStroke} strokeWidth={isDark ? 1.4 : 1.35} opacity={veinOpacity}>
        <path d='M180 40 L180 440' />
        <path d='M180 120 C140 150 100 200 70 260' />
        <path d='M180 120 C220 150 260 200 290 260' />
        <path d='M180 200 C150 230 120 280 95 340' />
        <path d='M180 200 C210 230 240 280 265 340' />
        <path d='M180 280 C160 310 140 360 120 400' />
        <path d='M180 280 C200 310 220 360 240 400' />
      </g>
    </svg>
  )
}

type GoldAccentProps = {
  className?: string
  mode: 'light' | 'dark'
}

function GoldAccent({ className = '', mode }: GoldAccentProps): React.ReactElement {
  const opacity = mode === 'dark' ? 0.7 : 0.72
  return (
    <svg viewBox='0 0 80 80' className={className} aria-hidden>
      <circle cx='24' cy='20' r='6' fill='#c9a86c' opacity={opacity} />
      <ellipse cx='52' cy='38' rx='10' ry='6' fill='#d4bc7a' opacity={opacity * 0.85} transform='rotate(25 52 38)' />
      <circle cx='38' cy='58' r='4' fill='#b8956a' opacity={opacity * 0.9} />
      <ellipse cx='14' cy='48' rx='5' ry='8' fill='#d4bc7a' opacity={opacity * 0.7} transform='rotate(-15 14 48)' />
    </svg>
  )
}

function BotanicalLayer({ mode }: { mode: 'light' | 'dark' }): React.ReactElement {
  const uid = useId().replace(/:/g, '')
  const leafA = `leaf-a-${uid}`
  const leafB = `leaf-b-${uid}`
  const leafC = `leaf-c-${uid}`
  const leafD = `leaf-d-${uid}`
  const hidden = mode === 'dark' ? 'hidden dark:block' : 'dark:hidden'

  return (
    <div className={`absolute inset-0 ${hidden}`}>
      {mode === 'light' ? (
        <>
          <div className='absolute inset-0 bg-gradient-to-br from-[#ffecc2] via-[#fffef8] to-[#a8d8b8]' />
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,rgba(218,175,70,0.55),transparent_58%)]' />
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(72,150,105,0.48),transparent_55%)]' />
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(130,190,155,0.35),transparent_45%)]' />
        </>
      ) : (
        <>
          <div className='absolute inset-0 bg-gradient-to-r from-[#0a3d3c] via-[#123d4a] to-[#2a1a35]' />
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(13,74,72,0.5),transparent_55%)]' />
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_80%_60%,rgba(61,34,72,0.45),transparent_50%)]' />
        </>
      )}

      <MonsteraLeaf
        gradientId={leafA}
        mode={mode}
        className={`absolute ${mode === 'light' ? 'left-[-2%] top-[-2%] h-[min(62vh,34rem)] opacity-100' : '-left-[8%] -top-[6%] h-[min(52vh,28rem)] opacity-90 sm:-left-[4%]'}`}
      />
      <MonsteraLeaf
        gradientId={leafB}
        mode={mode}
        className={`absolute w-auto rotate-[18deg] ${mode === 'light' ? 'bottom-[-4%] right-[-4%] h-[min(58vh,32rem)] opacity-95' : '-right-[12%] bottom-[-8%] h-[min(48vh,26rem)] opacity-80'}`}
      />
      <MonsteraLeaf
        gradientId={leafC}
        mode={mode}
        className={`absolute w-auto rotate-[-24deg] ${mode === 'light' ? 'right-[4%] top-[8%] h-[min(36vh,18rem)] opacity-90' : 'right-[18%] top-[38%] h-[min(28vh,14rem)] opacity-50'}`}
      />
      {mode === 'light' && (
        <MonsteraLeaf
          gradientId={leafD}
          mode={mode}
          className='absolute bottom-[12%] left-[38%] h-[min(32vh,16rem)] w-auto rotate-[12deg] opacity-85'
        />
      )}

      <GoldAccent mode={mode} className='absolute left-[28%] top-[14%] h-20 w-20' />
      <GoldAccent mode={mode} className='absolute bottom-[22%] right-[30%] h-16 w-16 rotate-45' />
      <GoldAccent mode={mode} className='absolute left-[8%] bottom-[35%] h-14 w-14 -rotate-12' />

      {mode === 'light' && (
        <>
          <div className='absolute right-[20%] top-[22%] h-4 w-4 rounded-full bg-[#d4af5a]/75 blur-[0.5px]' />
          <div className='absolute left-[35%] top-[12%] h-3 w-3 rounded-full bg-[#c9a050]/70' />
          <div className='absolute bottom-[38%] right-[42%] h-3.5 w-3.5 rounded-full bg-[#d4bc7a]/65' />
          <div className='absolute left-[55%] top-[55%] h-2.5 w-2.5 rounded-full bg-[#e8c878]/60' />
        </>
      )}

      {mode === 'dark' && (
        <>
          <div className='absolute left-[20%] top-[25%] h-2 w-2 rounded-full bg-[#d4bc7a]/60 blur-[1px]' />
          <div className='absolute right-[35%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#c9a86c]/50' />
          <div className='absolute bottom-[40%] left-[42%] h-2.5 w-2.5 rounded-full bg-[#d4bc7a]/40 blur-[0.5px]' />
        </>
      )}
    </div>
  )
}

export default function LeafBackground(): React.ReactElement {
  return (
    <div aria-hidden className='pointer-events-none fixed inset-0 z-0 overflow-hidden'>
      <BotanicalLayer mode='light' />
      <BotanicalLayer mode='dark' />
    </div>
  )
}
