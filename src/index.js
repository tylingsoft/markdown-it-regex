const iconsPlugin = (md, options) => {
  const arrayReplaceAt = md.utils.arrayReplaceAt

  md.renderer.rules.emoji = (tokens, idx) => {
    return tokens[idx].content
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
          state.tokens[i].children = tokens = arrayReplaceAt(tokens, j, [tokens[j]])
        }
      }
    }
  })
}

export default iconsPlugin
