import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

const STATS = [
     { value: "5+", label: "Years with React" },
     { value: "6+", label: "Years with JavaScript" },
     { value: "15+", label: "Projects Delivered" },
     { value: "PWA", label: "Offline-First Experience" },
]

export default function Stats() {
     return (
          <Box
               sx={{
                    py: { xs: 5, md: 6 },
                    bgcolor: "#0F172A",
               }}
          >
               <Container maxWidth="lg">
                    <Grid container>
                         {STATS.map(({ value, label }) => (
                              <Grid
                                   item
                                   xs={6}
                                   md={3}
                                   key={label}
                                   sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        textAlign: "center",
                                        position: "relative",
                                        py: { xs: 3, md: 0 },
                                        "&:not(:last-child)::after": {
                                             content: '""',
                                             position: "absolute",
                                             right: 0,
                                             top: "20%",
                                             height: "60%",
                                             width: "1px",
                                             bgcolor: "rgba(255,255,255,0.08)",
                                             display: {
                                                  xs: "none",
                                                  md: "block",
                                             },
                                        },
                                   }}
                              >
                                   <Typography
                                        variant="h3"
                                        sx={{
                                             fontWeight: 800,
                                             fontSize: {
                                                  xs: "2.1rem",
                                                  md: "2.5rem",
                                             },
                                             color: "#A5B4FC",
                                             lineHeight: 1,
                                             mb: 1,
                                        }}
                                   >
                                        {value}
                                   </Typography>

                                   <Typography
                                        variant="body2"
                                        sx={{
                                             color: "rgba(255,255,255,0.55)",
                                             fontWeight: 500,
                                             letterSpacing: "0.04em",
                                             textTransform: "uppercase",
                                             fontSize: "0.72rem",
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
