/**
 * spellLevelValidator
 * @param {level} number or number[]
 * @returns {boolean} true if valid, false if not
 * @description Checks if level is between 1 and 9.
 * @example
 * spellLevelValidator([1, 2, 9]); -> true
 * spellLevelValidator(1); -> true
 * spellLevelValidator(10); -> false
 */
export const spellLevelValidator = (level: number | number[]): boolean => {
  const levels = Array.isArray(level) ? level : [level];
  if (levels.some((l) => l < 1 || l > 9)) {
    return false;
  }
  return true;
};

/**
 * characterLevelValidator
 * @param {level} number
 * @returns {boolean} true if valid, false if not
 * @description Checks if level is between 1 and 20.
 * @example
 * characterLevelValidator(1); -> true
 * characterLevelValidator(20); -> true
 * characterLevelValidator(21); -> false
 */
export const characterLevelValidator = (level: number): boolean => {
  if (level < 1 || level > 20) {
    return false;
  }
  return true;
};

/**
 * challengeRatingValidator
 * @param {level} number or number[]
 * @returns {boolean} true if valid, false if not
 * @description Checks if level is a part of the challenge rating system.
 * @example
 * challengeRatingValidator([1, 2, 9]); -> true
 * challengeRatingValidator(0.125); -> true
 * challengeRatingValidator(40); -> false
 */
export const challengeRatingValidator = (cr: number | number[]): boolean => {
  const challengeRatings = Array.isArray(cr) ? cr : [cr];
  if (challengeRatings.some((l) => l < 0 || l > 30 || (l < 1 && l !== 0.125 && l !== 0.25 && l !== 0.5))) {
    return false;
  }
  return true;
};
