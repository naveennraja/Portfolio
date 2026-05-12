import { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    const offset = 72
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 80 })

  // Track active section via IntersectionObserver
  useEffect(() => {
    if (typeof window === 'undefined') return
    const ids = NAV_ITEMS.map((n) => n.id)
    const observers = []
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleNavClick = (id) => {
    scrollToSection(id)
    setDrawerOpen(false)
  }

  return (
    <>
      {/* ── Navigation Bar ── */}
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          bgcolor: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
        }}
      >
        <Toolbar sx={{ maxWidth: 'lg', mx: 'auto', width: '100%', px: { xs: 2, md: 4 } }}>
          <Typography
            variant="h6"
            component="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            sx={{
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              p: 0,
              flexGrow: 1,
            }}
          >
            NR
          </Typography>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                sx={{
                  color: activeSection === item.id ? '#818CF8' : 'rgba(255,255,255,0.75)',
                  fontWeight: activeSection === item.id ? 600 : 500,
                  fontSize: '0.875rem',
                  '&:hover': { color: '#FFFFFF', bgcolor: 'rgba(255,255,255,0.05)' },
                  transition: 'color 0.2s',
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            sx={{ display: { md: 'none' }, color: '#FFFFFF' }}
            onClick={() => setDrawerOpen(true)}
            aria-label="open menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* ── Mobile Drawer ── */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 260, bgcolor: '#0F172A' } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'rgba(255,255,255,0.6)' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {NAV_ITEMS.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                onClick={() => handleNavClick(item.id)}
                sx={{
                  py: 1.5,
                  px: 3,
                  '&:hover': { bgcolor: 'rgba(99,102,241,0.1)' },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: activeSection === item.id ? 600 : 400,
                    color: activeSection === item.id ? '#818CF8' : 'rgba(255,255,255,0.8)',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* ── Hero Section ── */}
      <Box
        component="header"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#0F172A',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.25) 0%, transparent 70%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 1, py: 12 }}>
          <Typography
            variant="body1"
            sx={{
              color: '#818CF8',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontSize: '0.8rem',
              mb: 2,
            }}
          >
            Hi, I&apos;m
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', sm: '4.5rem', md: '6rem' },
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.05,
              mb: 2,
            }}
          >
            Naveen Raja
          </Typography>

          <Box
            sx={{
              width: 60,
              height: 3,
              bgcolor: 'primary.main',
              mx: 'auto',
              borderRadius: 2,
              mb: 3,
            }}
          />

          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 400,
              mb: 1,
            }}
          >
            Principal Engineer
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.45)',
              mb: 5,
            }}
          >
            Checkventory
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => handleNavClick('projects')}
              sx={{
                bgcolor: 'primary.main',
                '&:hover': { bgcolor: 'primary.dark' },
                px: 4,
              }}
            >
              View My Work
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => handleNavClick('contact')}
              sx={{
                borderColor: 'rgba(255,255,255,0.3)',
                color: 'rgba(255,255,255,0.85)',
                '&:hover': {
                  borderColor: 'rgba(255,255,255,0.6)',
                  bgcolor: 'rgba(255,255,255,0.05)',
                },
                px: 4,
              }}
            >
              Get In Touch
            </Button>
          </Box>
        </Container>

        {/* Scroll indicator */}
        <Box
          component="button"
          onClick={() => handleNavClick('about')}
          aria-label="Scroll to about section"
          sx={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
            color: 'rgba(255,255,255,0.3)',
            background: 'none',
            border: 'none',
            p: 0,
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
              '50%': { transform: 'translateX(-50%) translateY(8px)' },
            },
            '&:hover': { color: 'rgba(255,255,255,0.6)' },
            '&:focus-visible': { outline: '2px solid rgba(255,255,255,0.4)', borderRadius: 1 },
          }}
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </Box>
      </Box>
    </>
  )
}
