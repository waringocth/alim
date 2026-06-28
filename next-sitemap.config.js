/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.dhscamsistemleri.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  exclude: ["/404", "/500"],
  transform: async (config, path) => {
    let priority = config.priority;
    
    if (path === "/") {
      priority = 1.0;
    } else if (path.startsWith("/hizmetler")) {
      priority = 0.9;
    } else if (path.startsWith("/hizmet-bolgeleri")) {
      priority = 0.8;
    } else if (path.startsWith("/blog")) {
      priority = 0.7;
    }
    
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
