# markdown-it-regex

Plugin for markdown-it, replaces strings that match a regular expression pattern.


## Installation

```
yarn add markdown-it-regex
```


## Usage

```javascript
import markdownIt from 'markdown-it'
import markdownItIcons from 'markdown-it-regex'
let mdi = markdownIt()
mdi = mdi.use(markdownItIcons, {
  name: 'emoji',
  regex: /(:(?:heart|panda_face|car):)/,
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

1. Create another project named `markdown-it-icons` which takes advantages of this project.
