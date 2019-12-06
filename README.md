# vue-progress-list

## Quick start

1. Install using npm: `npm install CorpGlory/vue-progress-list`
2. Import the component: `import VueProgressList from 'vue-progress-list';`
3. Import styles in main project file (`src/main.js` / `src/main.ts`): `import 'vue-progress-list/dist/vue-progress-list.css';`
4. [Register](https://vuejs.org/v2/guide/components-registration.html) the component globally or in a separate component

## Usage example
```vue
<template>
  <vue-progress-list
    :items="[
      { title: 'Foo', value: 20, backgroundColor: 'green' }, 
      { title: 'Bar', value: 80, backgroundColor: 'red' }
    ]"
    :config="{ maxValue: 100 }"
  />
</template>
...
```

Result:

![image](https://user-images.githubusercontent.com/47055832/70167248-5a7ad300-16d7-11ea-96ac-f5311dc58b59.png)

## Props
- `items` — (required) array of configs for each progress bar, e.g:
```js
:items=[
  { title: 'Foo', value: 1, backgroundColor: 'green' },
  { title: 'Bar', value: 100, backgroundColor: 'red' }
]
```
- `config` — (required) progress-list config, e.g:
```js
:config={ maxValue: 100 }
```
- `maxValue` - (optional) maximum of item`s value, e.g:
```js
:maxValue=100
```
- `opacity` - (optional) css stype for progress bars, e.g:
```js
:opacity=0.5
```
- `threshold` - (optional) config with threshold values and colors, eg:
```js
:threshold={
  values: {
    upperValue: 60,
    lowerValue: 20
  },
  colors: {
    high: 'red',
    medium: 'yellow',
    low: 'green'
  }
}
```
Result:

![image](https://user-images.githubusercontent.com/39257464/70325419-fb39d180-1842-11ea-832c-01b25be6c3fa.png)

- `valueFormat` - (optional) format of item`s values, 'persentage' or 'absolute', eg:
```js
:valueFormat='abosule'
```
## Development

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
