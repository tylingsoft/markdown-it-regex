import assert from 'assert'
import markdownIt from 'markdown-it'
import markdownItRegex, { rendererRule, coreRuler } from '../dist/index'

const mdi = markdownIt()
mdi.use(markdownItRegex, {
  name: 'emoji',
  regex: /(:(?:heart|panda_face|car):)/,
  replace: (match) => {
    return `<i class="e1a-${match.slice(1, -1)}"></i>`
  }
})
mdi.use(markdownItRegex, {
  name: 'font-awesome',
  regex: /(:fa-(?:truck|rocket|leaf):)/,
  replace: (match) => {
    return `<i class="fa ${match.slice(1, -1)}"></i>`
  }
})
mdi.use(markdownItRegex, {
  name: 'spaces',
  regex: /([ ]{2,})/,
  replace: (match) => {
    return `&nbsp;&nbsp;`
  }
})

assert(mdi.render('# Hello world').trim() === '<h1>Hello world</h1>')
assert(mdi.render('Hello world').trim() === '<p>Hello world</p>')

assert(mdi.render(':heart:').trim() === '<p><i class="e1a-heart"></i></p>')
assert(mdi.render('I :heart: you').trim() === '<p>I <i class="e1a-heart"></i> you</p>')
assert(mdi.render('I :heart: :heart: :heart: you').trim() === '<p>I <i class="e1a-heart"></i> <i class="e1a-heart"></i> <i class="e1a-heart"></i> you</p>')

assert(mdi.render('A :fa-truck: runs').trim() === '<p>A <i class="fa fa-truck"></i> runs</p>')

assert(mdi.render('Hey       There'), '<p>Hey&nbsp;&nbsp;There</p>')

console.log(mdi.render('I :heart: :heart: :heart: you'))
console.log(mdi.render('A :fa-truck: runs'))
console.log(mdi.render('Hey       There'))

assert(rendererRule && coreRuler)
