import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import MuiCustomTheme from './MuiCustomTheme'
import { LightDarkProvider } from './LightDarkContext'

function ThemeTopLevelProvider({ children, initTheme }) {
  const [mode, setMode] = useState(initTheme)

  const setTheme = useCallback(
    async (isDark) => {
      const val = isDark ? 'dark' : 'light'
      setMode(val)
    },
    [setMode]
  )

  useEffect(() => {
    localStorage.setItem('theme', mode)
  }, [mode])

  return (
    <MuiCustomTheme darkMode={mode === 'dark'}>
      <LightDarkProvider theme={mode} changeTheme={setTheme}>
        {children}
      </LightDarkProvider>
    </MuiCustomTheme>
  )
}

ThemeTopLevelProvider.propTypes = {
  children: PropTypes.node,
  initTheme: PropTypes.string.isRequired,
}

export default ThemeTopLevelProvider
