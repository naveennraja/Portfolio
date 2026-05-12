import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import DescriptionIcon from '@mui/icons-material/Description'
import resume from '../documents/Naveen_N_Raja.pdf'

const CONTACTS = [
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/naveennraja',
    href: 'https://www.linkedin.com/in/naveennraja/',
    icon: LinkedInIcon,
  },
  {
    label: 'Email',
    value: 'naveennraja@gmail.com',
    href: 'mailto:naveennraja@gmail.com',
    icon: EmailIcon,
  },
  {
    label: 'Resume',
    value: 'Download PDF',
    href: resume,
    icon: DescriptionIcon,
  },
]

export default function Contacts() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: '#0F172A',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography
          variant="overline"
          sx={{ color: '#818CF8', fontWeight: 600, letterSpacing: '0.15em', display: 'block', mb: 1 }}
        >
          Contact
        </Typography>
        <Typography
          variant="h2"
          sx={{ mb: 2, color: '#FFFFFF', fontSize: { xs: '2rem', md: '2.75rem' } }}
        >
          Let&apos;s Get In Touch
        </Typography>
        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.5)', mb: 8 }}>
          Open to front-end and full-stack opportunities. Feel free to reach out.
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {CONTACTS.map(({ label, value, href, icon: Icon }) => (
            <Grid item xs={12} sm={4} key={label}>
              <Button
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1.5,
                  py: 4,
                  px: 3,
                  borderRadius: 3,
                  border: '1px solid rgba(255,255,255,0.08)',
                  bgcolor: 'rgba(255,255,255,0.03)',
                  color: 'rgba(255,255,255,0.7)',
                  textTransform: 'none',
                  transition: 'border-color 0.2s, background-color 0.2s',
                  '&:hover': {
                    bgcolor: 'rgba(99,102,241,0.1)',
                    borderColor: 'rgba(99,102,241,0.4)',
                    color: '#FFFFFF',
                  },
                }}
              >
                <Icon sx={{ fontSize: 32, color: '#818CF8' }} />
                <Box>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)', display: 'block', mb: 0.25 }}>
                    {label}
                  </Typography>
                  <Typography variant="body2" fontWeight={500}>
                    {value}
                  </Typography>
                </Box>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
