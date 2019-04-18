import React from 'react'

export default function ThemeDefs ()
{
  return (
    <svg className='ThemeDefs' aria-hidden={ true }>
      <defs>
        <symbol id='ThemeSquare' viewBox='0 0 4 4'>
          <path fill='var( --color-background )' d='M0 0 h4 v1.1 h-4 z' />
          <path fill='var( --color-border )' d='M0 1 h4 v1.1 h-4 z' />
          <path fill='var( --color-color )' d='M0 2 h4 v1.1 h-4 z' />
          <path fill='var( --color-hover )' d='M0 3 h4 v1 h-4 z' />
        </symbol>
      </defs>
    </svg>
  )
}