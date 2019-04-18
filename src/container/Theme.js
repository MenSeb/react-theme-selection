import React from 'react'
import propTypes from './types'
import { ThemeProvider } from '../context/Theme'
import { ThemeSelection, ThemeDefs } from '../components'

ThemeContainer.propTypes = propTypes

export default function ThemeContainer ({ themes })
{
  return (
    <ThemeProvider themes={ themes }>

      <ThemeDefs />

      <ThemeSelection />

    </ThemeProvider>
  )
}