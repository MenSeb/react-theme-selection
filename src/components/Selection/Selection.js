import React, { useContext } from 'react'
import { ThemeContext } from '../../context/Theme'
import { ThemePalette } from '..'

export default function ThemeSelection ()
{
  const { themes, updateTheme } = useContext( ThemeContext )

  return (
    <section className='ThemeSelection'>
      <ul className='Themes' onClick={ updateTheme }>
      {
        themes.map(
          ([ id, theme ]) => (
            <li id={ id } key={ id } className='Theme'>
              <ThemePalette theme={ theme } />
            </li>
          )
        )
      }
      </ul>
    </section>
  )
}