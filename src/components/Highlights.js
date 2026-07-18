import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import AccountTreeIcon from "@mui/icons-material/AccountTree"
import InstallMobileIcon from "@mui/icons-material/InstallMobile"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"

const CARDS = [
     {
          icon: AccountTreeIcon,
          title: "Front-End Architecture",
          body: "Building scalable front-end systems with reusable components, clear state management patterns, and maintainable application structure.",
          color: "#6366F1",
          bg: "rgba(99,102,241,0.08)",
     },
     {
          icon: InstallMobileIcon,
          title: "Offline-First PWA",
          body: "Creating progressive web apps that work reliably offline, sync smoothly when connectivity returns, and support real-world field workflows.",
          color: "#06B6D4",
          bg: "rgba(6,182,212,0.08)",
     },
     {
          icon: PeopleAltIcon,
          title: "UX & Product Thinking",
          body: "Using research, user flows, and collaboration with design and product teams to turn complex requirements into practical user experiences.",
          color: "#8B5CF6",
          bg: "rgba(139,92,246,0.08)",
     },
     {
          icon: AutoAwesomeIcon,
          title: "Quality & Delivery",
          body: "Improving product quality through testing, automation, code review, and steady delivery across fast-moving product teams.",
          color: "#F59E0B",
          bg: "rgba(245,158,11,0.08)",
     },
]

export default function Highlights() {
     return (
          <Box
               component="section"
               sx={{
                    py: { xs: 10, md: 14 },
                    bgcolor: "background.default",
               }}
          >
               <Container maxWidth="lg">
                    <Grid container spacing={3}>
                         {CARDS.map(
                              ({ icon: Icon, title, body, color, bg }) => (
                                   <Grid item xs={12} sm={6} md={3} key={title}>
                                        <Box
                                             sx={{
                                                  p: 3.5,
                                                  height: "100%",
                                                  borderRadius: "16px",
                                                  border: "1px solid",
                                                  borderColor: "divider",
                                                  transition:
                                                       "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
                                                  "&:hover": {
                                                       borderColor: color,
                                                       boxShadow: `0 6px 18px ${color}18`,
                                                       transform:
                                                            "translateY(-2px)",
                                                  },
                                             }}
                                        >
                                             <Box
                                                  sx={{
                                                       width: 48,
                                                       height: 48,
                                                       borderRadius: 2.5,
                                                       bgcolor: bg,
                                                       display: "flex",
                                                       alignItems: "center",
                                                       justifyContent: "center",
                                                       mb: 2.5,
                                                  }}
                                             >
                                                  <Icon
                                                       sx={{
                                                            color,
                                                            fontSize: 24,
                                                       }}
                                                  />
                                             </Box>

                                             <Typography
                                                  variant="h6"
                                                  fontWeight={600}
                                                  sx={{
                                                       mb: 1,
                                                       fontSize: {
                                                            xs: "1rem",
                                                            md: "1.05rem",
                                                       },
                                                  }}
                                             >
                                                  {title}
                                             </Typography>

                                             <Typography
                                                  variant="body2"
                                                  color="text.secondary"
                                                  sx={{ lineHeight: 1.7 }}
                                             >
                                                  {body}
                                             </Typography>
                                        </Box>
                                   </Grid>
                              )
                         )}
                    </Grid>
               </Container>
          </Box>
     )
}
