import { useCallback } from 'react'

export default function useLocalStorage ()
{
  const setLocalStorage = useCallback(
    ({ key, value, raw = false }) => localStorage.setItem(
      key,
      raw ? value : JSON.stringify( value )
    ),
    [],
  )

  const getLocalStorage = useCallback(
    ({ key, raw = false }) =>
    {
      const item = localStorage.getItem( key )

      return raw ? item : JSON.parse( item )
    },
    [],
  )

  const clearLocalStorage = useCallback( () => localStorage.clear(), [] )

  return { clearLocalStorage, getLocalStorage, setLocalStorage }
}