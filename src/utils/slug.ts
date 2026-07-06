/** Convert a string to a URL-safe slug */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Resolve a project slug from its title */
export function createProjectSlug(title: string): string {
  return slugify(title);
}
