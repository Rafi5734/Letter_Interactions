export const replaceConsecutiveLetters = (str) => {
  return str.replace(/([A-Z])\1{2,}/g, (match) => "_".repeat(match.length));
};
