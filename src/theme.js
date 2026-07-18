import { createTheme, responsiveFontSizes } from '@mui/material/styles'

// ---------------------------------------------------------------------------
// Design tokens
// Single source of truth for colors, radius and shadows. Components should
// reference these through the theme (e.g. `bgcolor: 'background.dark'`,
// `color: 'primary.lighter'`) rather than hardcoding hex/rgba values.
//
// `getDesignTokens(mode)` is written as a factory so a dark palette can be
// added later without touching component code — only the values below change.
// ---------------------------------------------------------------------------

// Brand accent ramp (indigo). Shared across light/dark modes.
const brand = {
  main: '#6366F1',
  light: '#818CF8',
  lighter: '#A5B4FC',
  dark: '#4F46E5',
  contrastText: '#FFFFFF',
}

const cyan = {
  main: '#06B6D4',
  light: '#22D3EE',
  dark: '#0891B2',
}

// Neutral surface used for the dark bands (hero, stats, quotes, contact, footer).
const INK = '#0F172A'

// Radius scale (px). Reference via `theme.shape.radius.*`.
const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  pill: 9999,
}

// Text tokens for content sitting on the always-dark bands (hero, stats,
// quotes, contact, footer). Identical in both modes since the surface is dark
// either way.
const onDarkText = {
  onDark: 'rgba(255,255,255,0.92)',
  onDarkSecondary: 'rgba(255,255,255,0.66)',
  onDarkMuted: 'rgba(255,255,255,0.55)',
}

const lightPalette = {
  background: {
    default: '#FFFFFF',
    paper: '#F8FAFC',
    // Custom token for the dark bands — reference as `bgcolor: 'background.dark'`.
    dark: INK,
  },
  text: {
    primary: '#0F172A',
    secondary: '#475569',
    ...onDarkText,
  },
  divider: '#E2E8F0',
  // Divider/border tint for use on the dark surface.
  dividerOnDark: 'rgba(255,255,255,0.1)',
}

const darkPalette = {
  background: {
    // Ordinary sections become the deep base; paper is a raised surface;
    // the "dark bands" go a shade deeper so the alternating rhythm survives.
    default: '#0F172A',
    paper: '#1E293B',
    dark: '#0B1120',
  },
  text: {
    primary: '#E2E8F0',
    secondary: '#94A3B8',
    ...onDarkText,
  },
  divider: 'rgba(255,255,255,0.09)',
  dividerOnDark: 'rgba(255,255,255,0.1)',
}

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: brand,
    secondary: cyan,
    ...(mode === 'dark' ? darkPalette : lightPalette),
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica Neue", Arial, sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.025em' },
    h2: { fontWeight: 700, letterSpacing: '-0.02em' },
    h3: { fontWeight: 700, letterSpacing: '-0.015em' },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { lineHeight: 1.75 },
    body2: { lineHeight: 1.6 },
  },
  shape: {
    borderRadius: radius.md,
    radius,
  },
})

const getComponents = (theme) => ({
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: theme.shape.radius.sm,
        padding: '10px 24px',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: theme.shape.radius.lg,
        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
        '&:hover': {
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          transform: 'translateY(-2px)',
        },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        fontWeight: 500,
        fontSize: '0.75rem',
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: { backgroundImage: 'none' },
    },
  },
})

export const createAppTheme = (mode = 'light') => {
  let theme = createTheme(getDesignTokens(mode))
  theme = createTheme(theme, { components: getComponents(theme) })
  return responsiveFontSizes(theme)
}

const theme = createAppTheme('light')

export default theme
