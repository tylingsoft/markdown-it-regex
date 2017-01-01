import assert from 'assert'
import markdownIt from 'markdown-it'
import markdownItIcons from '../src/index'

let mdi = markdownIt({
  linkify: true
})
mdi = mdi.use(markdownItIcons, {
    name: 'emojione',
    regex: /\b:heart:\b/,
    replace: (code) => {
        return `<i class="e1a-${code}"></i>`
    }
})

console.log(mdi.render(':heart:'))
console.log('Everything seems fine!')
console.log(mdi.render(`http://baidu.com`))

// assert('<i class="e1a-heart"></i>' === mdi.render(':heart:'))
