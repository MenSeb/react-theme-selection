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
    <svg className='ThemePalette' style={ colorsStyle } role='button'>
      <use xlinkHref='#ThemeSquare' aria-hidden={ true } />
    </svg>
  )
}