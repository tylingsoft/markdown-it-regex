import markdownIt from 'markdown-it'
import markdownItIcons from '../src/index'

let mdi = markdownIt()
mdi = mdi.use(markdownItIcons, {
    name: 'emojione',
    regex: /\b:heart:\b/,
    replace: (code) => {
        return `<i class="e1a-${code}"></i>`
    }
})

console.log(mdi.render(':heart:'))
