import { useVariablesCSS } from '..'

export default function useColors ({
  colors,
  preVar = 'color',
  preVal = '#',
  sepVal = '',
  ...options
})
{
  return useVariablesCSS({
    vars: colors,
    preVar,
    preVal,
    sepVal,
    ...options
  })
}