/**
 * Hero credential badges.
 *
 * Every badge here is substantiated by the CV
 * (`reference-docs/Maryam_Amjad_CV - Updated.pdf`):
 *   - Aspire Leaders Program, Cohort 3 (2026) alumna
 *   - 8 hackathons participated
 *   - 3 teams led
 *
 * The primary identity line is deliberately NOT in this list — it is rendered
 * as the standalone role line beneath the name (see `PRIMARY_ROLE`).
 */
export const PROFESSIONAL_BADGES = [
  "Aspire Leaders Alumna",
  "8x Hackathon",
  "3 Teams Led",
] as const;

/**
 * Primary identity shown directly beneath the name.
 *
 * "Prospective Graduate Student" is the current standing; the Stanford
 * Section Leader role is carried by the page headline and the profile card
 * rather than repeated here, so no credential is printed twice in one viewport.
 */
export const PRIMARY_ROLE = "Prospective Graduate Student";

/**
 * Headline shown in the right-hand hero profile card, the About badge and the
 * footer.
 *
 * Uses "SL" rather than spelling out "Section Leader" because the full phrase
 * no longer fits the profile card on narrow viewports, and the spelled-out
 * wording still appears in the About copy and in the Achievements card.
 */
export const PROFILE_CARD_ROLE = "SL @ Stanford Code in Place X";

export default PROFESSIONAL_BADGES;
