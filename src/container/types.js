import { arrayOf } from 'prop-types'

export default {
  themes: arrayOf(
    ( value, key, component, location, name ) =>
    {
      console.log({
        value,
        key,
        component,
        location,
        name
      });
    }
  ).isRequired
}