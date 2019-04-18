import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef
} from 'react'
import uid from 'uniqid'

const ThemeContext = createContext()

const { Consumer: ThemeConsumer, Provider } = ThemeContext

function ThemeProvider ({ themes, ...props })
{
  const refRoot = useRef()

  const { current: colors } = useRef([ 'background', 'border', 'color', 'hover' ])

  const THEMES = useMemo(
    () => themes.reduce(
      ( obj, theme ) => ({
        ...obj,
        [ uid() ]: theme
      }),
      {}
    ),
    [ themes ]
  )

  const listThemes = useMemo( () => Object.entries( THEMES ), [ THEMES ] )

  const styleTheme = useCallback(
    ( color, index ) =>
    {
      const { current: root } = refRoot

      root.style.setProperty(
        `--color-${ colors[ index ] }`,
        `#${ color }`
      )
    },
    []
  )

  const updateTheme = useCallback(
    ({ target: { id } }) => THEMES[ id ].forEach( styleTheme ),
    []
  )

  useEffect(
    () =>
    {
      refRoot.current = document.querySelector( ':root' )
    },
    []
  )

  return (
    <Provider { ...props } value={{ updateTheme, themes: listThemes }} />
  )
}

export {
  ThemeConsumer,
  ThemeContext,
  ThemeProvider,
}