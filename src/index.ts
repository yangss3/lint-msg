#!/usr/bin/env node

import path from 'path'
import fs from 'fs-extra'
import color from 'picocolors'

const msgPath = path.resolve(process.cwd(), '.git/COMMIT_EDITMSG')
const msg = fs.readFileSync(msgPath, 'utf-8').trim()
const releaseRegEx = /^v?(0|[1-9]\d*)(\.(0|[1-9]\d*))*$/
const msgRegEx = /^(revert: )?(feat|fix|docs|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps|style)(\(.+\))?: .{1,50}/

if (!releaseRegEx.test(msg) && !msgRegEx.test(msg)) {
  console.log()
  console.error(`${color.bgRed(color.bold(color.white(' Error: ')))}${color.red('invalid commit message format.')}
  See ${color.cyan('https://www.conventionalcommits.org')} for more details.
`)
  process.exit(1)
}

