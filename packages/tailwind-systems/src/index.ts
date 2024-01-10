import { fontFamily } from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'
import type { ShadcnTheme } from './lib/types'
// import mapValues from 'lodash.mapvalues'

const ROOT_COLORS_VARIABLES = {
  '--background': '<%- colors.light["background"] %>',
  '--foreground': '<%- colors.light["foreground"] %>',
  '--card': '<%- colors.light["card"] %>',
  '--card-foreground': '<%- colors.light["card-foreground"] %>',
  '--popover': '<%- colors.light["popover"] %>',
  '--popover-foreground': '<%- colors.light["popover-foreground"] %>',
  '--primary': '<%- colors.light["primary"] %>',
  '--primary-foreground': '<%- colors.light["primary-foreground"] %>',
  '--secondary': '<%- colors.light["secondary"] %>',
  '--secondary-foreground': '<%- colors.light["secondary-foreground"] %>',
  '--muted': '<%- colors.light["muted"] %>',
  '--muted-foreground': '<%- colors.light["muted-foreground"] %>',
  '--accent': '<%- colors.light["accent"] %>',
  '--accent-foreground': '<%- colors.light["accent-foreground"] %>',
  '--destructive': '<%- colors.light["destructive"] %>',
  '--destructive-foreground': '<%- colors.light["destructive-foreground"] %>',
  '--border': '<%- colors.light["border"] %>',
  '--input': '<%- colors.light["input"] %>',
  '--ring': '<%- colors.light["ring"] %>',
}

const DARK_COLORS_VARIABLES = {
  '--background': '<%- colors.dark["background"] %>',
  '--foreground': '<%- colors.dark["foreground"] %>',
  '--card': '<%- colors.dark["card"] %>',
  '--card-foreground': '<%- colors.dark["card-foreground"] %>',
  '--popover': '<%- colors.dark["popover"] %>',
  '--popover-foreground': '<%- colors.dark["popover-foreground"] %>',
  '--primary': '<%- colors.dark["primary"] %>',
  '--primary-foreground': '<%- colors.dark["primary-foreground"] %>',
  '--secondary': '<%- colors.dark["secondary"] %>',
  '--secondary-foreground': '<%- colors.dark["secondary-foreground"] %>',
  '--muted': '<%- colors.dark["muted"] %>',
  '--muted-foreground': '<%- colors.dark["muted-foreground"] %>',
  '--accent': '<%- colors.dark["accent"] %>',
  '--accent-foreground': '<%- colors.dark["accent-foreground"] %>',
  '--destructive': '<%- colors.dark["destructive"] %>',
  '--destructive-foreground': '<%- colors.dark["destructive-foreground"] %>',
  '--border': '<%- colors.dark["border"] %>',
  '--input': '<%- colors.dark["input"] %>',
  '--ring': '<%- colors.dark["ring"] %>',
}

const light: Record<string, string> = {}
const dark: Record<string, string> = {}
// const getLightColorFromKey = (_, k, c) => light[k]
// const getDarkColorFromKey = (_, k, c) => dark[k]

export const defineShadcn = plugin.withOptions(
  (opt: ShadcnTheme) => {
    return ({ addBase }) => {
      // TODO: based on options grab base color and map variables objects
      addBase({
        ':root': ROOT_COLORS_VARIABLES,
        '.dark': DARK_COLORS_VARIABLES,
        '*': {
          borderColor: 'theme(colors.border)',
        },
        body: {
          backgroundColor: 'theme(colors.background)',
          color: 'theme(colors.text-foreground)',
        },
      })
    }
  },
  (opt: ShadcnTheme) => {
    // TODO: theme utilities
    return {
      darkMode: ['class'],
      content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
      theme: {
        container: {
          center: true,
          padding: '2rem',
          screens: {
            '2xl': '1400px',
          },
        },
        extend: {
          colors: {
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
              DEFAULT: 'hsl(var(--primary))',
              foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
              DEFAULT: 'hsl(var(--secondary))',
              foreground: 'hsl(var(--secondary-foreground))',
            },
            destructive: {
              DEFAULT: 'hsl(var(--destructive))',
              foreground: 'hsl(var(--destructive-foreground))',
            },
            muted: {
              DEFAULT: 'hsl(var(--muted))',
              foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
              DEFAULT: 'hsl(var(--accent))',
              foreground: 'hsl(var(--accent-foreground))',
            },
            popover: {
              DEFAULT: 'hsl(var(--popover))',
              foreground: 'hsl(var(--popover-foreground))',
            },
            card: {
              DEFAULT: 'hsl(var(--card))',
              foreground: 'hsl(var(--card-foreground))',
            },
          },
          borderRadius: {
            lg: `var(--radius)`,
            md: `calc(var(--radius) - 2px)`,
            sm: 'calc(var(--radius) - 4px)',
          },
          fontFamily: {
            sans: ['var(--font-sans)', ...fontFamily.sans],
          },
          keyframes: {
            'accordion-down': {
              from: { height: '0' },
              to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
              from: { height: 'var(--radix-accordion-content-height)' },
              to: { height: '0' },
            },
          },
          animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
          },
        },
      },
    }
  },
)
