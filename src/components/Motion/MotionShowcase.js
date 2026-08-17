import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import snowfall from '../../images/portfolio/snowfall.gif'
import customvideo from '../../images/portfolio/customvideo.gif'
import dior from '../../images/portfolio/dior.gif'

const PIECES = [
  {
    name: 'Dior — Interactive Campaign',
    giphy: dior,
    github: 'https://github.com/naveennraja/Dior',
    preview: 'https://naveennraja.github.io/Dior/',
  },
  {
    name: 'Snowfall — Seasonal Ad Unit',
    giphy: snowfall,
    github: 'https://github.com/naveennraja/Snowfall',
    preview: 'https://naveennraja.github.io/Snowfall/',
  },
  {
    name: 'Custom Video Player',
    giphy: customvideo,
    github: 'https://github.com/naveennraja/CustomVideo',
    preview: 'https://naveennraja.github.io/CustomVideo/',
  },
]

export default function MotionShowcase() {
  return (
    <Box
      component="section"
      sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.default' }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: '0.15em', display: 'block', mb: 1 }}
        >
          Motion
        </Typography>
        <Typography
          variant="h2"
          sx={{ mb: 2, color: 'text.primary', fontSize: { xs: '2rem', md: '2.75rem' } }}
        >
          Interactive Ad Units
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: 640 }}
        >
          Before product engineering, I spent years building animated, interactive
          ad experiences for major consumer brands — hand-tuned JavaScript and
          GSAP motion work running under tight rendering and load-time budgets.
          A few surviving pieces below.
        </Typography>

        <Grid container spacing={3}>
          {PIECES.map(({ name, giphy, github, preview }) => (
            <Grid item key={name} xs={12} sm={6} md={4}>
              <Box
                sx={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                  '&:hover': {
                    borderColor: 'primary.light',
                    boxShadow: '0 10px 24px rgba(0,0,0,0.1)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={giphy}
                  alt={name}
                  loading="lazy"
                  sx={{ width: '100%', height: 180, objectFit: 'cover', display: 'block', bgcolor: '#F8FAFC' }}
                />
                <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
                  <Typography variant="body2" fontWeight={600} sx={{ color: 'text.primary' }}>
                    {name}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 0.5, flexShrink: 0 }}>
                    <Tooltip title="GitHub">
                      <IconButton
                        size="small"
                        component="a"
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
                      >
                        <GitHubIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Live Demo">
                      <IconButton
                        size="small"
                        component="a"
                        href={preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: 'secondary.main' }}
                      >
                        <OpenInNewIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
