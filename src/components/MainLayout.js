import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import Header from './Header/Header'
import { createAppTheme } from '../theme'
import { ColorModeContext, STORAGE_KEY } from '../color-mode'

export default function MainLayout({ children }) {
  // Start in light for a stable SSR/first paint, then reconcile with the
  // stored choice / system preference after hydration.
  const [mode, setMode] = useState('light')

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') {
      setMode(stored)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setMode('dark')
    }
  }, [])

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () =>
        setMode((prev) => {
          const next = prev === 'light' ? 'dark' : 'light'
          window.localStorage.setItem(STORAGE_KEY, next)
          return next
        }),
    }),
    [mode]
  )

  const theme = useMemo(() => createAppTheme(mode), [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box id="page-top" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box component="main" sx={{ flex: 1 }}>
          {children}
        </Box>
        <Box
          component="footer"
          sx={{
            py: 4,
            bgcolor: 'background.dark',
            textAlign: 'center',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 1.5 }}>
            <Tooltip title="LinkedIn">
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/naveennraja/"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: 'text.onDarkMuted',
                  '&:hover': { color: 'primary.light' },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="GitHub">
              <IconButton
                component="a"
                href="https://github.com/naveennraja"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: 'text.onDarkMuted',
                  '&:hover': { color: 'primary.light' },
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
          <Typography variant="body2" sx={{ color: 'text.onDarkMuted' }}>
            &copy; {new Date().getFullYear()} Naveen Nata Raja
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
