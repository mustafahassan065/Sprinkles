import { MetadataRoute } from 'next';

// @ts-ignore (JS data files shared with the neighborhood pages)
import { neighborhoods as carrolltonNeighborhoods } from '../lib/carrollton-neighborhoods';
// @ts-ignore
import { neighborhoods as dallasNeighborhoods } from '../lib/dallas-neighborhoods';
// @ts-ignore
import { neighborhoods as irvingNeighborhoods } from '../lib/irving-neighborhoods';
// @ts-ignore
import { neighborhoods as mckinneyNeighborhoods } from '../lib/mckinney-neighborhoods';
// @ts-ignore
import { neighborhoods as planoNeighborhoods } from '../lib/plano-neighborhoods';
// @ts-ignore
import { neighborhoods as flowerMoundNeighborhoods } from '../lib/flower-mound-neighborhoods';
// @ts-ignore
import { neighborhoods as garlandNeighborhoods } from '../lib/garland-neighborhoods';
// @ts-ignore
import { neighborhoods as richardsonNeighborhoods } from '../lib/richardson-neighborhoods';
// @ts-ignore
import { neighborhoods as rowlettNeighborhoods } from '../lib/rowlett-neighborhoods';

const BASE_URL = 'https://sprinklersandlawns.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // 1. Static Navigation Pages
  const staticPages = [
    { url: `${BASE_URL}`, lastModified: now, changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${BASE_URL}/gallery`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/book`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/service-areas`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
  ];

  // 2. Sprinkler Services
  const sprinklerServices = [
    '/sprinkler-repair',
    '/sprinkler-installation',
    '/irrigation-design',
    '/smart-controllers',
    '/rain-freeze-sensors',
    '/water-saving-solutions',
    '/seasonal-maintenance',
    '/commercial-services',
    '/landscape-services',
  ];

  const servicePages = sprinklerServices.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 3. Service Areas (main city pages)
  const serviceAreas = [
    '/service-areas/carollton',
    '/service-areas/iriving',
    '/service-areas/mckinney',
    '/service-areas/plano',
    '/service-areas/dallas',
    '/service-areas/flower-mound',
    '/service-areas/garland',
    '/service-areas/richardson',
    '/service-areas/rowlett',
    '/service-areas/celina',
    '/service-areas/melissa',
    '/service-areas/anna',
    '/service-areas/forney',
    '/service-areas/princeton',
  ];

  const areaPages = serviceAreas.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 4. Neighborhood pages (generated from lib/*-neighborhoods.js)
  const buildNeighborhoodPages = (cityPath: string, list: { slug: string }[]) =>
    list.map((n) => ({
      url: `${BASE_URL}/service-areas/${cityPath}/${n.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const carrolltonNeighborhoodPages = buildNeighborhoodPages('carollton', carrolltonNeighborhoods);
  const dallasNeighborhoodPages = buildNeighborhoodPages('dallas', dallasNeighborhoods);
  const irvingNeighborhoodPages = buildNeighborhoodPages('irving', irvingNeighborhoods);
  const mckinneyNeighborhoodPages = buildNeighborhoodPages('mckinney', mckinneyNeighborhoods);
  const planoNeighborhoodPages = buildNeighborhoodPages('plano', planoNeighborhoods);
  const flowerMoundNeighborhoodPages = buildNeighborhoodPages('flower-mound', flowerMoundNeighborhoods);
  const garlandNeighborhoodPages = buildNeighborhoodPages('garland', garlandNeighborhoods);
  const richardsonNeighborhoodPages = buildNeighborhoodPages('richardson', richardsonNeighborhoods);
  const rowlettNeighborhoodPages = buildNeighborhoodPages('rowlett', rowlettNeighborhoods);

  // 5. Dynamic blog pages (optional)
  let dynamicBlogPages: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, { next: { revalidate: 3600 } });
    const blogs = await res.json();
    dynamicBlogPages = blogs.map((blog: { slug: string; updatedAt?: string }) => ({
      url: `${BASE_URL}/blog/${blog.slug}`,
      lastModified: blog.updatedAt ? new Date(blog.updatedAt) : now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error('Dynamic blogs fetch failed for sitemap:', error);
  }

  return [
    ...staticPages,
    ...servicePages,
    ...areaPages,
    ...carrolltonNeighborhoodPages,
    ...dallasNeighborhoodPages,
    ...irvingNeighborhoodPages,
    ...mckinneyNeighborhoodPages,
    ...planoNeighborhoodPages,
    ...flowerMoundNeighborhoodPages,
    ...garlandNeighborhoodPages,
    ...richardsonNeighborhoodPages,
    ...rowlettNeighborhoodPages,
    ...dynamicBlogPages,
  ];
}