import React from 'react'

export default function ThemeDefs ()
{
  return (
    <svg className='ThemeDefs' aria-hidden={ true }>
      <defs>
        <symbol id='ThemeSquare' viewBox='0 0 4 4'>
          <path d='M0 0 h4 v1 h-4 z' />
          <path d='M0 1 h4 v1 h-4 z' />
          <path d='M0 2 h4 v1 h-4 z' />
          <path d='M0 3 h4 v1 h-4 z' />
        </symbol>
      </defs>
    </svg>
  )
}