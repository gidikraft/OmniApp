const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export const palette = {
  background: "#FFFFFF",
  black: "#000000",
  error: "#E25825",
  lightBorder: "rgba(128, 128, 128, .3)",
  primary: "#A682FF",
  primaryFaded: "#c4b8e3",
  secondary: "#5B5656",
  success: "#97E225",
  textColor: "#313131",
  transparent: "transparent",
  white: "#FFFFFF",
};

export type PaletteType = keyof typeof palette;

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
