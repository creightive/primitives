import {TAILWIND_THEMES} from "./themes";

export type ShadcnColorTokens = {
  background: string
  foreground: string
  card: string
  cardForeground: string
  popover: string
  popoverForeground: string
  primary: string
  primaryForeground: string
  secondary: string
  secondaryForeground: string
  muted: string
  mutedForeground: string
  accent: string
  accentForeground: string
  destructive: string
  destructiveForeground: string
  border: string
  input: string
  ring: string
}

type RadixRadiusValues = 'none' | 'sm' | 'md' | 'lg' | 'full'
export interface ShadcnTheme {
  /**
   * Gray is a key neutral color and is the crux of any UI design. Majority of the UI design elements like text, forms, shadows, backgrounds, dividers are all usually gray.
   */
  base?: keyof typeof TAILWIND_THEMES
  /**
   *
   */
  colors?: Partial<ShadcnColorTokens>
  /**
   *
   */
  radius?: RadixRadiusValues | number
}
