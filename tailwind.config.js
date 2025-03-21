/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*/.vue", "./components/**/*.vue", "./layouts/**/*.vue"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-default)"],
      },
      fontSize: {
        "xs": ["0.75rem", "0.875rem"],
      },
      colors: {
        red: "var(--color-red)",
        "success-text": "var(--color-success-text)",
        "error-text": "var(--color-error-text)",
        "brand-blue": "var(--color-brand-blue)",
        "brand-blue-ui": "var(--color-brand-blue-ui)",
        "brand-green": "var(--color-brand-green)",
        "brand-green-hover": "var(--color-brand-green-hover)",
        "brand-white": "var(--color-brand-white)",
        "text-description": "var(--color-text-description)",
        "text-light": "var(--color-text-light)",
        "text-footer-title": "var(--color-text-footer-title)",
        "alert-info": "var(--color-alert-info)",
        "alert-warning": "var(--color-alert-warning)",
        "header-text": "var(--color-header-text)",
        "form-border": "var(--color-form-border)",
        "form-placeholder": "var(--color-form-placeholder)",
        "sidebar-background": "var(--color-sidebar-background)",
        "sidebar-divider": "var(--color-sidebar-divider)",
        "social-background": "var(--color-social-background)",
      },
      screens: {
        md: "768px",
        lg: "990px",
        xl: "1120px",
      }
    },
  },
  plugins: [],
};
