# Atlas Boilerplate

This is **Atlas** a boilerplate for React Native & Expo projects using Bun 😍.

## Features

- Bun: It's fucking fast dude...
- Example Architecture: Flux w/ a twist 🍋
- Built in Navigation & Deep Linking 🚦
- Redux toolkit starting point ♾️
- Snippets

## Getting Started

If you don't have bun yet you can download it [here](https://bun.sh/)

To install dependencies run `bun install`

Using scripts is simple just replace...

yarn install || npm install

```bash
 => bun install
```

yarn add {package} || npm install {package}

```bash
 => bun install {package}
```

npx {command}

```bash
 => bunx {command}
```

## Important Concepts

- Redux
- Interactors
- Guards
- File naming conventions

### Deep linking

You can test out linking using the following command

```bash
 npx uri-scheme open "exp://127.0.0.1:8081/--/" --ios
```
