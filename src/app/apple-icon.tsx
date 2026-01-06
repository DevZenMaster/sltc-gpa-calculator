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
          fontSize: 100,
          background: 'linear-gradient(to bottom right, #0f172a, #1e293b)', // Gradient Slate
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '32px', // Apple style rounded corners
        }}
      >
         {/* Large S Logo */}
         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '110px' }}>
            <span style={{ color: '#fff' }}>S</span>
            <span style={{ color: '#3b82f6' }}>.</span>
         </div>
      </div>
    ),
    {
      ...size,
    }
  )
}