import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import StarIcon from '@mui/icons-material/Star'

const JOURNEY = [
  {
    title: 'Principal Engineer',
    org: 'Checkventory',
    period: '2021 — Present',
    description: 'Leading front-end development across multiple projects at a inventory management SaaS company. Driving bi-weekly sprint releases, owning the front-end architecture, and collaborating across teams to ship quality product continuously.',
    type: 'work',
    highlight: true,
  },
  {
    title: 'Security Officer (Part Time)',
    org: 'Bidvest Noonan',
    period: 'Oct 2019 — Jul 2021',
    description: 'Worked part time while completing Masters, maintaining focus on front-end development.',
    type: 'work',
  },
  {
    title: 'M.Sc Advanced Software Development',
    org: 'University',
    period: 'Sep 2018 — Oct 2019',
    description: 'Pursued a Masters degree to deepen expertise in software engineering.',
    type: 'education',
  },
  {
    title: 'Team Lead',
    org: 'Jivox',
    period: 'Aug 2016 — Aug 2018',
    description: 'Grew into a leadership role — management and front-end development combined with a small team.',
    type: 'work',
  },
  {
    title: 'Widget Engineer',
    org: 'Jivox',
    period: 'Jul 2014 — Jul 2016',
    description: 'First career move to explore JavaScript more deeply. Joined as a Widget Engineer.',
    type: 'work',
  },
  {
    title: 'Associate Developer',
    org: 'Exilant Technologies',
    period: 'Aug 2012 — Jul 2014',
    description: 'Began professional career. Trained on multiple technologies and chose front-end as my path.',
    type: 'work',
  },
  {
    title: 'B.Sc Computer Science',
    org: 'University',
    period: 'Aug 2009 — Jul 2012',
    description: 'Bachelors degree in Computer Science — building the foundation.',
    type: 'education',
  },
  {
    title: 'Diploma in Computer Science',
    org: 'College',
    period: 'Jul 2005 — Jan 2009',
    description: 'Where it all began — a diploma in Computer Science.',
    type: 'education',
  },
]

function JourneyDot({ type, highlight }) {
  if (highlight) {
    return (
      <TimelineDot sx={{ bgcolor: 'primary.main', boxShadow: '0 0 0 4px rgba(99,102,241,0.2)' }}>
        <StarIcon sx={{ fontSize: 16 }} />
      </TimelineDot>
    )
  }
  if (type === 'education') {
    return (
      <TimelineDot variant="outlined" sx={{ borderColor: 'secondary.main', color: 'secondary.main' }}>
        <SchoolIcon sx={{ fontSize: 16 }} />
      </TimelineDot>
    )
  }
  return (
    <TimelineDot variant="outlined" sx={{ borderColor: 'primary.main', color: 'primary.main' }}>
      <WorkIcon sx={{ fontSize: 16 }} />
    </TimelineDot>
  )
}

export default function Journey() {
  return (
    <Box
      component="section"
      id="experience"
      sx={{ py: { xs: 10, md: 14 }, bgcolor: '#FFFFFF' }}
    >
      <Container maxWidth="md">
        <Typography
          variant="overline"
          sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: '0.15em', display: 'block', mb: 1 }}
        >
          Career
        </Typography>
        <Typography
          variant="h2"
          sx={{ mb: 8, color: 'text.primary', fontSize: { xs: '2rem', md: '2.75rem' } }}
        >
          My Journey
        </Typography>

        <Timeline position="alternate">
          {JOURNEY.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: 'auto 0', color: 'text.secondary', fontSize: '0.8rem', fontWeight: 500 }}
                variant="body2"
              >
                {item.period}
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'divider' }} />
                <JourneyDot type={item.type} highlight={item.highlight} />
                <TimelineConnector sx={{ bgcolor: 'divider' }} />
              </TimelineSeparator>

              <TimelineContent sx={{ py: '16px', px: 2 }}>
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: 3,
                    bgcolor: '#F8FAFC',
                    border: '1px solid',
                    borderColor: item.highlight ? 'primary.light' : 'divider',
                    transition: 'box-shadow 0.2s',
                    '&:hover': {
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    },
                  }}
                >
                  <Typography variant="subtitle1" fontWeight={600} color="text.primary">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="primary.main" fontWeight={500} sx={{ mb: 0.5 }}>
                    {item.org}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  )
}
