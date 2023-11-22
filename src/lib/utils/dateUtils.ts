export enum InSeconds {
  _1M = 1 * 60,
  _10M = 10 * 60,
  _30M = 30 * 60,
  _1Hour = 1 * 60 * 60,
  _1Day = 1 * 24 * 60 * 60,
  _1Week = 1 * 7 * 24 * 60 * 60,
  _1Month = 30 * 7 * 24 * 60 * 60,
  _1Year = 365 * 24 * 60 * 60,
}

/**
 * Format date.
 *
 * @param date      The Date object.
 * @param locale    The Intl.LocalesArgument.
 * @param options   The Intl.DateTimeFormatOptions.
 * @returns An object containing the Date object and the localized time string based on the given locale.
 */
export const formatLocaleDate = (
  date?: Date,
  locale?: Intl.LocalesArgument,
  options?: Intl.DateTimeFormatOptions
) =>
  (date || new Date()).toLocaleString(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
    ...options,
  });
