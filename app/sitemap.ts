import { MetadataRoute } from 'next';
// @ts-ignore (JS data file shared with the neighborhood pages)
import { neighborhoods } from '../lib/carrollton-neighborhoods';

const BASE_URL = 'https://sprinklersandlawns.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static Navigation Pages (Navbar se liye gaye)
  const staticPages = [
    { url: `${BASE_URL}`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${BASE_URL}/gallery`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/book`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
  ];

  // 2. Sprinkler Services (Navbar ke array se direct links)
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
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 3. Service Areas (Navbar ke array se direct links)
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
  ];

  const areaPages = serviceAreas.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 3b. Carrollton neighborhood pages (generated from lib/carrollton-neighborhoods.js)
  const carrolltonNeighborhoodPages = neighborhoods.map((n: { slug: string }) => ({
    url: `${BASE_URL}/service-areas/carrollton/${n.slug}`,
    lastModified: new Date('2026-11-17'),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // 4. (Optional) Agar database se mazeed blogs ya dynamic pages laane hon toh woh yahan fetch kar sakte hain:
  let dynamicBlogPages: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, { next: { revalidate: 3600 } });
    const blogs = await res.json();
    dynamicBlogPages = blogs.map((blog: { slug: string; updatedAt?: string }) => ({
      url: `${BASE_URL}/blog/${blog.slug}`,
      lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error('Dynamic blogs fetch failed for sitemap:', error);
  }

  // Sabhi links ko combine karke return kar dein
  return [...staticPages, ...servicePages, ...areaPages, ...carrolltonNeighborhoodPages, ...dynamicBlogPages];
}