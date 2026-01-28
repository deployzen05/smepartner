import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SME Partner - Leading Solar Solution Provider in UP',
    short_name: 'SME Partner',
    description:
      'SME Partner delivers end-to-end solar execution services. From Residential Rooftops to Industrial Power Plants, secure government subsidies and financing.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ea580c',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
