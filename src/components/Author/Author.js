import React from 'react'

export default function ThemeAuthor ()
{
  return (
    <section className='ThemeAuthor'>
      <p>
        Made with
        <svg viewBox='-10 -10 20 20'>
          <title>love</title>
          <path d='M-8 0 a 4 4 0 0 1 8 -8 a 4 4 0 0 1 8 8 l-8 8 z' />
        </svg>
        by
        <a title='Github' href='https://github.com/MenSeb' target='_blank'>
          MenSeb
        </a>
      </p>
    </section>
  )
}