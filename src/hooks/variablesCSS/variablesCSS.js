import { useCallback, useMemo } from 'react'

export default function useVariablesCSS ({
  vars,
  preVar,
  sufVar,
  preVal,
  sufVal,
  sepVar = '-',
  sepVal = '-'
})
{
  const prefix = useCallback(
    ( data, pre, sep ) => pre ? `${ pre }${ sep }${ data }` : data,
    []
  )

  const suffix = useCallback(
    ( data, suf, sep ) => suf ? `${ data }${ sep }${ suf }` : data,
    []
  )

  const format = useCallback(
    ( data, pre, suf, sep ) => suffix( prefix( data, pre, sep ), suf, sep ),
    []
  )

  const variables = useMemo( () => Object.entries( vars ), [ vars ] )

  const style = useMemo(
    () => variables.reduce(
      ( obj, [ _var, _val ] ) =>
      {
        const variable = format( _var, preVar, sufVar, sepVar )
        const value = format( _val, preVal, sufVal, sepVal )

        return {
          ...obj,
          [ `--${ variable }` ]: value
        }
      },
      {}
    ),
    [ variables, preVar, sufVar, sepVar, preVal, sufVal, sepVal ]
  )

  return style
}