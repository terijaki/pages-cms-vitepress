import DefaultTheme from 'vitepress/theme'
import brand from '../../configs/brand.json'

// Function to inject CSS variables from JSON
function injectCSSVariables(vars) {
  if (typeof window !== 'undefined') {
    const root = document.documentElement
    Object.entries(vars).forEach(([property, value]) => {
      root.style.setProperty(property, value)
    })
  }
}

// Enhanced theme with CSS variable injection
export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Call the default enhanceApp if it exists
    if (DefaultTheme.enhanceApp) {
      DefaultTheme.enhanceApp({ app, router, siteData })
    }
    
    // Inject CSS variables from JSON
    if (typeof window !== 'undefined') {
      injectCSSVariables(brand.colors)
    }
  },
  setup() {
    // Also inject on setup for SSR compatibility
    if (typeof window !== 'undefined') {
      injectCSSVariables(brand.colors)
    }
  }
}