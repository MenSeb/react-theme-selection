import React from 'react'
import { useColors } from '../../hooks'

export default function ThemePalette ({
  theme: [
    background,
    border,
    color,
    hover
  ]
})
{
  const colorsStyle = useColors({
    colors: { background, border, color, hover }
  })

  return (
    <svg
      className='ThemePalette'
      role='button'
      style={ colorsStyle }
      viewBox='0 0 4 4'
    >
      <use xlinkHref='#ThemeSquare' aria-hidden={ true } />
    </svg>
  )
}