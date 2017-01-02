# markdown-it-icons

Plugin for markdown-it, adding all kinds of icons, such as emojis and font-awesome icons.


## Installation

```
yarn add markdown-it-icons
```


## Usage

```javascript
import markdownIt from 'markdown-it'
import markdownItIcons from 'markdown-it-icons'
let mdi = markdownIt()
mdi = mdi.use(markdownItIcons, {
  name: 'emoji',
  regex: /(:heart:|:panda_face:|:car:)/,
  replace: (match) => {
    return `<i class="e1a-${match.slice(1, -1)}"></i>`
  }
})
mdi.render('I :heart: you') // <p>I <i class="e1a-heart"></i> you</p>
```


## Development

### Build

```
yarn run build
```

### Test

```
yarn test
```


## Todo

1. Rename this project to `markdown-it-regex`.
1. Create another project named `markdown-it-icons` which takes advantages of this project.
