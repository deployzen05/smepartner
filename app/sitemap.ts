import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.smepartner.in';

  // Core routes
  const routes = [
    '',
    '/about',
    '/subsidy',
    '/enquire',
    '/services',
    '/services/residential',
    '/services/commercial',
    '/services/industrial',
    '/services/pumps',
    '/services/operations',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
