import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin',
    },
    sitemap: `${
      process.env.NEXT_PUBLIC_DOMAIN
        ? `${process.env.NEXT_PUBLIC_DOMAIN}/sitemap.xml`
        : null
    }`,
  };
}
