import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://parvezkhan-ux.github.io/parvezkhan.github.io/sitemap.xml",
  };
}
