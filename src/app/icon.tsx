import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageContainer
      <div
        style={{
          fontSize: 24,
          background: '#0f172a', // Slate-900
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '8px', // Rounded corners like mobile apps
          position: 'relative',
        }}
      >
        {/* Abstract Graduation Cap "V" Shape */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cap Top */}
          <path
            d="M22 10L12 5L2 10L12 15L22 10Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="#0f172a"
          />
          {/* Cap Bottom Lines */}
          <path
            d="M6 12V17C6 17.5 8 19 12 19C16 19 18 17.5 18 17V12"
            stroke="#3b82f6" // Blue-500
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Tassel */}
          <path
            d="M22 10V16"
            stroke="#3b82f6" // Blue-500
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}