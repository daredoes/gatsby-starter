/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react'

const LightDarkContext = createContext({
  theme: 'dark',
  changeTheme: (isDark: boolean) => null,
})

interface Props {
  theme: string
  changeTheme: (isDark: boolean) => null
}

const LightDarkProvider: React.FC<Props> = ({
  children,
  theme,
  changeTheme,
}) => {
  return (
    <LightDarkContext.Provider
      value={{
        theme: theme,
        changeTheme: changeTheme,
      }}
    >
      {children}
    </LightDarkContext.Provider>
  )
}
function useLightDark() {
  const context = useContext(LightDarkContext)
  if (context === undefined) {
    throw new Error('useLightDark must be used within a LightDarkProvider')
  }
  return context
}
export { LightDarkProvider, useLightDark }
