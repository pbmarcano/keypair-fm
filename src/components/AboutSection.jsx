'use client'

import { useState } from 'react'
import clsx from 'clsx'

import { TinyWaveFormIcon } from '@/components/TinyWaveFormIcon'

export function AboutSection(props) {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <section {...props}>
      <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
        <TinyWaveFormIcon
          colors={['fill-violet-300', 'fill-indigo-300']}
          className="h-2.5 w-2.5"
        />
        <span className="ml-2.5">About</span>
      </h2>
      <p
        className={clsx(
          'mt-2 text-base leading-7 text-slate-700',
          !isExpanded && 'lg:line-clamp-4',
        )}
      >
        In this show, Pete and Rob explore building apps on the crypto web,
        where users take back full control of their data and privacy. Tune 
        in Mondays to learn how Bitcoin, Lightning, and Nostr lay the 
        foundations for a free and open internet, and how developers can 
        leverage them to build next-generation apps.
      </p>
      {!isExpanded && (
        <button
          type="button"
          className="mt-2 hidden text-sm font-bold leading-6 text-indigo-500 hover:text-indigo-700 active:text-indigo-900 lg:inline-block"
          onClick={() => setIsExpanded(true)}
        >
          Show more
        </button>
      )}
    </section>
  )
}
