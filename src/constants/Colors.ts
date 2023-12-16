const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
// const primaryColor = '#fc0303';

export const palette = {
  background: "#f0f9fc",
  black: "#101818",
  blackFaded: "rgba(0, 0, 0, 0.1)",
  blackTint: "#696977",
  buttonGreen: "#51AAB1",
  error: "#E25825",
  grey: "#C1C7CF",
  lightBorder: "rgba(128, 128, 128, .3)",
  primary: "#fc0303",
  primaryFaded: "rgba(60, 129, 188, .1)",
  secondary: "#878681",
  success: "#97E225",
  textRed: "#FF1313",
  transparent: "transparent",
  white: "#FBFBFB",
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
