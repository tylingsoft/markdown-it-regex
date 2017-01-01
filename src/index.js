const iconsPlugin = (md, options) => {
  const arrayReplaceAt = md.utils.arrayReplaceAt

  md.renderer.rules.icons = (tokens, idx) => {
    return options.replace(tokens[idx].content)
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
          const newTokens = token.content.split(options.regex)
            .map((item, index) => ({ type: (index % 2 === 0 ? 'text' : 'icons'), content: item }))
            .filter((item) => item.content.length > 0).map((item) => {
              const newToken = new state.Token(item.type, '', 0)
              newToken.content = item.content
              return newToken
            })
          state.tokens[i].children = tokens = arrayReplaceAt(tokens, j, newTokens)
        }
      }
    }
  })
}

export default iconsPlugin
