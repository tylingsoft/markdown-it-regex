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

assert('<i class="e1a-heart"></i>' === mdi.render(':heart:'))

console.log('Everything seems fine!')
