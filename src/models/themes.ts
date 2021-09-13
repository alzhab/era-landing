export enum ThemesTypes {
  light = "light",
  dark = "dark",
}

interface ITheme {
  backgroundColor: string,
  color: string,
}

export const themes: { [key in ThemesTypes]: any } = {
  [ThemesTypes.light]: {
    backgroundColor: "#fff",
    color: "#000",
  },
  [ThemesTypes.dark]: {
    backgroundColor: "#0D0D0D",
    color: "#E2E2E2",
  },
};
