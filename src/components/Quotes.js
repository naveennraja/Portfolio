import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

const QUOTES = [
  "A person who comes up with a quote will be either inspired by someone or based on their own experience.",
  "When solving problems, sometimes you have to think diametrically opposite. You will certainly explore and learn new things. Remember, it is always willingness to learn.",
  "Even after years, you might still see me coding or playing around with JavaScript. I am a believer in doing things which I love.",
  "Every day you can improve yourself by taking baby steps from today to tomorrow, see the changes and thank yourself for the smallest changes you've got done.",
  "A problem can be solved in 'n' different ways. First solve the problem, try to optimise the solution as much as you can. You may learn something new there as well.",
  "To ace any programming language, sport or hobby — you have to deep dive and play around with it regularly. Believe me, this works.",
]

export default function Quotes() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => go(1), 6000)
    return () => clearInterval(timer)
  }, [current])

  function go(dir) {
    setAnimating(true)
    setTimeout(() => {
      setCurrent((prev) => (prev + dir + QUOTES.length) % QUOTES.length)
      setAnimating(false)
    }, 200)
  }

  return (
    <Box
      sx={{
        py: { xs: 10, md: 12 },
        bgcolor: '#0F172A',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(99,102,241,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>

        {/* Large decorative quote mark */}
        <FormatQuoteIcon
          sx={{
            fontSize: 72,
            color: 'rgba(99,102,241,0.25)',
            mb: -2,
            display: 'block',
            mx: 'auto',
          }}
        />

        {/* Quote text */}
        <Typography
          variant="h5"
          sx={{
            color: 'rgba(255,255,255,0.85)',
            fontWeight: 400,
            lineHeight: 1.75,
            fontStyle: 'italic',
            mb: 5,
            minHeight: { xs: 'auto', md: 120 },
            opacity: animating ? 0 : 1,
            transform: animating ? 'translateY(8px)' : 'translateY(0)',
            transition: 'opacity 0.2s ease, transform 0.2s ease',
            fontSize: { xs: '1.05rem', md: '1.3rem' },
          }}
        >
          &ldquo;{QUOTES[current]}&rdquo;
        </Typography>

        {/* Controls */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
          <IconButton
            onClick={() => go(-1)}
            size="small"
            sx={{
              color: 'rgba(255,255,255,0.4)',
              border: '1px solid rgba(255,255,255,0.1)',
              '&:hover': { color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' },
            }}
          >
            <ArrowBackIcon fontSize="small" />
          </IconButton>

          {/* Dot indicators */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            {QUOTES.map((_, i) => (
              <Box
                key={i}
                component="button"
                onClick={() => { setAnimating(true); setTimeout(() => { setCurrent(i); setAnimating(false) }, 200) }}
                aria-label={`Go to quote ${i + 1}`}
                aria-current={i === current ? 'true' : undefined}
                sx={{
                  width: i === current ? 20 : 6,
                  height: 6,
                  borderRadius: 3,
                  bgcolor: i === current ? '#818CF8' : 'rgba(255,255,255,0.2)',
                  cursor: 'pointer',
                  border: 'none',
                  p: 0,
                  transition: 'width 0.3s ease, background-color 0.3s ease',
                  '&:focus-visible': { outline: '2px solid #818CF8', outlineOffset: 2 },
                }}
              />
            ))}
          </Box>

          <IconButton
            onClick={() => go(1)}
            size="small"
            sx={{
              color: 'rgba(255,255,255,0.4)',
              border: '1px solid rgba(255,255,255,0.1)',
              '&:hover': { color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' },
            }}
          >
            <ArrowForwardIcon fontSize="small" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  )
}
