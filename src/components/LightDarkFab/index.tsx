import React, { useMemo, useCallback } from 'react'
import { Fab, NoSsr } from '@material-ui/core'
import { useLightDark } from 'plugins/gatsby-plugin-theme/LightDarkContext'

import SunnyIcon from '@material-ui/icons/WbSunny'
import NightIcon from '@material-ui/icons/Brightness3'

function LightDarkFab(props) {
  const { theme, changeTheme } = useLightDark()

  const handleClick = useCallback(() => {
    changeTheme(!(theme === 'dark'))
  }, [theme, changeTheme])

  const fabColor = useMemo(() => {
    return theme === 'dark' ? 'primary' : 'default'
  }, [theme])

  const FabIcon = useMemo(() => {
    return theme === 'dark' ? NightIcon : SunnyIcon
  }, [theme])

  return (
    <NoSsr>
      <Fab
        color={fabColor}
        size='medium'
        onClick={handleClick}
        aria-label='Toggle light or dark mode'
        {...props}
      >
        <FabIcon />
      </Fab>
    </NoSsr>
  )
}

export default LightDarkFab
