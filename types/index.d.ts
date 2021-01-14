/*
 * SPDX-FileCopyrightText: 2021 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

declare module 'markdown-it-regex' {
  import MarkdownIt from 'markdown-it/lib'

  namespace markdownItRegex {
    export interface RegexOptions {
      name: string,
      regex: RegExp,
      replace: (match: string) => string
    }
  }

  const markdownItRegex: MarkdownIt.PluginWithOptions<markdownItRegex.RegexOptions>

  export = markdownItRegex
}
