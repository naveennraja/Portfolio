import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import InstallMobileIcon from '@mui/icons-material/InstallMobile'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

const CARDS = [
  {
    icon: AccountTreeIcon,
    title: 'Front-End Architecture',
    body: 'Designing scalable, maintainable front-end systems — component libraries, state patterns, and performance-first builds.',
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.08)',
  },
  {
    icon: InstallMobileIcon,
    title: 'PWA Development',
    body: 'Building progressive web apps that work offline, install to home screen, and meet modern web performance standards.',
    color: '#06B6D4',
    bg: 'rgba(6,182,212,0.08)',
  },
  {
    icon: PeopleAltIcon,
    title: 'UX Research',
    body: 'Conducting user interviews, card sorting, and diary studies to turn real user insights into better product decisions.',
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.08)',
  },
  {
    icon: AutoAwesomeIcon,
    title: 'AI-Augmented Workflow',
    body: 'Leveraging Claude, ChatGPT, Perplexity and UXpilot to accelerate design decisions, code reviews and research synthesis.',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
  },
]

export default function Highlights() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: '#FFFFFF',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {CARDS.map(({ icon: Icon, title, body, color, bg }) => (
            <Grid item xs={12} sm={6} md={3} key={title}>
              <Box
                sx={{
                  p: 3.5,
                  height: '100%',
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                  '&:hover': {
                    borderColor: color,
                    boxShadow: `0 8px 24px ${color}22`,
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2.5,
                    bgcolor: bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2.5,
                  }}
                >
                  <Icon sx={{ color, fontSize: 24 }} />
                </Box>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 1, fontSize: '1rem' }}>
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {body}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
