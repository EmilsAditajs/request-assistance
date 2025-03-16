/**
 * Helper function to format labels:
 * - Replace "-" with spaces
 * - Capitalize first word
 */
export const formatLabel = (text: string): string => {
  const formattedText = text.replace(/-/g, " ");
  return formattedText.charAt(0).toUpperCase() + formattedText.slice(1);
};
