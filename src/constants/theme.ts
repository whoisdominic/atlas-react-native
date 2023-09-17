interface Theme {
  background: string
  text: string
  primary: string
  secondary: string
}

export const theme: {
  light: Theme
  dark: Theme
} = {
  light: {
    background: "#fff",
    text: "#000",
    primary: "#0d8d91",
    secondary: "#4dbe80",
  },
  dark: {
    background: "#000",
    text: "#fff",
    primary: "#0d8d91",
    secondary: "#4dbe80",
  },
}
