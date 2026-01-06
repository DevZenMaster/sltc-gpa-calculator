import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'SLTC GPA Intelligence Hub'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#030303', // Match your site's ultra-dark background
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        {/* Background Ambient Glows */}
        <div style={{
          position: 'absolute',
          top: -150,
          left: -150,
          width: 600,
          height: 600,
          background: 'rgba(59, 130, 246, 0.15)',
          filter: 'blur(100px)',
          borderRadius: '100%',
        }} />
        <div style={{
          position: 'absolute',
          bottom: -150,
          right: -150,
          width: 600,
          height: 600,
          background: 'rgba(99, 102, 241, 0.15)',
          filter: 'blur(100px)',
          borderRadius: '100%',
        }} />

        {/* Brand Icon */}
        <div style={{ display: 'flex', marginBottom: 40 }}>
           <svg
            width="180"
            height="180"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="#3b82f6"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="#3b82f6"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeOpacity="0.5"
            />
          </svg>
        </div>

        {/* Typography Hub */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          justifyContent: 'center' 
        }}>
          <div style={{ 
            fontSize: 120, 
            fontWeight: 900, 
            letterSpacing: '-0.06em', 
            color: 'white',
            fontStyle: 'italic',
            textTransform: 'uppercase'
          }}>
            SLTC <span style={{ color: '#3b82f6' }}>GPA</span>
          </div>
          
          <div style={{ 
            fontSize: 24, 
            fontWeight: 900, 
            color: '#3b82f6', 
            letterSpacing: '0.8em', 
            textTransform: 'uppercase',
            marginTop: -10,
            opacity: 0.8
          }}>
            Intelligence
          </div>
        </div>
        
        {/* Status Badge */}
        <div style={{ 
          marginTop: 60, 
          fontSize: 22, 
          border: '1px solid rgba(255,255,255,0.1)',
          background: 'rgba(255,255,255,0.03)', 
          color: '#94a3b8', 
          padding: '12px 40px', 
          borderRadius: 20,
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
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