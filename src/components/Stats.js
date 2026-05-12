import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

const STATS = [
  { value: '10+', label: 'Years Experience' },
  { value: '3+', label: 'Apps Delivered' },
  { value: '15+', label: 'Projects Shipped' },
  { value: '3+', label: 'Countries' },
]

export default function Stats() {
  return (
    <Box
      sx={{
        py: { xs: 5, md: 6 },
        bgcolor: '#0F172A',
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          {STATS.map(({ value, label }, index) => (
            <Grid
              item
              xs={6}
              md={3}
              key={label}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                py: { xs: 3, md: 0 },
                // Right border divider except last item
                '&:not(:last-child)::after': {
                  content: '""',
                  position: 'absolute',
                  right: 0,
                  top: '20%',
                  height: '60%',
                  width: '1px',
                  bgcolor: 'rgba(255,255,255,0.08)',
                  display: { xs: 'none', md: 'block' },
                },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.2rem', md: '2.75rem' },
                  background: 'linear-gradient(135deg, #818CF8 0%, #06B6D4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                  mb: 1,
                }}
              >
                {value}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255,255,255,0.45)',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  fontSize: '0.7rem',
                }}
              >
                {label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
