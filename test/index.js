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

assert(mdi.render('# Hello world').trim() === '<h1>Hello world</h1>')
assert(mdi.render('Hello world').trim() === '<p>Hello world</p>')
assert(mdi.render('http://baidu.com').trim() === '<p><a href="http://baidu.com">http://baidu.com</a></p>')
assert(mdi.render('baidu.com').trim() === '<p><a href="http://baidu.com">baidu.com</a></p>')

console.log(mdi.render(':heart:'))
// assert('<p><i class="e1a-heart"></i></p>' === mdi.render(':heart:').trim())
