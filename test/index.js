import assert from 'assert'
import markdownIt from 'markdown-it'
import markdownItIcons from '../src/index'

let mdi = markdownIt()
mdi = mdi.use(markdownItIcons, {
  name: 'emoji',
  regex: /(:(?:heart|panda_face|car):)/,
  replace: (match) => {
    return `<i class="e1a-${match.slice(1, -1)}"></i>`
  }
})

assert(mdi.render('# Hello world').trim() === '<h1>Hello world</h1>')
assert(mdi.render('Hello world').trim() === '<p>Hello world</p>')

assert(mdi.render(':heart:').trim() === '<p><i class="e1a-heart"></i></p>')
assert(mdi.render('I :heart: you').trim() === '<p>I <i class="e1a-heart"></i> you</p>')
assert(mdi.render('I :heart: :heart: :heart: you').trim() === '<p>I <i class="e1a-heart"></i> <i class="e1a-heart"></i> <i class="e1a-heart"></i> you</p>')

console.log(mdi.render('I :heart: :heart: :heart: you'))
