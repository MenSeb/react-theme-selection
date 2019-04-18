import React from 'react'
import { useColors } from '../../hooks'

export default function ThemePalette ({
  theme: [
    background,
    border,
    color,
    hover
  ],
  ...props
})
{
  const colorsStyle = useColors({
    colors: { background, border, color, hover }
  })

  return (
    <svg
      { ...props }
      className='ThemePalette'
      role='button'
      style={ colorsStyle }
      viewBox='0 0 4 4'
    >
      <use xlinkHref='#ThemeSquare' aria-hidden={ true } />
    </svg>
  )
}