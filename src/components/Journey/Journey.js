import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineDot from "@mui/lab/TimelineDot"
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"
import WorkIcon from "@mui/icons-material/Work"
import SchoolIcon from "@mui/icons-material/School"
import StarIcon from "@mui/icons-material/Star"

const JOURNEY = [
     {
          title: "Software Engineer",
          org: "Checkventory",
          period: "Aug 2021 — Jul 2026",
          description:
               "Built and improved front-end products for an inventory management SaaS platform using React and TypeScript, with a focus on offline-first workflows, front-end architecture, product quality, and cross-functional delivery.",
          type: "work",
          highlight: true,
     },
     {
          title: "Security Officer (Part Time)",
          org: "Bidvest Noonan",
          period: "Oct 2019 — Jul 2021",
          description:
               "Worked part time while completing my Masters, while continuing to strengthen my front-end skills and prepare for my next software engineering role.",
          type: "work",
     },
     {
          title: "M.Sc Advanced Software Development",
          org: "TU Dublin",
          period: "2018 — 2019",
          description:
               "Completed a Masters in Advanced Software Development, strengthening my foundations in software engineering, research, and full-stack development.",
          type: "education",
     },
     {
          title: "Senior Developer / Team Lead",
          org: "Jivox",
          period: "Aug 2016 — Aug 2018",
          description:
               "Led front-end delivery while contributing hands-on across planning, implementation, and quality, working closely with product and design stakeholders.",
          type: "work",
     },
     {
          title: "Widget Engineer",
          org: "Jivox",
          period: "Jul 2014 — Jul 2016",
          description:
               "Built custom widgets, single-page applications, and interactive ad experiences using JavaScript and front-end technologies for major consumer brands.",
          type: "work",
     },
     {
          title: "Associate UI Developer",
          org: "Exilant Technologies",
          period: "Aug 2012 — Jul 2014",
          description:
               "Built standards-compliant user interfaces and collaborated with design teams, establishing the foundation for my long-term front-end engineering career.",
          type: "work",
     },
     {
          title: "Bachelor of Engineering",
          org: "KSIT",
          period: "2009 — 2012",
          description:
               "Completed my undergraduate engineering degree, building the technical foundation for my software development career.",
          type: "education",
     },
     {
          title: "Diploma in Computer Science",
          org: "VET",
          period: "2005 — 2008",
          description:
               "Completed a diploma in computer science, where I built the early technical foundation for my journey into software engineering.",
          type: "education",
     },
]

function JourneyDot({ type, highlight }) {
     if (highlight) {
          return (
               <TimelineDot
                    sx={{
                         bgcolor: "primary.main",
                         boxShadow: "0 0 0 4px rgba(99,102,241,0.2)",
                    }}
               >
                    <StarIcon sx={{ fontSize: 16 }} />
               </TimelineDot>
          )
     }
     if (type === "education") {
          return (
               <TimelineDot
                    variant="outlined"
                    sx={{
                         borderColor: "secondary.main",
                         color: "secondary.main",
                    }}
               >
                    <SchoolIcon sx={{ fontSize: 16 }} />
               </TimelineDot>
          )
     }
     return (
          <TimelineDot
               variant="outlined"
               sx={{ borderColor: "primary.main", color: "primary.main" }}
          >
               <WorkIcon sx={{ fontSize: 16 }} />
          </TimelineDot>
     )
}

export default function Journey() {
     return (
          <Box
               component="section"
               id="experience"
               sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FFFFFF" }}
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
                         Experience
                    </Typography>
                    <Typography
                         variant="h2"
                         sx={{
                              mb: 8,
                              color: "text.primary",
                              fontSize: { xs: "2rem", md: "2.75rem" },
                         }}
                    >
                         My Journey
                    </Typography>

                    <Timeline position="alternate">
                         {JOURNEY.map((item, index) => (
                              <TimelineItem key={index}>
                                   <TimelineOppositeContent
                                        sx={{
                                             m: "auto 0",
                                             color: "text.secondary",
                                             fontSize: "0.8rem",
                                             fontWeight: 500,
                                        }}
                                        variant="body2"
                                   >
                                        {item.period}
                                   </TimelineOppositeContent>

                                   <TimelineSeparator>
                                        <TimelineConnector
                                             sx={{ bgcolor: "divider" }}
                                        />
                                        <JourneyDot
                                             type={item.type}
                                             highlight={item.highlight}
                                        />
                                        <TimelineConnector
                                             sx={{ bgcolor: "divider" }}
                                        />
                                   </TimelineSeparator>

                                   <TimelineContent sx={{ py: "16px", px: 2 }}>
                                        <Box
                                             sx={{
                                                  p: 2.5,
                                                  borderRadius: 3,
                                                  bgcolor: "#F8FAFC",
                                                  border: "1px solid",
                                                  borderColor: item.highlight
                                                       ? "primary.light"
                                                       : "divider",
                                                  transition: "box-shadow 0.2s",
                                                  "&:hover": {
                                                       boxShadow:
                                                            "0 4px 12px rgba(0,0,0,0.08)",
                                                  },
                                             }}
                                        >
                                             <Typography
                                                  variant="subtitle1"
                                                  fontWeight={600}
                                                  color="text.primary"
                                             >
                                                  {item.title}
                                             </Typography>
                                             <Typography
                                                  variant="body2"
                                                  color="primary.main"
                                                  fontWeight={500}
                                                  sx={{ mb: 0.5 }}
                                             >
                                                  {item.org}
                                             </Typography>
                                             <Typography
                                                  variant="body2"
                                                  color="text.secondary"
                                             >
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
