# Content model and proposed API

This document describes a backend-neutral contract for future dynamic content. It does not imply that an API or database exists yet. Start with local typed sample data, then implement the API against these concepts when the backend is selected.

## Content principles

- The public site returns published content only.
- Drafts and unpublished articles are never returned by public endpoints.
- Use stable IDs internally and human-readable slugs in URLs.
- Store timestamps in ISO 8601 UTC; format dates for readers in the UI.
- Store media as URLs plus useful alternative text. Do not put large image blobs in JSON responses.
- Keep skills and outcomes factual. Omit unsupported metrics.
- Store authored rich content in a constrained format (for example Markdown or a vetted block schema); sanitize it on the server before rendering.

## Frontend view models

The frontend can begin with these TypeScript shapes. Add fields only when a feature needs them.

```ts
export interface PortfolioProfile {
  name: string;
  headline: string;
  summary: string;
  location?: string;
  availability?: string;
  portrait?: MediaAsset;
  email: string;
  socialLinks: SocialLink[];
  resumeUrl?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  location?: string;
  startDate: string; // ISO date, YYYY-MM-DD
  endDate?: string; // absent means current
  summary: string;
  outcomes: string[];
  sortOrder: number;
}

export interface SkillGroup {
  id: string;
  label: string;
  skills: string[];
  sortOrder: number;
}

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  role: string;
  organization?: string;
  year?: number;
  summary: string;
  challenge: string;
  contribution: string;
  outcomes: string[];
  coverImage?: MediaAsset;
  tags: string[];
  featured: boolean;
  sortOrder: number;
}

export interface BlogPostSummary {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTimeMinutes?: number;
  coverImage?: MediaAsset;
  tags: string[];
}

export interface BlogPost extends BlogPostSummary {
  body: string; // sanitized Markdown or a validated block document
  updatedAt?: string;
}

export interface MediaAsset {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface SocialLink {
  label: string;
  url: string;
}
```

These are frontend-facing models, not a prescribed database schema. Backend validation and persistence models may differ.

## Proposed public endpoints

Use a versioned API prefix. The exact host and transport can be selected with the backend later.

| Method and path | Purpose |
| --- | --- |
| `GET /api/v1/public/portfolio` | Profile, experience, skills, featured projects, and About story |
| `GET /api/v1/public/projects` | Published project list; optional pagination/filtering |
| `GET /api/v1/public/projects/:slug` | Published case study |
| `GET /api/v1/public/posts?page=1&pageSize=10` | Published blog summaries, newest first |
| `GET /api/v1/public/posts/:slug` | Published article detail |

Suggested portfolio response envelope:

```json
{
  "data": {
    "profile": {},
    "experience": [],
    "skillGroups": [],
    "featuredProjects": [],
    "about": {
      "intro": "",
      "chapters": [],
      "offClock": ""
    },
    "testimonial": null
  },
  "meta": { "updatedAt": "2026-01-01T00:00:00Z" }
}
```

Error responses should use a consistent status code and machine-readable error code; do not expose stack traces or internal messages to public clients. List endpoints should return pagination metadata and use deterministic ordering.

## Proposed admin API boundary

Admin endpoints are intentionally not implemented. A possible future shape is `POST/PATCH/DELETE /api/v1/admin/...` with server-side authorization on every request. The admin UI should use draft/preview/publish states for blog posts and should not write directly to a database or object store from the browser.

Media upload should be mediated by an authenticated backend flow, with file type/size validation, safe storage, and generated variants. Secrets for storage, email, or the database must remain on the server.

## Runtime configuration

Do not hardcode a production API hostname into components. For the browser, use an explicitly public runtime configuration value or a same-origin relative `/api` route. For SSR, configure the server-side API origin through the deployment environment. These values are configuration, not secrets. Never put credentials in `environment.ts`, `public/`, or rendered HTML.
