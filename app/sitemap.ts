import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.smepartner.in';

  // Core routes of the application
  const routes = [
    '',
    '/solar',
    '/subsidy',
    '/about',
    '/enquire',
    '/solar/services/residential',
    '/solar/services/commercial',
    '/solar/services/industrial',
    '/solar/services/pumps',
    '/solar/services/operations',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.length < 10 ? 0.9 : 0.8,
  }));
}
