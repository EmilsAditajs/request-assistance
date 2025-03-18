/**
 * Helper function to format breadcrumb labels:
 * - Replace "-" with spaces
 * - Capitalize each word
 */
export function formatLabel(text: string): string {
  const formattedText = text.replace(/-/g, " ");
  return formattedText.charAt(0).toUpperCase() + formattedText.slice(1);
};
