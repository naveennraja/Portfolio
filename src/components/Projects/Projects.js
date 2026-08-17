import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import GitHubIcon from '@mui/icons-material/GitHub'
import VisibilityIcon from '@mui/icons-material/Visibility'
import CloseIcon from '@mui/icons-material/Close'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import LockIcon from '@mui/icons-material/Lock'
import ProjectList from './ProjectsList'

export default function Projects() {
  const [preview, setPreview] = useState(null)

  const projects = Object.entries(ProjectList)

  return (
    <Box
      component="section"
      id="projects"
      sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.default' }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: '0.15em', display: 'block', mb: 1 }}
        >
          Work
        </Typography>
        <Typography
          variant="h2"
          sx={{ mb: 8, color: 'text.primary', fontSize: { xs: '2rem', md: '2.75rem' } }}
        >
          Projects
        </Typography>

        <Grid container spacing={3}>
          {projects.map(([name, { technologies, giphy, github, preview: liveUrl, description, private: isPrivate }]) => (
            <Grid item key={name} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                {/* Image or placeholder */}
                {giphy ? (
                  <CardMedia
                    component="img"
                    image={giphy}
                    alt={name}
                    loading="lazy"
                    sx={{ height: 180, objectFit: 'cover', bgcolor: '#F8FAFC' }}
                  />
                ) : (
                  <Box
                    sx={{
                      height: 180,
                      background: 'linear-gradient(135deg, #EEF2FF 0%, #E0F2FE 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                    }}
                  >
                    <LockIcon sx={{ fontSize: 32, color: 'primary.light', opacity: 0.6 }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                      Private — Professional Work
                    </Typography>
                  </Box>
                )}

                <CardContent sx={{ flex: 1, pb: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                    <Typography variant="h6" fontWeight={600}>
                      {name}
                    </Typography>
                  </Box>
                  {description && (
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, lineHeight: 1.6 }}>
                      {description}
                    </Typography>
                  )}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 1 }}>
                    {technologies.map((techSrc, i) => (
                      <Box
                        key={i}
                        component="img"
                        src={techSrc}
                        alt=""
                        sx={{ width: 22, height: 22, objectFit: 'contain', opacity: 0.8 }}
                      />
                    ))}
                  </Box>
                </CardContent>

                <CardActions sx={{ px: 2, pb: 2, gap: 0.5 }}>
                  {giphy && (
                    <Tooltip title="Preview">
                      <IconButton
                        size="small"
                        onClick={() => setPreview({ name, giphy })}
                        sx={{ color: 'primary.main' }}
                      >
                        <VisibilityIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  )}
                  {github && (
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
                  )}
                  {liveUrl && (
                    <Tooltip title="Live Demo">
                      <IconButton
                        size="small"
                        component="a"
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: 'secondary.main' }}
                      >
                        <OpenInNewIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Preview Dialog */}
      <Dialog
        open={Boolean(preview)}
        onClose={() => setPreview(null)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            maxHeight: '80vh',
            my: '10vh',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        {preview && (
          <>
            <DialogTitle
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pb: 1,
              }}
            >
              <Typography variant="h6" fontWeight={600}>
                {preview.name}
              </Typography>
              <IconButton onClick={() => setPreview(null)} size="small">
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent
              sx={{
                p: 0,
                flex: '1 1 auto',
                minHeight: 0,
                display: 'flex',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  minHeight: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="img"
                  src={preview.giphy}
                  alt={preview.name}
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  )
}
