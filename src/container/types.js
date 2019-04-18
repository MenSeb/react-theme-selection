import { arrayOf } from 'prop-types'

const msgComponent = `Error from component ThemeContainer in prop themes`
const msgArray = `Type of theme should be array`
const msgLength = `Length of each theme should be 4`
const msgString = `Each color in theme should be of type string`
const msgHex = `Each color in theme should be a 3 or 6 length hex color code without #`
const regexpHex = /^(?:(?:[a-f0-9]{6})|(?:[a-f0-9]{3}))$/i

const msgTheme = ({ theme, index }) => `Invalid theme ${ theme } at index ${ index }`

const msgError = ({ theme, index, message }) => new Error( `
  ${ msgComponent }.
  ${ msgTheme({ theme, index }) }.
  ${ message }.
` )

export default {
  themes: arrayOf(
    ( themes, index ) =>
    {
      const theme = themes[ index ]

      if ( !Array.isArray( theme ) )
        return msgError({ theme, index, message: msgArray })

      if ( theme.length !== 4 )
        return msgError({ theme, index, message: msgLength })

      if ( theme.some( color => typeof color !== 'string' ) )
        return msgError({ theme, index, message: msgString })

      if ( theme.some( color => !regexpHex.test( color ) ) )
        return msgError({ theme, index, message: msgHex })
    }
  ).isRequired
}