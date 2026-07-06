import type { ISODateString } from "@/types";

/** Format ISO date string to human-readable month and year */
export function formatDate(date: ISODateString, locale = "en-US"): string {
  const parts = date.split("-");
  const year = parts[0];
  const month = parts[1];

  if (!month) return year;

  const parsed = new Date(Number(year), Number(month) - 1);
  return parsed.toLocaleDateString(locale, {
    month: "short",
    year: "numeric",
  });
}

/** Format a date range for experience or education entries */
export function formatDateRange(
  startDate: ISODateString,
  endDate?: ISODateString,
  current = false,
): string {
  const start = formatDate(startDate);
  const end = current || !endDate ? "Present" : formatDate(endDate);
  return `${start} — ${end}`;
}
