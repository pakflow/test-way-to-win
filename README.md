# React + TypeScript + Vite

This project is built with React and TypeScript using Vite.

## Getting Started

Follow these instructions to get a local copy of the project up and running on your machine.

### Prerequisites

Before you start, make sure you have Node.js and npm (or yarn) installed on your machine.

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- npm: Install npm by installing Node.js (npm comes bundled with Node.js) or by following the instructions in the [npm documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pakflow/test-way-to-win

2. Navigate to the project:

  cd test-way-to-win

3. Install dependencies using npm or yarn:

  npm install
  # or
  yarn

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
