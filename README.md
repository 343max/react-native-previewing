# react-native-previewing

very Quick Previews for native components

## Installation

```sh
npm install -D react-native-previewing
```

## Setup

add the select-preview and the postinstall script to your `package.json`:

```json
"scripts": {
  "select-preview": "npx select-preview.js",
  "postinstall": "npm run select-preview"
}
```

add Previewing to your root index.js/index.tsx by replacing:

```js
AppRegistry.registerComponent(appName, App)
```

by:

```js
AppRegistry.registerComponent(appName, () => {
  const { preview } = require('./preview_temp.js')
  return (__DEV__ && previewingRootComponent(preview)) || App
})
```

add these two tasks to your `.vscode/tasks.json`:

```json
"tasks": [
  {
    "label": "Preview: Show App",
    "type": "shell",
    "command": "npm run select-preview",
    "problemMatcher": [],
    "presentation": {
      "reveal": "silent",
      "clear": true
    }
  },
  {
    "label": "Preview: Show Preview for component in current file",
    "type": "shell",
    "command": "npm run select-preview ${relativeFile}",
    "problemMatcher": [],
    "presentation": {
      "reveal": "silent",
      "clear": true
    }
  }
]
```

## Usage

add a preview to your `.tsx` file:

```jsx
export const MyComponentPreview: PreviewProvider = () => (
  <MyComponent foo={1} bar={42} />
)
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
