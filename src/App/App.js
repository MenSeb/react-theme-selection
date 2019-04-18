import React from 'react'
import ThemeContainer from '../container'
import { THEMES } from '../constants'
import {
  ThemeAuthor,
  ThemeBrand,
  ThemeLogo,
  ThemeViewer
} from '../components';

export default function App ()
{
  return (
    <div className='App'>
      <header>
        <ThemeLogo />
        <ThemeBrand />
      </header>

      <main>
        <ThemeViewer />
        <ThemeContainer themes={ THEMES } />
      </main>

      <footer>
        <ThemeAuthor />
      </footer>
    </div>
  )
}