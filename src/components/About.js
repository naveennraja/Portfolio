import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Chip from "@mui/material/Chip"
import MusicNoteIcon from "@mui/icons-material/MusicNote"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import BuildIcon from "@mui/icons-material/Build"

const INTERESTS = [
     {
          label: "Listening to music",
          icon: <MusicNoteIcon sx={{ fontSize: 16 }} />,
     },
     { label: "Reading books", icon: <MenuBookIcon sx={{ fontSize: 16 }} /> },
     {
          label: "Writing quotes",
          icon: <FormatQuoteIcon sx={{ fontSize: 16 }} />,
     },
     {
          label: "Building side projects",
          icon: <BuildIcon sx={{ fontSize: 16 }} />,
     },
]

export default function About() {
     return (
          <Box
               component="section"
               id="about"
               sx={{
                    py: { xs: 10, md: 14 },
                    bgcolor: "background.paper",
               }}
          >
               <Container maxWidth="md">
                    <Typography
                         variant="overline"
                         sx={{
                              color: "primary.main",
                              fontWeight: 600,
                              letterSpacing: "0.15em",
                              display: "block",
                              mb: 1,
                         }}
                    >
                         About Me
                    </Typography>
                    <Typography
                         variant="h2"
                         sx={{
                              mb: 5,
                              color: "text.primary",
                              fontSize: { xs: "2rem", md: "2.75rem" },
                         }}
                    >
                         A little about me
                    </Typography>

                    <Grid container spacing={6} alignItems="flex-start">
                         <Grid item xs={12} md={7}>
                              <Typography
                                   variant="body1"
                                   color="text.secondary"
                                   sx={{ mb: 3 }}
                              >
                                   I&apos;m a frontend-focused software engineer
                                   based in Ireland, with experience building
                                   React and TypeScript applications for
                                   inventory and workflow-driven products. My
                                   work spans front-end architecture,
                                   progressive web apps, offline-first
                                   experiences, and building interfaces that
                                   stay reliable in real-world conditions.
                              </Typography>
                              <Typography
                                   variant="body1"
                                   color="text.secondary"
                                   sx={{ mb: 3 }}
                              >
                                   Alongside delivery, I care deeply about
                                   product quality and usability. I&apos;ve
                                   worked on improving user flows through
                                   testing, automation, UX research, and close
                                   collaboration with designers, QA, and product
                                   teams to turn complex requirements into
                                   practical, user-friendly solutions.
                              </Typography>
                              <Typography
                                   variant="body1"
                                   color="text.secondary"
                              >
                                   Over the years, my journey has taken me from
                                   Bangalore to Dublin and from early UI
                                   development into senior front-end and
                                   full-stack engineering responsibilities. I
                                   enjoy solving meaningful product problems,
                                   mentoring where I can, and continuously
                                   improving how software is designed, built,
                                   and shipped.
                              </Typography>
                         </Grid>

                         <Grid item xs={12} md={5}>
                              <Typography
                                   variant="h6"
                                   sx={{ mb: 2, color: "text.primary" }}
                              >
                                   Outside of work
                              </Typography>
                              <Box
                                   sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 1.5,
                                   }}
                              >
                                   {INTERESTS.map(({ label, icon }) => (
                                        <Chip
                                             key={label}
                                             label={label}
                                             icon={icon}
                                             variant="outlined"
                                             sx={{
                                                  borderColor: "primary.light",
                                                  color: "text.secondary",
                                                  "& .MuiChip-icon": {
                                                       color: "primary.main",
                                                  },
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
