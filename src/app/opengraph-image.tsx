import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'SLTC GPA Calculator'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default function Image() {
  return new ImageResponse(
    (
      // ImageContainer
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom right, #0f172a, #1e293b)', // Slate-900 gradient
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'white',
        }}
      >
        {/* Abstract Logo Shape */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
           {/* Graduation Cap Icon built with CSS shapes for OG Image */}
           <svg
            width="150"
            height="150"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: 30 }}
          >
            <path
              d="M22 10L12 5L2 10L12 15L22 10Z"
              stroke="white"
              strokeWidth="1.5"
              fill="rgba(255,255,255,0.1)"
            />
            <path
              d="M6 12V17C6 17.5 8 19 12 19C16 19 18 17.5 18 17V12"
              stroke="#3b82f6" // Brand Blue
              strokeWidth="1.5"
            />
            <path
              d="M22 10V16"
              stroke="#3b82f6"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <div style={{ fontSize: 80, fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1 }}>
          SLTC GPA
        </div>
        <div style={{ fontSize: 40, fontWeight: 700, color: '#94a3b8', marginTop: 20, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Faculty of Computing & IT
        </div>
        
        {/* Badge */}
        <div style={{ 
          marginTop: 60, 
          fontSize: 30, 
          background: '#3b82f6', 
          color: 'white', 
          padding: '10px 30px', 
          borderRadius: 50,
          fontWeight: 700
        }}>
          Unofficial Academic Strategist
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}