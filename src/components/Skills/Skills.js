import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'
import LayersIcon from '@mui/icons-material/Layers'
import InstallMobileIcon from '@mui/icons-material/InstallMobile'
import StorageIcon from '@mui/icons-material/Storage'
import RepeatIcon from '@mui/icons-material/Repeat'
import MergeTypeIcon from '@mui/icons-material/MergeType'
import ApiIcon from '@mui/icons-material/Api'
import DataObjectIcon from '@mui/icons-material/DataObject'
import BuildIcon from '@mui/icons-material/Build'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import TheatersIcon from '@mui/icons-material/Theaters'
import GroupIcon from '@mui/icons-material/Group'
import AssignmentIcon from '@mui/icons-material/Assignment'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import skillImages from './SkillList'

const CATEGORY_LABELS = {
  html: 'Markup & Templating',
  css: 'Styling',
  javascript: 'JavaScript Ecosystem',
  tools: 'Tools & IDEs',
}

// Each item is either { label, icon } or { label, avatar: { letter, color } }
const CHIP_SKILL_SECTIONS = [
  {
    key: 'libraries',
    label: 'Libraries & Frameworks',
    skills: [
      { label: 'Material UI (MUI 5)', icon: <LayersIcon sx={{ fontSize: 16 }} /> },
      { label: 'Redux', icon: <RepeatIcon sx={{ fontSize: 16 }} /> },
      { label: 'Progressive Web Apps', icon: <InstallMobileIcon sx={{ fontSize: 16 }} /> },
      { label: 'IndexedDB', icon: <StorageIcon sx={{ fontSize: 16 }} /> },
    ],
  },
  {
    key: 'devtools',
    label: 'Dev Tools & Workflow',
    skills: [
      { label: 'TypeScript', icon: <DataObjectIcon sx={{ fontSize: 16 }} /> },
      { label: 'Git', icon: <MergeTypeIcon sx={{ fontSize: 16 }} /> },
      { label: 'REST APIs', icon: <ApiIcon sx={{ fontSize: 16 }} /> },
      { label: 'Webpack', icon: <BuildIcon sx={{ fontSize: 16 }} /> },
    ],
  },
  {
    key: 'ux',
    label: 'UX Research & Design',
    skills: [
      { label: 'Card Sorting', icon: <DashboardIcon sx={{ fontSize: 16 }} /> },
      { label: 'Workflow Diagrams', icon: <AccountTreeIcon sx={{ fontSize: 16 }} /> },
      { label: 'Scenarios', icon: <TheatersIcon sx={{ fontSize: 16 }} /> },
      { label: 'Personas', icon: <GroupIcon sx={{ fontSize: 16 }} /> },
      { label: 'Use Cases', icon: <AssignmentIcon sx={{ fontSize: 16 }} /> },
      { label: 'User Interviews', icon: <RecordVoiceOverIcon sx={{ fontSize: 16 }} /> },
      { label: 'Diary Study', icon: <AutoStoriesIcon sx={{ fontSize: 16 }} /> },
    ],
  },
]

const chipSx = {
  bgcolor: '#FFFFFF',
  border: '1px solid',
  borderColor: 'divider',
  color: 'text.secondary',
  fontWeight: 500,
  fontSize: '0.8rem',
  height: 36,
  borderRadius: 2,
  transition: 'border-color 0.2s, box-shadow 0.2s',
  '& .MuiChip-icon': { color: 'primary.main' },
  '&:hover': {
    borderColor: 'primary.light',
    boxShadow: '0 4px 12px rgba(99,102,241,0.1)',
    bgcolor: '#FFFFFF',
  },
}

export default function Skills() {
  return (
    <Box
      component="section"
      id="skills"
      sx={{ py: { xs: 10, md: 14 }, bgcolor: '#F8FAFC' }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: '0.15em', display: 'block', mb: 1 }}
        >
          Technology
        </Typography>
        <Typography
          variant="h2"
          sx={{ mb: 8, color: 'text.primary', fontSize: { xs: '2rem', md: '2.75rem' } }}
        >
          Skills
        </Typography>

        {/* Logo grid sections */}
        {Object.keys(skillImages).map((category) => (
          <Box key={category} sx={{ mb: 6 }}>
            <SectionLabel>{CATEGORY_LABELS[category] || category}</SectionLabel>
            <Grid container spacing={2}>
              {Object.entries(skillImages[category]).map(([name, src]) => (
                <Grid item key={name} xs={4} sm={3} md={2}>
                  <Tooltip title={name} placement="top" arrow>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1.5,
                        p: 2.5,
                        borderRadius: 3,
                        bgcolor: '#FFFFFF',
                        border: '1px solid',
                        borderColor: 'divider',
                        cursor: 'default',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                        '&:hover': {
                          borderColor: 'primary.light',
                          boxShadow: '0 4px 12px rgba(99,102,241,0.1)',
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={src}
                        alt={name}
                        sx={{ width: 40, height: 40, objectFit: 'contain' }}
                      />
                      <Typography
                        variant="caption"
                        sx={{ color: 'text.secondary', fontWeight: 500, textAlign: 'center', lineHeight: 1.2 }}
                      >
                        {name}
                      </Typography>
                    </Box>
                  </Tooltip>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}

        {/* Chip sections: Libraries & UX */}
        {CHIP_SKILL_SECTIONS.map(({ key, label, skills }) => (
          <Box key={key} sx={{ mb: 6 }}>
            <SectionLabel>{label}</SectionLabel>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              {skills.map(({ label: skillLabel, icon }) => (
                <Chip key={skillLabel} label={skillLabel} icon={icon} sx={chipSx} />
              ))}
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  )
}

function SectionLabel({ children }) {
  return (
    <Typography
      variant="overline"
      sx={{
        color: 'text.secondary',
        fontWeight: 600,
        letterSpacing: '0.12em',
        fontSize: '0.7rem',
        display: 'block',
        mb: 3,
        pl: 0.5,
      }}
    >
      {children}
    </Typography>
  )
}
