import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import BuildIcon from '@mui/icons-material/Build'

const INTERESTS = [
  { label: 'Listening to music', icon: <MusicNoteIcon sx={{ fontSize: 16 }} /> },
  { label: 'Reading books', icon: <MenuBookIcon sx={{ fontSize: 16 }} /> },
  { label: 'Creating quotes', icon: <FormatQuoteIcon sx={{ fontSize: 16 }} /> },
  { label: 'App building', icon: <BuildIcon sx={{ fontSize: 16 }} /> },
]

export default function About() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: '#F8FAFC',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="overline"
          sx={{
            color: 'primary.main',
            fontWeight: 600,
            letterSpacing: '0.15em',
            display: 'block',
            mb: 1,
          }}
        >
          About Me
        </Typography>
        <Typography variant="h2" sx={{ mb: 5, color: 'text.primary', fontSize: { xs: '2rem', md: '2.75rem' } }}>
          A little about who I am
        </Typography>

        <Grid container spacing={6} alignItems="flex-start">
          <Grid item xs={12} md={7}>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              I&apos;m a front-end developer with roots in digital advertising. Currently working as a
              Principal Engineer at Checkventory, I build progressive web applications and lead
              front-end architecture across the organisation.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Beyond writing code, I actively drive UX improvements — running research sessions,
              facilitating card sorting, defining personas and use cases, and translating insights
              into better product experiences. I believe great software starts with understanding
              the people who use it.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              My journey spans Bangalore to Dublin, from Associate Developer to Principal Engineer.
              I believe in writing code I&apos;m proud of and continuously pushing myself to learn and grow.
            </Typography>
          </Grid>

          <Grid item xs={12} md={5}>
            <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>
              When I&apos;m not coding
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              {INTERESTS.map(({ label, icon }) => (
                <Chip
                  key={label}
                  label={label}
                  icon={icon}
                  variant="outlined"
                  sx={{
                    borderColor: 'primary.light',
                    color: 'text.secondary',
                    '& .MuiChip-icon': { color: 'primary.main' },
                  }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
