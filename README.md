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
    name: 'font-awesome',
    regex: /\b:fa-[0-9a-z_]+?:\b/,
    replace: (code) => {
        return `<i class="fa ${code}"></i>`
    }
})
mdi = mdi.use(markdownItIcons, {
    name: 'emoji',
    regex: /\b:[0-9a-z_]+?:\b/,
    replace: (code) => {
        return `<i class="e1a-${code}"></i>`
    }
})
```


## Todo

1. It could be a generic solution: `markdown-it-regex`. Replace arbitrary content according to regex
