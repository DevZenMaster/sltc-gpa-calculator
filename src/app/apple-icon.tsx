import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#030303',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '44px', // Modern premium rounding
          border: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
        }}
      >
        {/* Subtle Glow Background */}
        <div style={{
          position: 'absolute',
          width: '100px',
          height: '100px',
          background: 'rgba(59, 130, 246, 0.2)',
          filter: 'blur(30px)',
          borderRadius: '100%',
        }} />

        {/* Intelligence Hub Iconography */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          fontWeight: 900, 
          fontSize: '110px',
          fontStyle: 'italic',
          letterSpacing: '-0.05em',
          position: 'relative'
        }}>
          <span style={{ color: '#fff' }}>G</span>
          <span style={{ color: '#3b82f6' }}>.</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}