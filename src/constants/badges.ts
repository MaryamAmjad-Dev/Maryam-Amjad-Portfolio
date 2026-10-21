/**
 * Hero credential badges.
 *
 * Every badge here is substantiated by the CV
 * (`reference-docs/Maryam_Amjad_CV - Updated.pdf`):
 *   - Aspire Leaders Program, Cohort 3 (2026) alumna
 *   - 8 hackathons participated
 *   - 3 teams led
 *
 * The Stanford role is deliberately NOT in this list — it is rendered as the
 * prominent standalone role line beneath the name (see `STANFORD_ROLE`).
 */
export const PROFESSIONAL_BADGES = [
  "Aspire Leaders Alumna",
  "8x Hackathon",
  "3 Teams Led",
] as const;

/**
 * Primary professional identity. Kept verbatim from the CV so the claim is
 * never overstated.
 */
export const STANFORD_ROLE = "Section Leader at Stanford Code in Place X";

/**
 * Headline shown in the right-hand hero profile card. Deliberately reuses the
 * page headline rather than the Stanford role line, so the same credential is
 * not printed twice in one viewport.
 */
export const PROFILE_CARD_ROLE =
  "Full-Stack Developer • Trainer • Guest Speaker • Moderator";

export default PROFESSIONAL_BADGES;
