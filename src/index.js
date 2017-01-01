const iconsPlugin = (md, options) => {
  const arrayReplaceAt = md.utils.arrayReplaceAt

  md.renderer.rules.icons = (tokens, idx) => {
    return `<i>${tokens[idx].content}</i>`
  }

  md.core.ruler.push('icons', (state) => {
    let level = 0
    for (let i = 0; i < state.tokens.length; i++) {
      if (state.tokens[i].type !== 'inline') {
        continue
      }
      let tokens = state.tokens[i].children
      for (let j = tokens.length - 1; j >= 0; j--) {
        let token = tokens[j]
        if ((token.type === 'link_open' || token.type === 'link_close') && token.info === 'auto') {
          level -= token.nesting
        }
        if (level === 0 && token.type === 'text' && options.regex.test(token.content)) {
          const newTokens = token.content.split(options.regex).filter((item) => item.length > 0).map((item) => {
            const newToken = new state.Token('icons', '', 0)
            newToken.content = item
            return newToken
          })
          state.tokens[i].children = tokens = arrayReplaceAt(tokens, j, newTokens)
        }
      }
    }
  })
}

export default iconsPlugin
