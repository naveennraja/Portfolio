import React from 'react'
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
import theme from '../theme'

export default function MainLayout({ children }) {
  return (
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
            bgcolor: '#0F172A',
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
                  color: 'rgba(255,255,255,0.35)',
                  '&:hover': { color: '#818CF8' },
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
                  color: 'rgba(255,255,255,0.35)',
                  '&:hover': { color: '#818CF8' },
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)' }}>
            &copy; {new Date().getFullYear()} Naveen Nata Raja
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
