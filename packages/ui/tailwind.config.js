import { defineShadcn } from '@creightive/tailwind-systems'

const radixTheme = {
  base: 'radix:slate',
  background: 'white',
  foreground: 'base-12',
  card: 'white',
  'card-foreground': 'base-12',
  popover: 'white',
  'popover-foreground': 'base-12',
  primary: 'base-dark-1',
  'primary-foreground': 'base-dark-12',
  secondary: 'base-4',
  'secondary-foreground': 'base-12',
  muted: 'base-a2',
  'muted-foreground': 'base-11',
  accent: 'base-4',
  'accent-foreground': 'base-12',
  destructive: 'red-9',
  'destructive-foreground': 'white',
  border: 'base-6',
  input: 'base-7',
  ring: 'base-8',
}
const tailwindTheme = {
  base: 'slate',
  colors: {
    background: 'white',
    foreground: 'base-950',
    card: 'white',
    'card-foreground': 'base-950',
    popover: 'white',
    'popover-foreground': 'base-950',
    primary: 'base-900',
    'primary-foreground': 'base-50',
    secondary: 'base-100',
    'secondary-foreground': 'base-900',
    muted: 'base-100',
    'muted-foreground': 'base-500',
    accent: 'base-100',
    'accent-foreground': 'base-900',
    destructive: 'red-500',
    'destructive-foreground': 'base-50',
    border: 'base-200',
    input: 'base-200',
    ring: 'base-950',
  },
  radius: 'lg',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
