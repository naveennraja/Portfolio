import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import DescriptionIcon from "@mui/icons-material/Description"
import resume from "../documents/Naveen_N_Raja.pdf"

const CONTACTS = [
     {
          label: "LinkedIn",
          value: "linkedin.com/in/naveennraja",
          href: "https://www.linkedin.com/in/naveennraja/",
          icon: LinkedInIcon,
     },
     {
          label: "Email",
          value: "naveennraja@gmail.com",
          href: "mailto:naveennraja@gmail.com",
          icon: EmailIcon,
     },
     {
          label: "Resume",
          value: "Download PDF",
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
                    bgcolor: "background.dark",
                    borderTop: "1px solid",
                    borderColor: "dividerOnDark",
               }}
          >
               <Container maxWidth="md" sx={{ textAlign: "center" }}>
                    <Typography
                         variant="overline"
                         sx={{
                              color: "primary.light",
                              fontWeight: 600,
                              letterSpacing: "0.15em",
                              display: "block",
                              mb: 1,
                         }}
                    >
                         Contact
                    </Typography>

                    <Typography
                         variant="h2"
                         sx={{
                              mb: 2,
                              color: "text.onDark",
                              fontSize: { xs: "2rem", md: "2.75rem" },
                         }}
                    >
                         Let&apos;s Connect
                    </Typography>

                    <Typography
                         variant="body1"
                         sx={{
                              color: "text.onDarkSecondary",
                              mb: 8,
                              maxWidth: 620,
                              mx: "auto",
                         }}
                    >
                         I&apos;m currently open to senior frontend and
                         full-stack opportunities. You can reach me by email,
                         connect on LinkedIn, or download my resume below.
                    </Typography>

                    <Grid container spacing={3} justifyContent="center">
                         {CONTACTS.map(({ label, value, href, icon: Icon }) => (
                              <Grid item xs={12} sm={4} key={label}>
                                   <Button
                                        component="a"
                                        href={href}
                                        target={
                                             label === "Resume"
                                                  ? undefined
                                                  : "_blank"
                                        }
                                        rel={
                                             label === "Resume"
                                                  ? undefined
                                                  : "noopener noreferrer"
                                        }
                                        download={
                                             label === "Resume"
                                                  ? true
                                                  : undefined
                                        }
                                        fullWidth
                                        sx={{
                                             display: "flex",
                                             flexDirection: "column",
                                             alignItems: "center",
                                             gap: 1.5,
                                             py: 4,
                                             px: 3,
                                             borderRadius: "16px",
                                             border: "1px solid",
                                             borderColor: "dividerOnDark",
                                             bgcolor: "rgba(255,255,255,0.03)",
                                             color: "text.onDarkSecondary",
                                             textTransform: "none",
                                             transition:
                                                  "border-color 0.2s, background-color 0.2s",
                                             "&:hover": {
                                                  bgcolor: "rgba(99,102,241,0.1)",
                                                  borderColor:
                                                       "rgba(99,102,241,0.4)",
                                                  color: "text.onDark",
                                             },
                                        }}
                                   >
                                        <Icon
                                             sx={{
                                                  fontSize: 32,
                                                  color: "primary.light",
                                             }}
                                        />

                                        <Box>
                                             <Typography
                                                  variant="caption"
                                                  sx={{
                                                       color: "text.onDarkMuted",
                                                       display: "block",
                                                       mb: 0.25,
                                                  }}
                                             >
                                                  {label}
                                             </Typography>

                                             <Typography
                                                  variant="body2"
                                                  fontWeight={500}
                                             >
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
