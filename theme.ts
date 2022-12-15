import { buildLegacyTheme } from 'sanity'

const root = {
  '--my-white': '#fff',
  '--my-black': '#1a1a1a',
  '--brand': '#f7ab0a',
  '--my-red': '#db4437',
  '--my-yellow': '#f4b400',
  '--my-green': '#0f9d58'
}

export const myTheme = buildLegacyTheme({
  // Base theme colors
  '--black': root['--my-black'],
  '--white': root['--my-white'],

  '--gray': '#666',
  '--gray-base': '#666',

  '--component-bg': root['--my-black'],
  '--component-text-color': root['--my-white'],

  // Brand
  '--brand-primary': root['--brand'],

  // Default button
  '--default-button-color': '#666',
  '--default-button-primary-color': root['--brand'],
  '--default-button-success-color': root['--my-green'],
  '--default-button-warning-color': root['--my-yellow'],
  '--default-button-danger-color': root['--my-red'],

  // State
  '--state-info-color': root['--brand'],
  '--state-success-color': root['--my-green'],
  '--state-warning-color': root['--my-yellow'],
  '--state-danger-color': root['--my-red'],

  // Navbar
  '--main-navigation-color': root['--my-black'],
  '--main-navigation-color--inverted': root['--my-white'],

  '--focus-color': root['--brand']
})
